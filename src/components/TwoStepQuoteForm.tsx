import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Phone, Mail, MapPin, CheckCircle, Clock, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  address: z.string().trim().min(1, "Address is required").max(300),
  phone: z.string().trim().min(10, "Valid phone number is required").max(20),
  services: z.array(z.string()).min(1, "Please select at least one service"),
  company: z.string().max(0, "Invalid submission"), // honeypot
});

const TwoStepQuoteForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const ZAPIER_WEBHOOK_URL = "https://hooks.zapier.com/hooks/catch/24075201/urxpaav/";

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
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
    address: values.address,
    phone: values.phone,
    services: values.services.join(", "),
    timestamp: new Date().toISOString(),
    source: "Website Quote Form",
    business_name: "Seattle ProWash",
  });

  const sendToWebhook = async (values: z.infer<typeof formSchema>) => {
    const payload = buildPayload(values);

    const response = await fetch(ZAPIER_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "no-cors",
      body: JSON.stringify(payload),
    });

    // no-cors mode doesn't give us access to response status, so we assume success
    return response;
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

  // Time-sensitive offer - expires in 7 days
  const offerExpiry = new Date();
  offerExpiry.setDate(offerExpiry.getDate() + 7);
  const offerExpiryStr = offerExpiry.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

  return (
    <section id="contact" className="section-spacing bg-off-white/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Urgency Banner */}
          <div className="mb-8 text-center fade-up">
            <div className="inline-block bg-brand-orange/10 border-2 border-brand-orange rounded-xl px-6 py-3 animate-pulse">
              <p className="text-brand-navy font-bold flex items-center justify-center gap-2">
                <Clock className="w-5 h-5" />
                Book before {offerExpiryStr} and lock in this year's rates
              </p>
            </div>
          </div>

          <div className="text-center mb-12 fade-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-4 font-heading">
              Get Your Free Quote Today
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Most quotes sent same day • No obligation • Free consultation
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info & Trust Badges */}
            <div className="lg:col-span-1 space-y-6 fade-up">
              <Card className="border-2 border-brand-navy/20 shadow-lg rounded-xl">
                <CardHeader>
                  <CardTitle className="text-brand-navy font-heading">Quick Contact</CardTitle>
                  <CardDescription>
                    Prefer to call? We're here to help!
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-brand-orange" />
                    <div>
                      <a 
                        href="tel:12067526690" 
                        className="font-semibold text-brand-navy hover:text-brand-orange transition-colors"
                        onClick={handleCallClick}
                      >
                        206-752-6690
                      </a>
                      <p className="text-sm text-muted-foreground">Call or text anytime</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-brand-orange" />
                    <div>
                      <a href="mailto:seattleprowash@gmail.com" className="text-sm text-brand-navy hover:text-brand-orange transition-colors break-all">
                        seattleprowash@gmail.com
                      </a>
                      <p className="text-sm text-muted-foreground">1-hour response time</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-brand-orange mt-1" />
                    <div>
                      <p className="text-sm text-brand-navy">Kenmore & Greater Seattle</p>
                      <p className="text-sm text-muted-foreground">Bothell, Kirkland, Shoreline</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Trust Badges with Icons */}
                <div className="space-y-3">
                <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-brand-navy/10">
                  <Shield className="w-5 h-5 text-brand-orange flex-shrink-0" />
                  <span className="text-sm font-semibold text-brand-navy">Licensed & Insured in Washington</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-brand-navy/10">
                  <CheckCircle className="w-5 h-5 text-brand-orange flex-shrink-0" />
                  <span className="text-sm font-semibold text-brand-navy">100% Satisfaction Guarantee</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-brand-navy/10">
                  <CheckCircle className="w-5 h-5 text-brand-orange flex-shrink-0" />
                  <span className="text-sm font-semibold text-brand-navy">Serving Greater Seattle Metro</span>
                </div>
              </div>
            </div>

            {/* Quote Form */}
            <div className="lg:col-span-2 fade-up">
              <Card className="border-2 border-brand-navy/20 shadow-xl rounded-xl">
                <CardHeader>
                  <CardTitle className="text-brand-navy font-heading text-2xl">
                    Request Your Free Quote
                  </CardTitle>
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
                                        checked={field.value?.includes("Roof Cleaning & Moss Removal")}
                                        onCheckedChange={(checked) => {
                                          const value = "Roof Cleaning & Moss Removal";
                                          return checked
                                            ? field.onChange([...field.value, value])
                                            : field.onChange(field.value?.filter((v) => v !== value));
                                        }}
                                      />
                                    </FormControl>
                                    <FormLabel className="text-sm font-semibold text-brand-navy cursor-pointer leading-none">
                                      Roof Cleaning & Moss Removal
                                    </FormLabel>
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
                                        checked={field.value?.includes("Gutter Cleaning + Roof Blow-Off")}
                                        onCheckedChange={(checked) => {
                                          const value = "Gutter Cleaning + Roof Blow-Off";
                                          return checked
                                            ? field.onChange([...field.value, value])
                                            : field.onChange(field.value?.filter((v) => v !== value));
                                        }}
                                      />
                                    </FormControl>
                                    <FormLabel className="text-sm font-semibold text-brand-navy cursor-pointer leading-none">
                                      Gutter Cleaning + Roof Blow-Off
                                    </FormLabel>
                                  </FormItem>
                                )}
                              />
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Trust Badges Above Submit */}
                      <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 py-3 px-3 bg-muted/30 rounded-lg">
                        <div className="flex items-center gap-1.5">
                          <CheckCircle className="w-4 h-4 text-brand-orange" />
                          <span className="text-xs md:text-sm font-medium text-foreground">180+ ⭐⭐⭐⭐⭐ Reviews</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Shield className="w-4 h-4 text-brand-orange" />
                          <span className="text-xs md:text-sm font-medium text-foreground">12-Month Guarantee</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <CheckCircle className="w-4 h-4 text-brand-orange" />
                          <span className="text-xs md:text-sm font-medium text-foreground">Licensed & Insured</span>
                        </div>
                      </div>

                      <Button
                        type="submit"
                        variant="cta-orange"
                        className="w-full min-h-[56px] text-lg font-bold rounded-xl"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Get My Free Quote →"}
                      </Button>

                      <p className="text-center text-muted-foreground text-xs">
                        180+ ⭐⭐⭐⭐⭐ Reviews  •  12-Month Guarantee  •  Licensed & Insured
                      </p>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwoStepQuoteForm;
