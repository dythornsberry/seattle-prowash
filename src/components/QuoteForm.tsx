import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Phone, Mail, MapPin, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  phone: z.string().trim().min(1, "Phone number is required").max(20, "Phone must be less than 20 characters"),
  address: z.string().trim().min(1, "Address is required").max(300, "Address must be less than 300 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters").optional().or(z.literal("")),
  details: z.string().trim().max(1000, "Details must be less than 1000 characters").optional(),
  textUpdates: z.boolean().optional(),
  utmSource: z.string().optional(),
  utmMedium: z.string().optional(),
  pageContext: z.string().optional(),
});

const QuoteForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const EDGE_FUNCTION_NAME = "submit-quote";

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      address: "",
      email: "",
      details: "",
      textUpdates: false,
      utmSource: new URLSearchParams(window.location.search).get('utm_source') || "",
      utmMedium: new URLSearchParams(window.location.search).get('utm_medium') || "",
      pageContext: window.location.pathname,
    },
  });

  // Reliability helpers: timeout + beacon fallback
  const buildPayload = (values: z.infer<typeof formSchema>) => ({
    name: values.name,
    phone: values.phone,
    address: values.address,
    email: values.email || "",
    details: values.details || "",
    textUpdates: values.textUpdates || false,
    utmSource: values.utmSource || "",
    utmMedium: values.utmMedium || "",
    pageContext: values.pageContext || "",
    timestamp: new Date().toISOString(),
    source: "Website Quote Form",
    business_name: "Seattle ProWash",
  });

  const sendWithTimeout = async (url: string, options: RequestInit, timeoutMs = 10000) => {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeoutMs);
    try {
      return await fetch(url, { ...options, signal: controller.signal });
    } finally {
      clearTimeout(id);
    }
  };

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
    setIsSubmitting(true);
    
    try {
      await sendToWebhook(values);
      setShowConfirmation(true);
      form.reset();
      
    } catch (error) {
      console.error("Quote submit error:", error);
      toast({
        title: "Network issue",
        description: "We couldn't send your request. Please try again or call 206-752-6690.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatPhoneNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
    if (!match) return value;
    
    const [, area, prefix, line] = match;
    if (line) return `(${area}) ${prefix}-${line}`;
    if (prefix) return `(${area}) ${prefix}`;
    if (area) return `(${area}`;
    return cleaned;
  };

  return (
    <section id="contact" className="section-spacing bg-brand-gray/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 fade-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-6">
              GET YOUR FREE QUOTE TODAY!
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Most quotes are sent the same day. We respond promptly during business hours.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6 fade-up">
              <Card className="border-brand-yellow/20">
                <CardHeader>
                  <CardTitle className="text-brand-navy">Contact Information</CardTitle>
                  <CardDescription>
                    Prefer to call? We're here to help!
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-brand-yellow" />
                    <div>
                        <a href="tel:12067526690" className="font-semibold text-brand-navy hover:text-brand-yellow transition-colors">
                          206-752-6690
                        </a>
                      <p className="text-sm text-muted-foreground">Call us anytime</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-brand-yellow" />
                    <div>
                      <a href="mailto:seattleprowash@gmail.com" className="text-sm text-brand-navy hover:text-brand-yellow transition-colors">
                        seattleprowash@gmail.com
                      </a>
                      <p className="text-sm text-muted-foreground">We respond back in 1 hour</p>
                    </div>
                  </div>
                  
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-brand-yellow mt-1" />
                      <div>
                        <p className="text-sm text-brand-navy">Serving Kenmore and the greater Seattle area</p>
                        <p className="text-sm text-muted-foreground">Including Bothell, Kirkland, Shoreline, and nearby neighborhoods</p>
                      </div>
                    </div>
                </CardContent>
              </Card>

              {/* Trust Badges */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-brand-white rounded-lg shadow-sm">
                  <CheckCircle className="w-5 h-5 text-brand-yellow" />
                  <span className="text-sm font-semibold text-brand-navy">Fully Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-brand-white rounded-lg shadow-sm">
                  <CheckCircle className="w-5 h-5 text-brand-yellow" />
                  <span className="text-sm font-semibold text-brand-navy">Same-Day Estimates</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-brand-white rounded-lg shadow-sm">
                  <CheckCircle className="w-5 h-5 text-brand-yellow" />
                  <span className="text-sm font-semibold text-brand-navy">100% Satisfaction Guarantee</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-brand-white rounded-lg shadow-sm">
                  <CheckCircle className="w-5 h-5 text-brand-yellow" />
                  <span className="text-sm font-semibold text-brand-navy">12‑Month Moss‑Free Guarantee</span>
                </div>
              </div>
            </div>

            {/* Quote Form */}
            <div className="lg:col-span-2 fade-up">
              {showConfirmation ? (
                <Card className="border-brand-yellow/20 shadow-xl bg-green-50">
                  <CardContent className="pt-8 pb-8 text-center">
                    <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-brand-navy mb-2">Thanks! We'll contact you shortly.</h3>
                    <p className="text-muted-foreground mb-6">Most quotes are sent within 1 hour during business hours.</p>
                    <p className="text-lg font-semibold text-brand-navy mb-4">If urgent, tap to call:</p>
                    <Button
                      variant="cta-orange"
                      size="lg"
                      onClick={() => window.location.href = 'tel:12067526690'}
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Call (206) 752-6690
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setShowConfirmation(false)}
                      className="mt-4 block mx-auto"
                    >
                      Submit another request
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <Card className="border-brand-yellow/20 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-brand-navy">Request Your Free Quote</CardTitle>
                    <CardDescription>
                      Tell us about your project and we'll provide a detailed estimate.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="space-y-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-brand-navy font-semibold">Name *</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Your Name"
                                  className="border-brand-yellow/30 focus:border-brand-yellow"
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
                                  placeholder="(206) 555-1234"
                                  className="border-brand-yellow/30 focus:border-brand-yellow"
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
                          name="address"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-brand-navy font-semibold">Address *</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="123 Main St, Kenmore, WA 98028"
                                  className="border-brand-yellow/30 focus:border-brand-yellow"
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
                              <FormLabel className="text-brand-navy font-semibold">Email (optional)</FormLabel>
                              <FormControl>
                                <Input
                                  type="email"
                                  placeholder="your@email.com"
                                  className="border-brand-yellow/30 focus:border-brand-yellow"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="details"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-brand-navy font-semibold">Details (optional)</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Add photos link or describe your needs"
                                  rows={2}
                                  className="border-brand-yellow/30 focus:border-brand-yellow"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="textUpdates"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <input
                                  type="checkbox"
                                  checked={field.value}
                                  onChange={field.onChange}
                                  className="mt-1 h-4 w-4 rounded border-brand-yellow/30 text-brand-yellow focus:ring-brand-yellow"
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel className="text-sm font-normal text-brand-navy">
                                  Text me updates about my quote
                                </FormLabel>
                              </div>
                            </FormItem>
                          )}
                        />
                      </div>

                      <Button
                        type="submit"
                        variant="cta-orange"
                        className="w-full bg-bright-orange text-white font-bold hover:bg-bright-orange/90 btn-glow shadow-md border-0"
                        size="xl"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Get a Fast Quote"}
                      </Button>

                    {/* Trust Copy and Service Areas */}
                    <div className="space-y-4 text-center">
                      <div className="text-sm text-muted-foreground">
                        <p className="font-medium text-brand-navy">Most quotes are sent the same day. We respond promptly during business hours.</p>
                        <p className="mt-1">On-site visit available when helpful.</p>
                      </div>
                    </div>

                      <p className="text-xs text-muted-foreground text-center">
                        By submitting this form, you agree to receive communications from Seattle ProWash
                      </p>
                    </form>
                  </Form>
                </CardContent>
              </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;