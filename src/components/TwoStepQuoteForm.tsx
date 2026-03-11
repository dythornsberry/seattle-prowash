import { useState, useRef, useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Valid email is required").max(255),
  address: z.string().trim().min(10, "Please enter your full street address").max(300),
  phone: z.string().trim().max(20).refine((val) => {
    const digits = val.replace(/\D/g, '');
    if (digits.length !== 10) return false;
    // Reject all-same-digit numbers (e.g. 1111111111)
    if (/^(\d)\1{9}$/.test(digits)) return false;
    // Reject 555 exchange (classic fake numbers)
    if (digits.slice(3, 6) === '555') return false;
    // Reject numbers starting with 0 or 1 (invalid US area codes)
    if (digits[0] === '0' || digits[0] === '1') return false;
    return true;
  }, { message: "Please enter a valid 10-digit phone number" }),
  services: z.array(z.string()).min(1, "Please select at least one service"),
  company: z.string().max(0, "Invalid submission"), // honeypot
});

const TwoStepQuoteForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [step, setStep] = useState(1);
  const EDGE_FUNCTION_NAME = "submit-quote";

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      address: "",
      phone: "",
      services: [],
      company: "",
    },
  });

  // Google Places Autocomplete
  const addressInputRef = useRef<HTMLInputElement | null>(null);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

  const initAutocomplete = useCallback(() => {
    if (!addressInputRef.current || autocompleteRef.current) return;
    if (typeof google === 'undefined' || !google?.maps?.places) return;

    const autocomplete = new google.maps.places.Autocomplete(addressInputRef.current, {
      types: ['address'],
      componentRestrictions: { country: 'us' },
      fields: ['formatted_address'],
    });

    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      if (place?.formatted_address) {
        form.setValue('address', place.formatted_address, { shouldValidate: true });
      }
    });

    autocompleteRef.current = autocomplete;
  }, [form]);

  // Lazy-load Google Maps script only when this form mounts
  useEffect(() => {
    const MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
    if (!MAPS_API_KEY) return;

    // If already loaded (e.g. navigated back to this page), just init
    if (typeof google !== 'undefined' && google?.maps?.places) {
      initAutocomplete();
      return;
    }

    // Don't inject a second script if one is already loading
    if (document.querySelector('script[src*="maps.googleapis.com"]')) {
      const checkInterval = setInterval(() => {
        if (typeof google !== 'undefined' && google?.maps?.places) {
          initAutocomplete();
          clearInterval(checkInterval);
        }
      }, 500);
      return () => clearInterval(checkInterval);
    }

    // Dynamically inject the Google Maps script
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${MAPS_API_KEY}&libraries=places&loading=async`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    const checkInterval = setInterval(() => {
      if (typeof google !== 'undefined' && google?.maps?.places) {
        initAutocomplete();
        clearInterval(checkInterval);
      }
    }, 500);
    return () => clearInterval(checkInterval);
  }, [initAutocomplete]);

  // Re-init autocomplete when step 2 renders (address input mounts)
  useEffect(() => {
    if (step === 2 && !autocompleteRef.current) {
      // Small delay to let the DOM render the address input
      const timer = setTimeout(() => initAutocomplete(), 100);
      return () => clearTimeout(timer);
    }
  }, [step, initAutocomplete]);

  const formatPhoneNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.length <= 3) return cleaned;
    if (cleaned.length <= 6) return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`;
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`;
  };

  const buildPayload = (values: z.infer<typeof formSchema>) => ({
    name: values.name,
    email: values.email,
    address: values.address,
    phone: values.phone,
    services: values.services.join(", "),
    timestamp: new Date().toISOString(),
    source: "Website Quote Form",
    business_name: "Seattle ProWash",
  });

  const sendToWebhook = async (values: z.infer<typeof formSchema>) => {
    const payload = buildPayload(values);

    const { data, error } = await supabase.functions.invoke(EDGE_FUNCTION_NAME, {
      body: payload,
    });

    if (error) {
      throw new Error(error.message || "Proxy error");
    }
    if (!data?.ok) {
      throw new Error("Proxy failed");
    }
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // Honeypot check
    if (values.company) {
      console.warn("Spam detected");
      return;
    }

    setIsSubmitting(true);

    try {
      // Track analytics
      if (window.gtag) {
        window.gtag('event', 'quote_form_submit', {
          service_selected: values.services.join(", "),
          page_location: window.location.pathname
        });
      }

      await sendToWebhook(values);

      setIsSubmitted(true);
      setStep(1);
      form.reset();

    } catch (error) {
      console.error("Quote submit error:", error);
      toast({
        title: "Network issue",
        description: "Please try again or call 206-752-6690.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNextStep = async () => {
    // Validate only step 1 fields before advancing
    const valid = await form.trigger(['name', 'phone']);
    if (valid) {
      setStep(2);
      // Track step progression
      if (window.gtag) {
        window.gtag('event', 'quote_form_step2', {
          page_location: window.location.pathname
        });
      }
    }
  };

  const handleCallClick = () => {
    if (window.gtag) {
      window.gtag('event', 'click_to_call');
    }
  };

  return (
    <section id="contact" className="section-spacing bg-off-white/50 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 fade-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-4 font-heading">
              Request Your Free Quote
            </h2>
            <p className="text-sm text-muted-foreground">
              Prefer to call? <a href="tel:12067526690" className="hover:text-brand-orange transition-colors" onClick={handleCallClick}>206-752-6690</a> (call or text anytime)
            </p>
          </div>

          <div className="max-w-2xl mx-auto fade-up">
            {isSubmitted ? (
              <Card className="border-2 border-green-500/30 shadow-xl rounded-xl">
                <CardContent className="py-12 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-2">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-brand-navy">Got it! We're on it.</h3>
                  <p className="text-muted-foreground text-lg max-w-md mx-auto">
                    We're looking up your roof now. Expect a text or email with your quote within <strong>1 hour</strong>.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Questions? Call <a href="tel:12067526690" className="text-brand-orange font-semibold hover:underline">206-752-6690</a> anytime.
                  </p>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-2 border-brand-navy/20 shadow-xl rounded-xl">
                <CardHeader className="pb-4">
                  <CardDescription className="text-base text-muted-foreground">
                    {step === 1
                      ? "Step 1 of 2 — Let's start with your info"
                      : "Step 2 of 2 — Almost done!"}
                  </CardDescription>
                  {/* Progress bar */}
                  <div className="flex gap-2 mt-3">
                    <div className="h-1.5 flex-1 rounded-full bg-brand-orange" />
                    <div className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${step === 2 ? 'bg-brand-orange' : 'bg-brand-navy/15'}`} />
                  </div>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form className="space-y-6" autoComplete="on" onSubmit={form.handleSubmit(onSubmit)}>
                      {/* Honeypot field - hidden on all steps */}
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem className="hidden">
                            <FormControl>
                              <Input
                                tabIndex={-1}
                                autoComplete="off"
                                {...field}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />

                      {/* ─── STEP 1: Name + Phone ─── */}
                      {step === 1 && (
                        <>
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-brand-navy font-semibold">Name *</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Your name"
                                    className="border-brand-navy/30 focus:border-brand-orange min-h-[56px] text-lg md:text-sm md:min-h-[48px] rounded-xl"
                                    autoComplete="name"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-brand-navy font-semibold">Phone *</FormLabel>
                                <FormControl>
                                  <Input
                                    type="tel"
                                    placeholder="(206) XXX-XXXX"
                                    className="border-brand-navy/30 focus:border-brand-orange min-h-[56px] text-lg md:text-sm md:min-h-[48px] rounded-xl"
                                    autoComplete="tel"
                                    {...field}
                                    onChange={(e) => {
                                      const formatted = formatPhoneNumber(e.target.value);
                                      field.onChange(formatted);
                                    }}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <Button
                            type="button"
                            variant="cta-orange"
                            className="w-full min-h-[56px] text-lg font-bold rounded-xl"
                            onClick={handleNextStep}
                          >
                            Next — Choose Services →
                          </Button>

                          <p className="text-center text-muted-foreground text-xs">
                            🔒 Your info stays private — we never share or spam.
                          </p>
                        </>
                      )}

                      {/* ─── STEP 2: Email + Address + Services + Submit ─── */}
                      {step === 2 && (
                        <>
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-brand-navy font-semibold">Email *</FormLabel>
                                <FormControl>
                                  <Input
                                    type="email"
                                    placeholder="your@email.com"
                                    className="border-brand-navy/30 focus:border-brand-orange min-h-[56px] text-lg md:text-sm md:min-h-[48px] rounded-xl"
                                    autoComplete="email"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="address"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-brand-navy font-semibold">Address *</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Start typing your address..."
                                    className="border-brand-navy/30 focus:border-brand-orange min-h-[56px] text-lg md:text-sm md:min-h-[48px] rounded-xl"
                                    autoComplete="off"
                                    {...field}
                                    ref={(el) => {
                                      field.ref(el);
                                      addressInputRef.current = el;
                                    }}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="services"
                            render={() => (
                              <FormItem>
                                <FormLabel className="text-brand-navy font-semibold">Services Needed *</FormLabel>
                                <div className="space-y-3">
                                    <FormField
                                    control={form.control}
                                    name="services"
                                    render={({ field }) => (
                                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border-2 border-brand-orange/40 bg-brand-orange/5 p-4 relative">
                                        <FormControl>
                                          <Checkbox
                                            checked={field.value?.includes("Roof cleaning (moss removal & treatment)")}
                                            onCheckedChange={(checked) => {
                                              const value = "Roof cleaning (moss removal & treatment)";
                                              return checked
                                                ? field.onChange([...field.value, value])
                                                : field.onChange(field.value?.filter((v) => v !== value));
                                            }}
                                          />
                                        </FormControl>
                                        <div className="flex flex-col space-y-1">
                                          <FormLabel className="text-sm font-semibold text-brand-navy cursor-pointer leading-none">
                                            Roof Cleaning (our premium all-in-one)
                                          </FormLabel>
                                          <span className="text-xs text-muted-foreground">Most popular • Moss removal, roof treatment & gutter cleaning included • $499+</span>
                                        </div>
                                      </FormItem>
                                    )}
                                  />
                                  <FormField
                                    control={form.control}
                                    name="services"
                                    render={({ field }) => (
                                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-brand-navy/20 p-4">
                                        <FormControl>
                                          <Checkbox
                                            checked={field.value?.includes("Gutter cleaning (includes roof blow-off)")}
                                            onCheckedChange={(checked) => {
                                              const value = "Gutter cleaning (includes roof blow-off)";
                                              return checked
                                                ? field.onChange([...field.value, value])
                                                : field.onChange(field.value?.filter((v) => v !== value));
                                            }}
                                          />
                                        </FormControl>
                                        <div className="flex flex-col space-y-1">
                                          <FormLabel className="text-sm font-semibold text-brand-navy cursor-pointer leading-none">
                                            Gutter cleaning (includes roof blow-off)
                                          </FormLabel>
                                          <span className="text-xs text-muted-foreground">Starting at $250</span>
                                        </div>
                                      </FormItem>
                                    )}
                                  />
                                  <FormField
                                    control={form.control}
                                    name="services"
                                    render={({ field }) => (
                                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-brand-navy/20 p-4">
                                        <FormControl>
                                          <Checkbox
                                            checked={field.value?.includes("Pressure washing")}
                                            onCheckedChange={(checked) => {
                                              const value = "Pressure washing";
                                              return checked
                                                ? field.onChange([...field.value, value])
                                                : field.onChange(field.value?.filter((v) => v !== value));
                                            }}
                                          />
                                        </FormControl>
                                        <div className="flex flex-col space-y-1">
                                          <FormLabel className="text-sm font-semibold text-brand-navy cursor-pointer leading-none">
                                            Pressure washing
                                          </FormLabel>
                                          <span className="text-xs text-muted-foreground">Driveways, patios, siding</span>
                                        </div>
                                      </FormItem>
                                    )}
                                  />
                                  <FormField
                                    control={form.control}
                                    name="services"
                                    render={({ field }) => (
                                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-brand-navy/20 p-4">
                                        <FormControl>
                                          <Checkbox
                                            checked={field.value?.includes("Window cleaning")}
                                            onCheckedChange={(checked) => {
                                              const value = "Window cleaning";
                                              return checked
                                                ? field.onChange([...field.value, value])
                                                : field.onChange(field.value?.filter((v) => v !== value));
                                            }}
                                          />
                                        </FormControl>
                                        <div className="flex flex-col space-y-1">
                                          <FormLabel className="text-sm font-semibold text-brand-navy cursor-pointer leading-none">
                                            Window cleaning
                                          </FormLabel>
                                          <span className="text-xs text-muted-foreground">Exterior</span>
                                        </div>
                                      </FormItem>
                                    )}
                                  />
                                  <FormField
                                    control={form.control}
                                    name="services"
                                    render={({ field }) => (
                                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-brand-navy/20 p-4">
                                        <FormControl>
                                          <Checkbox
                                            checked={field.value?.includes("Other")}
                                            onCheckedChange={(checked) => {
                                              const value = "Other";
                                              return checked
                                                ? field.onChange([...field.value, value])
                                                : field.onChange(field.value?.filter((v) => v !== value));
                                            }}
                                          />
                                        </FormControl>
                                        <FormLabel className="text-sm font-semibold text-brand-navy cursor-pointer leading-none">
                                          Other / Not sure
                                        </FormLabel>
                                      </FormItem>
                                    )}
                                  />
                                </div>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <div className="flex gap-3">
                            <Button
                              type="button"
                              variant="outline"
                              className="min-h-[56px] text-base font-semibold rounded-xl px-6"
                              onClick={() => setStep(1)}
                            >
                              ← Back
                            </Button>
                            <Button
                              type="submit"
                              variant="cta-orange"
                              className="flex-1 min-h-[56px] text-lg font-bold rounded-xl"
                              disabled={isSubmitting}
                            >
                              {isSubmitting ? "Sending..." : "Get My Free Quote →"}
                            </Button>
                          </div>

                          <p className="text-center text-muted-foreground text-xs">
                            🔒 Your info stays private — we never share or spam.
                          </p>
                          <p className="text-center text-muted-foreground text-sm">
                            Trusted by 200+ homeowners in Kenmore, Bothell & Kirkland  •  Licensed & Insured
                          </p>
                        </>
                      )}
                    </form>
                  </Form>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwoStepQuoteForm;
