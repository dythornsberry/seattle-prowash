import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Upload, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const QuoteForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
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
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Quote Request Received!",
      description: "We'll reply within 1 business hour with your personalized estimate.",
    });
    
    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      address: "",
      service: "",
      message: ""
    });
    
    setIsSubmitting(false);
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
              Fill out the form below and we'll reply within 1 business hour with your personalized estimate.
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
                      <p className="text-sm text-muted-foreground">We reply within 1 hour</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-brand-yellow mt-1" />
                    <div>
                      <p className="text-sm text-brand-navy">Serving Kenmore & surrounding areas</p>
                      <p className="text-sm text-muted-foreground">25-mile radius</p>
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
                      <Label htmlFor="address" className="text-brand-navy font-semibold">Property Address *</Label>
                      <Input
                        id="address"
                        value={formData.address}
                        onChange={(e) => handleChange("address", e.target.value)}
                        placeholder="123 Main St, Kenmore, WA 98028"
                        required
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
                      <Label htmlFor="message" className="text-brand-navy font-semibold">Project Details</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        placeholder="Tell us about your roof, gutters, or specific concerns..."
                        rows={4}
                        className="border-brand-yellow/30 focus:border-brand-yellow"
                      />
                    </div>

                    {/* Optional Photo Upload */}
                    <div className="space-y-2">
                      <Label className="text-brand-navy font-semibold">Photos (Optional)</Label>
                      <div className="border-2 border-dashed border-brand-yellow/30 rounded-lg p-6 text-center hover:border-brand-yellow/60 transition-colors">
                        <Upload className="w-8 h-8 text-brand-yellow mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground">
                          Upload photos of your roof or gutters for a more accurate estimate
                        </p>
                        <Button variant="outline" size="sm" className="mt-2">
                          Choose Files
                        </Button>
                      </div>
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

                    <p className="text-xs text-muted-foreground text-center">
                      By submitting this form, you agree to receive communications from Seattle ProWash. 
                      We never share your information and reply within 1 business hour.
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