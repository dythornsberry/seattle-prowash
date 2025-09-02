import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

const UltraSimpleHero = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    address: "",
    smsConsent: false,
    webhookUrl: "",
    source_url: typeof window !== 'undefined' ? window.location.href : '',
    utm_source: typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('utm_source') || '' : '',
    utm_medium: typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('utm_medium') || '' : '',
    utm_campaign: typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('utm_campaign') || '' : '',
    utm_term: typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('utm_term') || '' : '',
    utm_content: typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('utm_content') || '' : '',
    gclid: typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('gclid') || '' : ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.mobile.trim() || !formData.address.trim()) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (!formData.webhookUrl.trim()) {
      toast.error("Please enter your Zapier webhook URL");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(formData.webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify({
          name: formData.name,
          mobile: formData.mobile,
          address: formData.address,
          sms_consent: formData.smsConsent,
          source_url: formData.source_url,
          utm_source: formData.utm_source,
          utm_medium: formData.utm_medium,
          utm_campaign: formData.utm_campaign,
          utm_term: formData.utm_term,
          utm_content: formData.utm_content,
          gclid: formData.gclid,
          timestamp: new Date().toISOString(),
          service_requested: "Roof & Gutter Cleaning Quote",
          form_location: "Hero Section"
        }),
      });

      toast.success("Quote request submitted! We'll text you within 10 minutes.");
      setFormData({
        name: "",
        mobile: "",
        address: "",
        smsConsent: false,
        webhookUrl: formData.webhookUrl, // Keep webhook URL
        source_url: formData.source_url,
        utm_source: formData.utm_source,
        utm_medium: formData.utm_medium,
        utm_campaign: formData.utm_campaign,
        utm_term: formData.utm_term,
        utm_content: formData.utm_content,
        gclid: formData.gclid
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit quote request. Please try calling us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleQuoteClick = () => {
    // Track CTA click
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'CTA',
        event_label: 'GET YOUR FREE QUOTE TODAY - Hero'
      });
    }
    document.getElementById('hero-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCallClick = () => {
    // Track call click
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'Phone',
        event_label: 'Call - Hero'
      });
    }
    window.location.href = 'tel:206-752-6690';
  };

  const handleTextClick = () => {
    // Track text click
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'SMS',
        event_label: 'Text - Hero'
      });
    }
    window.location.href = 'sms:206-752-6690';
  };

  return (
    <section className="relative min-h-screen bg-white flex items-center">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-seattle-blue leading-tight">
              Roof & Gutter Cleaning in Kenmore, Bothell & Kirkland
            </h1>
            
            <p className="text-xl md:text-2xl text-text-charcoal font-medium">
              Fast quotes, safe results, 12-month moss-free guarantee.
            </p>
            
            {/* Trust Bar */}
            <div className="text-lg text-text-charcoal">
              <span className="text-yellow-500">★★★★★</span> 180+ Google reviews • Licensed & Insured • Since 2022
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-4">
            <Button 
              variant="cta-orange" 
              size="xl"
              onClick={handleQuoteClick}
              className="text-lg px-12 py-4"
            >
              GET YOUR FREE QUOTE TODAY
            </Button>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={handleCallClick}
                className="text-seattle-blue hover:text-seattle-blue/80 font-medium text-lg transition-colors"
              >
                Call or Text 206-752-6690
              </button>
            </div>
          </div>

          {/* Inline Form */}
          <div id="hero-form" className="bg-gray-50 rounded-lg p-6 max-w-md mx-auto">
            <h3 className="text-xl font-bold text-seattle-blue mb-4">GET YOUR FREE QUOTE TODAY!</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Zapier Webhook URL Input */}
              <div>
                <Label htmlFor="webhookUrl" className="text-sm text-text-charcoal">
                  Zapier Webhook URL (for lead capture)
                </Label>
                <Input
                  id="webhookUrl"
                  name="webhookUrl"
                  type="url"
                  value={formData.webhookUrl}
                  onChange={handleInputChange}
                  placeholder="https://hooks.zapier.com/hooks/catch/..."
                  className="mt-1"
                  required
                />
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div>
                  <Label htmlFor="name" className="text-sm text-text-charcoal">Name*</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="mobile" className="text-sm text-text-charcoal">Mobile*</Label>
                  <Input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="address" className="text-sm text-text-charcoal">Address*</Label>
                  <Input
                    id="address"
                    name="address"
                    type="text"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                  />
                </div>
              </div>

              {/* SMS Consent */}
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="smsConsent"
                  checked={formData.smsConsent}
                  onCheckedChange={(checked) => setFormData(prev => ({ ...prev, smsConsent: checked as boolean }))}
                />
                <Label htmlFor="smsConsent" className="text-xs text-gray-600 leading-tight">
                  ✅ Yes, text me my quote for the fastest response. By submitting, you agree to receive SMS from Seattle ProWash. Reply STOP to opt out. Msg/data rates may apply. Consent not required for purchase.
                </Label>
              </div>

              <Button 
                type="submit" 
                variant="cta-orange" 
                className="w-full" 
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Get My Free Quote"}
              </Button>

              <p className="text-xs text-gray-600 text-center">
                Most quotes sent same day. We reply within ~10 minutes (7am–7pm).
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltraSimpleHero;