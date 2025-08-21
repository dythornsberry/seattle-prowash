import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, Phone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const FinalCTA = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      const data = {
        name: formData.get('name'),
        phone: formData.get('phone'),
        email: formData.get('email'),
        address: formData.get('address'),
        service: formData.get('service'),
        message: formData.get('message')
      };

      const response = await fetch('/api/send-quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: "Quote Request Sent!",
          description: "We'll get back to you within the hour with your free estimate.",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error('Failed to send quote request');
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try calling us directly at 206.752.6690",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-teal mb-4">
              Ready for a Spotless Home?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-6">
              Get your fast, free estimate today. Most quotes are handled online in under a day. In-person visits available if needed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="lg"
                className="bg-bright-orange hover:bg-bright-orange/90 text-white"
                onClick={() => window.location.href = 'tel:2067526690'}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call 206.752.6690
              </Button>
            </div>
          </div>

          <Card className="border-2 border-bright-orange/20 shadow-xl fade-up">
            <CardHeader className="bg-bright-orange/5">
              <CardTitle className="text-2xl font-bold text-dark-teal text-center">
                Get Your Free Estimate
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-dark-teal font-medium">Name *</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      required 
                      className="mt-1"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-dark-teal font-medium">Phone *</Label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      type="tel" 
                      required 
                      className="mt-1"
                      placeholder="(206) 555-0123"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email" className="text-dark-teal font-medium">Email</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      className="mt-1"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="service" className="text-dark-teal font-medium">Service Needed *</Label>
                    <Select name="service" required>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="roof-cleaning">Roof Cleaning</SelectItem>
                        <SelectItem value="gutter-cleaning">Gutter Cleaning</SelectItem>
                        <SelectItem value="house-washing">House Washing</SelectItem>
                        <SelectItem value="pressure-washing">Pressure Washing</SelectItem>
                        <SelectItem value="multiple">Multiple Services</SelectItem>
                        <SelectItem value="not-sure">Not Sure</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="address" className="text-dark-teal font-medium">Property Address *</Label>
                  <Input 
                    id="address" 
                    name="address" 
                    required 
                    className="mt-1"
                    placeholder="123 Main St, Seattle, WA 98101"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-dark-teal font-medium">Additional Details</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    className="mt-1" 
                    rows={4}
                    placeholder="Tell us about your project, any specific concerns, or when you'd like the work done..."
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-bright-orange hover:bg-bright-orange/90 text-white font-bold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Get My Free Estimate"}
                </Button>

                <div className="flex items-center justify-center gap-6 text-sm text-gray-600 mt-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-moss-green" />
                    We respond within the hour
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-moss-green" />
                    Your info is always private
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;