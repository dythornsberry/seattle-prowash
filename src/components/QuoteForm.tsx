import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const QuoteForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    zipCode: "",
    service: "",
    message: ""
  });

  const services = [
    "Roof Moss Removal",
    "Gutter Cleaning", 
    "House Soft Wash",
    "Pressure Washing",
    "Complete Property Package",
    "Other (describe in message)"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Validate required fields
      if (!formData.name || !formData.phone || !formData.email || !formData.service) {
        toast({
          title: "Please fill in all required fields",
          description: "Name, phone, email, and service are required.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      // Save lead to database
      const { data, error } = await supabase
        .from('leads')
        .insert([
          {
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            zip_code: formData.zipCode,
            service: formData.service,
            message: formData.message,
          }
        ])
        .select();

      if (error) {
        console.error('Error saving lead:', error);
        toast({
          title: "Something went wrong",
          description: "Please try again or call us at 206-752-6690.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      console.log('Lead saved successfully:', data);
      
      // Send email notifications
      try {
        await supabase.functions.invoke('send-quote-notification', {
          body: {
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            zipCode: formData.zipCode,
            service: formData.service,
            message: formData.message,
          }
        });
      } catch (emailError) {
        console.error('Email notification failed:', emailError);
        // Don't fail the entire form submission if email fails
      }
      
      toast({
        title: "Quote Request Received!",
        description: "We'll respond back in 1 hour.",
      });
      
      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        zipCode: "",
        service: "",
        message: ""
      });
      
    } catch (error) {
      console.error('Unexpected error:', error);
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
    <section id="contact" className="section-spacing bg-brand-gray-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 fade-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-6">
              Get Your Free Quote
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Fill out the form below and we'll respond back in 1 hour.
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
                      <a href="tel:206-752-6690" className="font-semibold text-brand-navy hover:text-brand-yellow transition-colors">
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
                      <p className="text-sm text-brand-navy">Serving Kenmore & surrounding areas</p>
                      <p className="text-sm text-muted-foreground">10-mile radius</p>
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
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-brand-navy font-semibold">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          placeholder="John Smith"
                          required
                          className="border-brand-yellow/30 focus:border-brand-yellow"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-brand-navy font-semibold">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          placeholder="(206) 555-0123"
                          required
                          className="border-brand-yellow/30 focus:border-brand-yellow"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-brand-navy font-semibold">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        placeholder="john@example.com"
                        required
                        className="border-brand-yellow/30 focus:border-brand-yellow"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="zipCode" className="text-brand-navy font-semibold">Zip Code</Label>
                      <Input
                        id="zipCode"
                        value={formData.zipCode}
                        onChange={(e) => handleChange("zipCode", e.target.value)}
                        placeholder="98028"
                        className="border-brand-yellow/30 focus:border-brand-yellow"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-brand-navy font-semibold">Service Needed *</Label>
                      <Select value={formData.service} onValueChange={(value) => handleChange("service", value)}>
                        <SelectTrigger className="border-brand-yellow/30 focus:border-brand-yellow">
                          <SelectValue placeholder="Select a service..." />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-brand-navy font-semibold">Project Details (Optional)</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        placeholder="Tell us about your roof, gutters, or specific concerns..."
                        rows={4}
                        className="border-brand-yellow/30 focus:border-brand-yellow"
                      />
                    </div>


                    <Button
                      type="submit"
                      variant="prowash-primary"
                      size="xl"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Get My Free Quote"}
                    </Button>

                    {/* Trust Copy and Service Areas */}
                    <div className="space-y-4 text-center">
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <div className="space-y-2 text-sm">
                          <p className="text-green-800 font-semibold">✓ Quotes are free, fast, and come with zero pressure.</p>
                          <p className="text-green-700">✓ We'll never spam you or share your info.</p>
                        </div>
                      </div>
                      
                      <div className="text-sm text-muted-foreground">
                        <p className="font-medium text-brand-navy">We proudly serve Kenmore, Bothell, Kirkland, and surrounding suburbs within a 10-mile radius.</p>
                        <p className="mt-1">We respond back in 1 hour — Monday through Sunday.</p>
                      </div>
                    </div>

                    <p className="text-xs text-muted-foreground text-center">
                      By submitting this form, you agree to receive communications from Seattle ProWash.
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