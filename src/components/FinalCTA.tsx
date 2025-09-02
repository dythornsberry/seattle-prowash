import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  const handleCTAClick = () => {
    // Track CTA click
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'CTA',
        event_label: 'GET YOUR FREE QUOTE TODAY - Final'
      });
    }
    document.getElementById('hero-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCallClick = () => {
    // Track call click
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'Phone',
        event_label: 'Call - Final CTA'
      });
    }
    window.location.href = 'tel:206-752-6690';
  };

  return (
    <section className="py-16 bg-seattle-blue text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready for a moss-free roof?
          </h2>
          
          <Button 
            variant="cta-orange" 
            size="xl"
            onClick={handleCTAClick}
            className="text-lg px-12 py-4"
          >
            GET YOUR FREE QUOTE TODAY
          </Button>
          
          <p className="text-xl">
            Or{" "}
            <button
              onClick={handleCallClick}
              className="text-seattle-orange hover:text-seattle-orange/80 font-medium underline transition-colors"
            >
              call 206-752-6690
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;