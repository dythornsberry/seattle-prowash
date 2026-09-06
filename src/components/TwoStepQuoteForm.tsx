import { useState, useRef, useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
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
    // Reject 555 exchange (classic Hollywood fake numbers like 555-0100)
    if (digits.slice(3, 6) === '555') return false;
    // Reject 555 area code (reserved, not a real US area code)
    if (digits.slice(0, 3) === '555') return false;
    // Reject area codes starting with 0 or 1 (invalid US area codes)
    if (digits[0] === '0' || digits[0] === '1') return false;
    return true;
  }, { message: "Please enter a valid 10-digit phone number" }),
  services: z.array(z.string()).min(1, "Please select at least one service"),
  timeline: z.string().min(1, "Please pick a timeframe"),
  company: z.string().max(0, "Invalid submission"), // honeypot
});

const TwoStepQuoteForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [step, setStep] = useState(1);
  const [addressValue, setAddressValue] = useState("");
  const EDGE_FUNCTION_NAME = "submit-quote";

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      address: "",
      phone: "",
      services: [],
      timeline: "",
      company: "",
    },
  });

  // Google Places Autocomplete
  const addressInputRef = useRef<HTMLInputElement | null>(null);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const addressFromPlacesRef = useRef(false); // Track if address was selected from autocomplete
  const selectedPlacesAddressRef = useRef("");
  const placesUnavailableRef = useRef(false);
  const mapsScriptPromiseRef = useRef<Promise<void> | null>(null);
  const submittingRef = useRef(false);

  const restoreManualAddressInput = useCallback(() => {
    placesUnavailableRef.current = true;
    autocompleteRef.current = null;

    const input = addressInputRef.current;
    if (!input) return;

    input.disabled = false;
    input.readOnly = false;
    input.placeholder = "Start typing your address...";
    input.value = form.getValues("address") || addressValue;
  }, [addressValue, form]);

  const initAutocomplete = useCallback(() => {
    if (placesUnavailableRef.current) return;
    if (!addressInputRef.current || autocompleteRef.current) return;
    if (typeof google === 'undefined' || !google?.maps?.places) return;

    const autocomplete = new google.maps.places.Autocomplete(addressInputRef.current, {
      types: ['address'],
      componentRestrictions: { country: 'us' },
      fields: ['formatted_address'],
    });

    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      const selectedAddress = place?.formatted_address || addressInputRef.current?.value || "";

      if (selectedAddress) {
        setAddressValue(selectedAddress);
        form.setValue('address', selectedAddress, {
          shouldDirty: true,
          shouldTouch: true,
          shouldValidate: true,
        });
        addressFromPlacesRef.current = Boolean(place?.formatted_address);
        selectedPlacesAddressRef.current = place?.formatted_address || "";
      }
    });

    autocompleteRef.current = autocomplete;

    window.setTimeout(() => {
      const input = addressInputRef.current;
      if (input?.disabled || input?.placeholder === "Oops! Something went wrong.") {
        restoreManualAddressInput();
      }
    }, 500);
  }, [form, restoreManualAddressInput]);

  const ensureGooglePlacesLoaded = useCallback(async () => {
    if (placesUnavailableRef.current) return;

    const MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
    if (!MAPS_API_KEY) return;

    if (typeof google !== 'undefined' && google?.maps?.places) {
      initAutocomplete();
      return;
    }

    if (!mapsScriptPromiseRef.current) {
      mapsScriptPromiseRef.current = new Promise((resolve, reject) => {
        const mapsWindow = window as typeof window & { gm_authFailure?: () => void };
        const previousAuthFailure = mapsWindow.gm_authFailure;
        mapsWindow.gm_authFailure = () => {
          previousAuthFailure?.();
          restoreManualAddressInput();
        };

        const existingScript = document.querySelector<HTMLScriptElement>(
          'script[data-google-places="true"]'
        );

        if (existingScript) {
          if (existingScript.dataset.loaded === "true") {
            resolve();
            return;
          }

          existingScript.addEventListener("load", () => resolve(), { once: true });
          existingScript.addEventListener("error", () => reject(new Error("Failed to load Google Places")), { once: true });
          return;
        }

        const script = document.createElement("script");
        script.dataset.googlePlaces = "true";
        script.src = `https://maps.googleapis.com/maps/api/js?key=${MAPS_API_KEY}&libraries=places&loading=async`;
        script.async = true;
        script.defer = true;
        script.onload = () => {
          script.dataset.loaded = "true";
          resolve();
        };
        script.onerror = () => {
          restoreManualAddressInput();
          reject(new Error("Failed to load Google Places"));
        };
        document.head.appendChild(script);
      });
    }

    try {
      await mapsScriptPromiseRef.current;
      initAutocomplete();
    } catch (error) {
      console.error("Google Places failed to load:", error);
      restoreManualAddressInput();
    }
  }, [initAutocomplete, restoreManualAddressInput]);

  useEffect(() => {
    if (step === 2 && !autocompleteRef.current) {
      void ensureGooglePlacesLoaded();
    }
  }, [ensureGooglePlacesLoaded, step]);

  // Pre-fill name + phone from the hero quick form, then jump to step 2.
  useEffect(() => {
    const tryPrefill = () => {
      try {
        const raw = sessionStorage.getItem("prowash_lead_step1");
        if (!raw) return;
        const data = JSON.parse(raw) as { name?: string; phone?: string };
        if (data?.name) form.setValue("name", data.name, { shouldValidate: true });
        if (data?.phone) form.setValue("phone", data.phone, { shouldValidate: true });
        if (data?.name && data?.phone) {
          setStep(2);
        }
      } catch {
        // ignore malformed sessionStorage
      }
    };

    tryPrefill();
    window.addEventListener("prowash:prefill-step1", tryPrefill);
    return () => window.removeEventListener("prowash:prefill-step1", tryPrefill);
  }, [form]);

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
    services: `${values.services.join(", ")} | Timeline: ${values.timeline}`,
    timeline: values.timeline,
    address_verified: addressFromPlacesRef.current && values.address === selectedPlacesAddressRef.current,
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

    if (submittingRef.current) return;
    submittingRef.current = true;
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
      setAddressValue("");
      addressFromPlacesRef.current = false;
      selectedPlacesAddressRef.current = "";
      sessionStorage.removeItem("prowash_lead_step1");

    } catch (error) {
      console.error("Quote submit error:", error);
      toast({
        title: "Network issue",
        description: "Please try again or call 206-752-6690.",
        variant: "destructive",
      });
    } finally {
      submittingRef.current = false;
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

  const handleFormKeyDown = (event: React.KeyboardEvent<HTMLFormElement>) => {
    if (event.key !== "Enter" || event.shiftKey || event.nativeEvent.isComposing) {
      return;
    }

    const target = event.target as HTMLElement;
    const isTextarea = target.tagName === "TEXTAREA";
    const inputType = target instanceof HTMLInputElement ? target.type : "";
    const isNonTextControl = ["checkbox", "radio", "button", "submit"].includes(inputType);

    if (isTextarea || isNonTextControl) {
      return;
    }

    event.preventDefault();

    if (step === 1) {
      void handleNextStep();
      return;
    }

    void form.handleSubmit(onSubmit)();
  };

  return (
    <section id="contact" className="section-spacing bg-off-white/50 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8 fade-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-4 font-heading">
              Get a Fast Quote
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto mb-3">
              Tell us what needs cleaning. Dylan will call or text about your quote.
            </p>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              Roof cleaning from $499. Gutter cleaning from $250.
            </p>
          </div>

          <div className="fade-up">
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
                    Dylan will call or text to confirm details and help you get a quote.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Questions? Call or text <a href="tel:12067526690" className="text-brand-orange font-semibold hover:underline">206-752-6690</a> anytime.
                  </p>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-2 border-brand-navy/20 shadow-xl rounded-xl">
                <CardHeader className="pb-4">
                  <CardDescription className="text-base text-muted-foreground">
                    {step === 1
                      ? "Step 1 of 2: Your info"
                      : "Step 2 of 2: Project details"}
                  </CardDescription>
                  {/* Progress bar */}
                  <div className="flex gap-2 mt-3">
                    <div className="h-1.5 flex-1 rounded-full bg-brand-orange" />
                    <div className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${step === 2 ? 'bg-brand-orange' : 'bg-brand-navy/15'}`} />
                  </div>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form
                      className="space-y-6"
                      autoComplete="on"
                      onSubmit={form.handleSubmit(onSubmit)}
                      onKeyDown={handleFormKeyDown}
                    >
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
                            Next: Project Details →
                          </Button>

                          <p className="text-center text-muted-foreground text-xs">
                            Your info stays private. We never share or spam.
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
                                    disabled={false}
                                    name={field.name}
                                    value={addressValue}
                                    onBlur={field.onBlur}
                                    onFocus={() => {
                                      void ensureGooglePlacesLoaded();
                                    }}
                                    ref={(el) => {
                                      field.ref(el);
                                      addressInputRef.current = el;
                                    }}
                                    onChange={(e) => {
                                      const value = e.currentTarget.value;
                                      setAddressValue(value);
                                      form.setValue("address", value, {
                                        shouldDirty: true,
                                        shouldTouch: true,
                                        shouldValidate: true,
                                      });
                                      addressFromPlacesRef.current = false;
                                      selectedPlacesAddressRef.current = "";
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
                            render={({ field }) => (
                              <FormItem>
                                <fieldset>
                                  <legend className="text-sm text-brand-navy font-semibold mb-3">What do you need help with? *</legend>
                                  <div className="grid grid-cols-2 gap-2">
                                    {[
                                      { value: "Roof cleaning (moss removal & treatment)", label: "Roof Cleaning", detail: "Moss removal, treatment & gutter cleaning. From $499.", primary: true },
                                      { value: "Gutter cleaning (includes roof blow-off)", label: "Gutter Cleaning", detail: "Includes roof blow-off. From $250.", primary: true },
                                      { value: "Gutter brightening (exterior)", label: "Gutter brightening", detail: "", primary: false },
                                      { value: "Pressure washing", label: "Pressure washing", detail: "", primary: false },
                                      { value: "House washing (soft wash)", label: "House washing", detail: "", primary: false },
                                      { value: "Window cleaning", label: "Window cleaning", detail: "", primary: false },
                                      { value: "Solar panel cleaning", label: "Solar panels", detail: "", primary: false },
                                      { value: "Other", label: "Other / Not sure", detail: "", primary: false },
                                    ].map((service) => (
                                      <FormItem
                                        key={service.value}
                                        className={`flex flex-row items-start gap-2.5 space-y-0 rounded-md border px-3 py-3 has-[button[data-state=checked]]:border-brand-orange has-[button[data-state=checked]]:bg-brand-orange/5 ${service.primary ? "col-span-2 sm:col-span-1 border-brand-navy/40 bg-brand-navy/5" : "border-brand-navy/20"}`}
                                      >
                                        <FormControl>
                                          <Checkbox
                                            className="mt-0.5 shrink-0"
                                            aria-label={service.label}
                                            checked={field.value?.includes(service.value)}
                                            onCheckedChange={(checked) => {
                                              return checked
                                                ? field.onChange([...field.value, service.value])
                                                : field.onChange(field.value?.filter((value) => value !== service.value));
                                            }}
                                          />
                                        </FormControl>
                                        <FormLabel className="flex flex-1 flex-col gap-1 text-sm font-medium text-brand-navy cursor-pointer leading-snug">
                                          <span className={service.primary ? "font-bold" : ""}>{service.label}</span>
                                          {service.detail && <span className="text-xs font-normal text-muted-foreground">{service.detail}</span>}
                                        </FormLabel>
                                      </FormItem>
                                    ))}
                                  </div>
                                </fieldset>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="timeline"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-brand-navy font-semibold">Preferred timing *</FormLabel>
                                <FormControl>
                                  <RadioGroup
                                    value={field.value}
                                    onValueChange={field.onChange}
                                    className="space-y-2"
                                  >
                                    {["ASAP", "Within 1 week", "Within 2 weeks", "Flexible"].map((option) => (
                                      <FormItem
                                        key={option}
                                        className="flex flex-row items-center space-x-3 space-y-0 rounded-md border border-brand-navy/20 p-4 has-[button[data-state=checked]]:border-brand-orange has-[button[data-state=checked]]:bg-brand-orange/5"
                                      >
                                        <FormControl>
                                          <RadioGroupItem value={option} />
                                        </FormControl>
                                        <FormLabel className="text-sm font-semibold text-brand-navy cursor-pointer leading-none">
                                          {option}
                                        </FormLabel>
                                      </FormItem>
                                    ))}
                                  </RadioGroup>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <div className="flex gap-3">
                            <Button
                              type="button"
                              variant="outline"
                              className="h-14 w-12 shrink-0 rounded-lg px-0"
                              aria-label="Back to your info"
                              title="Back to your info"
                              onClick={() => setStep(1)}
                            >
                              <ArrowLeft aria-hidden="true" />
                            </Button>
                            <Button
                              type="submit"
                              variant="cta-orange"
                              className="flex-1 min-w-0 min-h-[56px] px-3 text-base font-bold rounded-lg"
                              disabled={isSubmitting}
                            >
                              {isSubmitting ? "Sending..." : <>Get Fast Quote <ArrowRight aria-hidden="true" /></>}
                            </Button>
                          </div>

                          <p className="text-center text-muted-foreground text-xs">
                            Your info stays private. We never share or spam.
                          </p>
                          <p className="text-center text-muted-foreground text-sm">
                            Trusted by 233 homeowners in Kenmore, Bothell & Kirkland  •  Licensed & Insured
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
