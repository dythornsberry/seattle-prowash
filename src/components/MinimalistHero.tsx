import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Star, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const MinimalistHero = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [webhookUrl, setWebhookUrl] = useState("");
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    address: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!webhookUrl) {
      toast({
        title: "Webhook URL Required",
        description: "Please set your Zapier webhook URL in the dev console.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      if (!formData.name || !formData.mobile || !formData.address) {
        toast({
          title: "Please fill in all required fields",
          description: "Name, mobile number and address are required.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'no-cors',
        body: JSON.stringify({
          name: formData.name,
          mobile: formData.mobile,
          address: formData.address,
          timestamp: new Date().toISOString(),
          source: 'Seattle ProWash Hero Form'
        }),
      });

      toast({
        title: "Quote Request Sent!",
        description: "We'll text you back within ~10 minutes.",
      });
      
      setFormData({
        name: "",
        mobile: "",
        address: ""
      });
      
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try calling us directly at 206-752-6690.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-background py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headlines */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-brand-blue mb-4">
            Roof & Gutter Cleaning in Kenmore, Bothell & Kirkland
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/80 mb-6">
            Fast quotes, safe results, 12-month moss-free guarantee.
          </p>

          {/* Trust Bar */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8 text-sm md:text-base">
            <div className="flex items-center gap-1 text-amber-500">
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <span className="text-foreground ml-1">180+ Google reviews</span>
            </div>
            <span className="text-foreground/60">•</span>
            <span className="text-foreground">Licensed & Insured</span>
            <span className="text-foreground/60">•</span>
            <span className="text-foreground">Since 2022</span>
          </div>

          {/* Primary CTA */}
          <div className="mb-8">
            <Button 
              size="lg"
              className="bg-cta-orange hover:bg-cta-orange-dark text-white font-bold text-lg px-8 py-4 mb-4"
              onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              GET YOUR FREE QUOTE TODAY
            </Button>
            
            <div className="flex items-center justify-center gap-2 text-brand-blue">
              <Phone className="w-4 h-4" />
              <a 
                href="tel:2067526690" 
                className="text-lg font-medium hover:underline"
              >
                Call or Text 206-752-6690
              </a>
            </div>
          </div>

          {/* Inline Lead Form */}
          <div id="quote-form" className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg border border-border">
            <h3 className="text-xl font-bold text-brand-blue mb-4">Get Your Free Quote</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-brand-blue font-medium">Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Your full name"
                  required
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="mobile" className="text-brand-blue font-medium">Mobile *</Label>
                <Input
                  id="mobile"
                  type="tel"
                  value={formData.mobile}
                  onChange={(e) => setFormData(prev => ({ ...prev, mobile: e.target.value }))}
                  placeholder="(206) 555-0123"
                  required
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="address" className="text-brand-blue font-medium">Address *</Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                  placeholder="123 Main St, Kenmore, WA"
                  required
                  className="mt-1"
                />
              </div>

              {/* SMS Consent */}
              <p className="text-xs text-muted-foreground">
                Yes, text me my quote for the fastest response. By submitting, you agree to receive SMS from Seattle ProWash. Reply STOP to opt out. Msg/data rates may apply. Consent not required for purchase.
              </p>

              <Button
                type="submit"
                className="w-full bg-cta-orange hover:bg-cta-orange-dark text-white font-bold"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "GET MY FREE QUOTE"}
              </Button>

              {/* Reassurance */}
              <p className="text-sm text-muted-foreground text-center">
                Most quotes sent same day. We reply within ~10 minutes (7am–7pm).
              </p>
            </form>

            {/* Dev Settings */}
            <details className="mt-4 p-2 bg-gray-50 rounded text-xs">
              <summary className="cursor-pointer text-gray-600">Dev: Set Webhook URL</summary>
              <input
                type="url"
                placeholder="https://hooks.zapier.com/hooks/catch/..."
                value={webhookUrl}
                onChange={(e) => setWebhookUrl(e.target.value)}
                className="w-full mt-2 p-1 border rounded text-xs"
              />
            </details>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalistHero;