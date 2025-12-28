import { useState } from "react";
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
  address: z.string().trim().min(1, "Address is required").max(300),
  phone: z.string().trim().min(10, "Valid phone number is required").max(20),
  services: z.array(z.string()).min(1, "Please select at least one service"),
  company: z.string().max(0, "Invalid submission"), // honeypot
});

const TwoStepQuoteForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  // Phone formatting
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
      if (typeof (window as any).gtag !== 'undefined') {
        (window as any).gtag('event', 'quote_form_submit', {
          service_selected: values.services.join(", "),
          page_location: window.location.pathname
        });
      }

      await sendToWebhook(values);

      toast({
        title: "✓ Request received!",
        description: "We'll get back to you within 1 hour.",
      });
      
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

  const handleCallClick = () => {
    if (typeof (window as any).gtag !== 'undefined') {
      (window as any).gtag('event', 'click_to_call');
    }
  };

  return (
    <section id="contact" className="section-spacing bg-off-white/50 scroll-mt-20">{/* Added scroll-mt for anchor */}
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
              <Card className="border-2 border-brand-navy/20 shadow-xl rounded-xl">
                <CardHeader className="pb-4">
                  <CardDescription className="text-base text-muted-foreground">
                    We typically respond within 1 hour during business hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form className="space-y-6" autoComplete="on" onSubmit={form.handleSubmit(onSubmit)}>
                      {/* Honeypot field - hidden */}
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
                                placeholder="Your address"
                                className="border-brand-navy/30 focus:border-brand-orange min-h-[56px] text-lg md:text-sm md:min-h-[48px] rounded-xl"
                                autoComplete="street-address"
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
                                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-brand-navy/20 p-4">
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
                                        Roof cleaning (moss removal & treatment)
                                      </FormLabel>
                                      <span className="text-xs text-muted-foreground">Starting at $500</span>
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
                                      <span className="text-xs text-muted-foreground">Starting at $300</span>
                                    </div>
                                  </FormItem>
                                )}
                              />
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        variant="cta-orange"
                        className="w-full min-h-[56px] text-lg font-bold rounded-xl"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Get My Free Quote →"}
                      </Button>

                      <p className="text-center text-muted-foreground text-sm">
                        194+ ⭐⭐⭐⭐⭐ Reviews  •  12-Month Guarantee  •  Licensed & Insured
                      </p>
                    </form>
                  </Form>
                </CardContent>
              </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwoStepQuoteForm;
