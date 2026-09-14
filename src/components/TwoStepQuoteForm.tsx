import { useState, useRef, useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const serviceOptions = [
  { value: "Roof cleaning (moss removal & treatment)", label: "Roof & Gutter Cleaning Combo", detail: "Moss removal & treatment, gutters, downspouts & cleanup. From $850.", primary: true },
  { value: "Gutter cleaning (includes roof blow-off)", label: "Complete Gutter Cleaning", detail: "Roof blow-off, gutters, downspouts & cleanup. From $350.", primary: true },
  { value: "House washing (soft wash)", label: "House Soft Washing", detail: "Siding, trim & soffits.", primary: false },
  { value: "Pressure washing", label: "Pressure Washing", detail: "Concrete driveways, patios & walkways.", primary: false },
  { value: "Deck cleaning", label: "Deck Cleaning", detail: "Wood & composite decks.", primary: false },
  { value: "Window cleaning", label: "Exterior Window Cleaning", detail: "Outside glass, frames & sills.", primary: false },
];

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
  services: z.array(z.string()).min(1, "Please select at least one service")
    .refine((values) => values.every((value) => serviceOptions.some((service) => service.value === value)), "Please select an available service"),
  timeline: z.string().min(1, "Please pick a timeframe"),
  company: z.string().max(0, "Invalid submission"), // honeypot
});

const TwoStepQuoteForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  // Preserve contact details from older quick-form entry points.
  useEffect(() => {
    const tryPrefill = () => {
      try {
        const raw = sessionStorage.getItem("prowash_lead_step1");
        if (!raw) return;
        const data = JSON.parse(raw) as { name?: string; phone?: string };
        if (data?.name) form.setValue("name", data.name, { shouldValidate: true });
        if (data?.phone) form.setValue("phone", data.phone, { shouldValidate: true });
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

  return (
    <section id="contact" className="quote-shell section-spacing scroll-mt-24 border-y bg-muted/60">
      <div className="quote-layout mx-auto grid max-w-6xl gap-8 px-5">
        <div>
          <h2 className="text-3xl text-foreground md:text-4xl">Get a Quote</h2>
          <p className="mt-4 max-w-sm text-muted-foreground">Tell us what needs cleaning. Dylan will call or text about your quote.</p>
          <a href="tel:12067526690" className="mt-5 inline-flex min-h-11 items-center gap-2 font-semibold text-brand-navy"><Phone className="h-4 w-4" aria-hidden="true" />206-752-6690</a>
          <figure className="quote-review mt-7 hidden max-w-sm border-t pt-6">
            <blockquote className="text-sm text-muted-foreground">&ldquo;My experience with them was smooth from booking to appointment. Dylan's team kept me updated throughout the process with before and after photos.&rdquo;</blockquote>
            <figcaption className="mt-3 text-sm font-semibold">Kimani G., roof &amp; gutter cleaning</figcaption>
          </figure>
        </div>
        {isSubmitted ? (
          <div role="status" className="rounded-lg border bg-white p-7 sm:p-10">
            <CheckCircle2 className="mb-4 h-10 w-10 text-brand-navy" aria-hidden="true" />
            <h3 className="text-2xl text-foreground">Got it! We're on it.</h3>
            <p className="mt-3 text-muted-foreground">Dylan will call or text to confirm details and help you get a quote.</p>
          </div>
        ) : (
          <Form {...form}>
            <form data-testid="quote-form" className="space-y-5 rounded-lg border bg-white p-5 sm:p-7" autoComplete="on" noValidate onSubmit={form.handleSubmit(onSubmit)}>
              <FormField control={form.control} name="company" render={({ field }) => (
                <FormItem className="hidden"><FormControl><Input tabIndex={-1} autoComplete="off" {...field} /></FormControl></FormItem>
              )} />
              <div className="grid gap-4 sm:grid-cols-2">
                <FormField control={form.control} name="name" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name *</FormLabel>
                    <FormControl><Input className="h-12 text-base" placeholder="Your name" autoComplete="name" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="phone" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone *</FormLabel>
                    <FormControl><Input type="tel" className="h-12 text-base" placeholder="(206) 000-0000" autoComplete="tel" {...field} onChange={(e) => field.onChange(formatPhoneNumber(e.target.value))} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>
              <FormField control={form.control} name="email" render={({ field }) => (
                <FormItem>
                  <FormLabel>Email *</FormLabel>
                  <FormControl><Input type="email" className="h-12 text-base" placeholder="you@example.com" autoComplete="email" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="address" render={({ field }) => (
                <FormItem>
                  <FormLabel>Address *</FormLabel>
                  <FormControl>
                    <Input className="h-12 text-base" placeholder="Street address, city, ZIP" autoComplete="street-address" disabled={false}
                      name={field.name} value={addressValue} onBlur={field.onBlur}
                      onFocus={() => { void ensureGooglePlacesLoaded(); }}
                      ref={(el) => { field.ref(el); addressInputRef.current = el; }}
                      onKeyDown={(event) => {
                        // Let Places accept a highlighted suggestion without submitting.
                        if (event.key === "Enter" && document.querySelector(".pac-item-selected")) event.preventDefault();
                      }}
                      onChange={(e) => {
                        const value = e.currentTarget.value;
                        setAddressValue(value);
                        form.setValue("address", value, { shouldDirty: true, shouldTouch: true, shouldValidate: true });
                        addressFromPlacesRef.current = false;
                        selectedPlacesAddressRef.current = "";
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="services" render={({ field }) => (
                <FormItem>
                  <fieldset>
                    <legend className="mb-2 text-sm font-medium">What needs cleaning? *</legend>
                    <div className="grid gap-x-5 min-[360px]:grid-cols-2">
                      {serviceOptions.map((service) => (
                        <FormItem key={service.value} className="flex min-h-12 flex-row items-center gap-3 space-y-0">
                          <FormControl>
                            <Checkbox aria-label={service.label} checked={field.value.includes(service.value)}
                              onCheckedChange={(checked) => field.onChange(checked ? [...field.value, service.value] : field.value.filter((value) => value !== service.value))} />
                          </FormControl>
                          <FormLabel className="flex-1 cursor-pointer py-2 text-sm leading-snug">{service.label}</FormLabel>
                        </FormItem>
                      ))}
                    </div>
                  </fieldset>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="timeline" render={({ field }) => (
                <FormItem>
                  <FormLabel>Preferred timing *</FormLabel>
                  <FormControl>
                    <RadioGroup value={field.value} onValueChange={field.onChange} className="grid grid-cols-2 gap-2">
                      {["ASAP", "Within 1 week", "Within 2 weeks", "Flexible"].map((option) => (
                        <FormItem key={option} className="flex min-h-11 items-center gap-2 space-y-0">
                          <FormControl><RadioGroupItem value={option} /></FormControl>
                          <FormLabel className="cursor-pointer py-2 text-sm font-normal">{option}</FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <Button type="submit" variant="cta-orange" className="h-12 w-full text-base" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : <>Get a Quote <ArrowRight aria-hidden="true" /></>}
              </Button>
              <p className="text-center text-xs text-muted-foreground">Your info stays private. We never share or spam.</p>
            </form>
          </Form>
        )}
      </div>
    </section>
  );
};

export default TwoStepQuoteForm;
