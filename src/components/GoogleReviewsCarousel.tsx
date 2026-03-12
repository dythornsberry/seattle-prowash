import { useEffect, useState } from "react";
import { Star } from "lucide-react";

const GoogleReviewsCarousel = () => {
  const [widgetLoaded, setWidgetLoaded] = useState(false);

  useEffect(() => {
    // Load Featurable script if not already loaded
    if (!document.querySelector('script[src*="featurable.com"]')) {
      const script = document.createElement('script');
      script.src = 'https://featurable.com/assets/bundle.js';
      script.defer = true;
      script.charset = 'UTF-8';
      document.body.appendChild(script);
    }

    // Check if widget rendered after a delay
    const timer = setTimeout(() => {
      const widget = document.getElementById('featurable-db846b26-606c-49f2-82ca-c73eb47770bf');
      if (widget && widget.children.length > 0) {
        setWidgetLoaded(true);
      }
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="section-spacing bg-background">
      <div className="container mx-auto px-4">
        {/* Fallback heading — hidden once the widget renders its own */}
        {!widgetLoaded && (
          <div className="text-center mb-8 fade-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-3">
              What Our Customers Say
            </h2>
            <div className="flex items-center justify-center gap-2 text-brand-orange">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-brand-orange" />
              ))}
              <span className="text-brand-navy font-semibold ml-1">5.0 from 200+ Google Reviews</span>
            </div>
          </div>
        )}

        <div className="fade-up max-w-6xl mx-auto">
          <div id="featurable-db846b26-606c-49f2-82ca-c73eb47770bf" data-featurable-async></div>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviewsCarousel;
