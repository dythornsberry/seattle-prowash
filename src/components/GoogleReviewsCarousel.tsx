import { useEffect } from "react";

const GoogleReviewsCarousel = () => {
  useEffect(() => {
    // Load Featurable script if not already loaded
    if (!document.querySelector('script[src*="featurable.com"]')) {
      const script = document.createElement('script');
      script.src = 'https://featurable.com/assets/bundle.js';
      script.defer = true;
      script.charset = 'UTF-8';
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="section-spacing bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See what our satisfied customers have to say about our gutter and roof maintenance services
          </p>
        </div>
        
        <div className="fade-up max-w-6xl mx-auto">
          <div id="featurable-db846b26-606c-49f2-82ca-c73eb47770bf" data-featurable-async></div>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviewsCarousel;
