import { useEffect } from "react";

const GoogleReviewsCarousel = () => {
  useEffect(() => {
    // Load Common Ninja script if not already loaded
    if (!document.querySelector('script[src*="commonninja.com"]')) {
      const script = document.createElement('script');
      script.src = 'https://cdn.commoninja.com/sdk/latest/commonninja.js';
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="section-spacing bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Customer Reviews
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See what our satisfied customers have to say about our gutter and roof maintenance services
          </p>
        </div>
        
        <div className="fade-up max-w-6xl mx-auto">
          <div className="commonninja_component pid-327f4dba-0e24-47c3-9bca-dbfe20f8f054"></div>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviewsCarousel;
