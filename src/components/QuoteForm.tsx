import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const QuoteForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [webhookUrl, setWebhookUrl] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    email: "",
    details: ""
  });


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Validate required fields
      if (!formData.name || !formData.phone || !formData.address) {
        toast({
          title: "Please fill in all required fields",
          description: "Name, phone number and address are required.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      if (!webhookUrl) {
        toast({
          title: "Please configure Zapier webhook",
          description: "Zapier webhook URL is required to send leads to Jobber.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      // Send to Zapier webhook for Jobber integration
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          address: formData.address,
          details: formData.details,
          timestamp: new Date().toISOString(),
          source: "Website Quote Form",
          business_name: "Seattle ProWash"
        }),
      });

      toast({
        title: "Quote Request Sent!",
        description: "Your lead has been sent to Jobber via Zapier. We'll respond back in 1 hour.",
      });
      
      // Reset form
      setFormData({
        name: "",
        phone: "",
        address: "",
        email: "",
        details: ""
      });
      
    } catch (error) {
      console.error('Error sending to Zapier:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again or call us at 206-752-6690.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
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
              Most quotes sent same day. We reply within ~10 minutes (7am–7pm).
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
                      <p className="text-sm text-muted-foreground">Call or text anytime</p>
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
                  <span className="text-sm font-semibold text-brand-navy">12-Month Moss-Free Guarantee</span>
                </div>
              </div>
            </div>

            {/* Quote Form */}
            <div className="lg:col-span-2 fade-up">
              <Card className="border-brand-yellow/20 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-brand-navy">Request Your Free Quote</CardTitle>
                  <CardDescription>
                    Tell us about your project and we'll provide a detailed estimate.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Zapier Webhook Configuration */}
                  <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <Label htmlFor="webhook" className="text-brand-navy font-semibold">Zapier Webhook URL *</Label>
                    <Input
                      id="webhook"
                      value={webhookUrl}
                      onChange={(e) => setWebhookUrl(e.target.value)}
                      placeholder="https://hooks.zapier.com/hooks/catch/..."
                      className="mt-2 border-brand-yellow/30 focus:border-brand-yellow"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Enter your Zapier webhook URL to send leads to Jobber
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-6">
                      {/* Name - required */}
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-brand-navy font-semibold">Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          placeholder="John Smith"
                          required
                          className="border-brand-yellow/30 focus:border-brand-yellow"
                        />
                      </div>
                      
                      {/* Email - optional */}
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-brand-navy font-semibold">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          placeholder="john@example.com"
                          className="border-brand-yellow/30 focus:border-brand-yellow"
                        />
                      </div>
                      
                      {/* Mobile - required */}
                      <div className="space-y-2">
                        <Label htmlFor="mobile" className="text-brand-navy font-semibold">Mobile *</Label>
                        <Input
                          id="mobile"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          placeholder="(206) 555-0123"
                          required
                          className="border-brand-yellow/30 focus:border-brand-yellow"
                        />
                      </div>
                      
                      {/* Address - required */}
                      <div className="space-y-2">
                        <Label htmlFor="address" className="text-brand-navy font-semibold">Address *</Label>
                        <Input
                          id="address"
                          value={formData.address}
                          onChange={(e) => handleChange("address", e.target.value)}
                          placeholder="123 Main St, Kenmore, WA 98028"
                          required
                          className="border-brand-yellow/30 focus:border-brand-yellow"
                        />
                      </div>
                      
                      {/* Optional Details */}
                      <div className="space-y-2">
                        <Label htmlFor="details" className="text-brand-navy font-semibold">Details (optional)</Label>
                        <Textarea
                          id="details"
                          value={formData.details}
                          onChange={(e) => handleChange("details", e.target.value)}
                          placeholder="Add photos link or describe your needs"
                          rows={2}
                          className="border-brand-yellow/30 focus:border-brand-yellow"
                        />
                      </div>
                    </div>

                    {/* SMS Consent Checkbox */}
                    <div className="space-y-3">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input 
                          type="checkbox" 
                          defaultChecked 
                          className="mt-1 w-4 h-4 text-brand-yellow border-brand-yellow/30 rounded focus:ring-brand-yellow"
                        />
                        <span className="text-sm text-brand-navy">
                          ✅ Yes, text me my quote for the fastest response.
                        </span>
                      </label>
                      <p className="text-xs text-muted-foreground">
                        By submitting, you agree to receive SMS from Seattle ProWash. Reply STOP to opt out. Msg/data rates may apply. Consent not required for purchase.
                      </p>
                    </div>

                    <Button
                      type="submit"
                      variant="cta-orange"
                      className="w-full bg-bright-orange text-white font-bold hover:bg-bright-orange/90 btn-glow shadow-md border-0"
                      size="xl"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "GET YOUR FREE QUOTE TODAY"}
                    </Button>

                    {/* Trust Copy and Service Areas */}
                    <div className="space-y-4 text-center">
                      <div className="text-sm text-muted-foreground">
                        <p className="font-medium text-brand-navy">Most quotes sent same day. We reply within ~10 minutes (7am–7pm).</p>
                        <p className="mt-1">On-site visit available when helpful.</p>
                      </div>
                    </div>

                    <p className="text-xs text-muted-foreground text-center">
                      By submitting this form, you agree to receive communications from Seattle ProWash
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;