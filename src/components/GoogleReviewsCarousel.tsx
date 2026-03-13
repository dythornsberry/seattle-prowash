import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";

const GoogleReviewsCarousel = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const widgetRef = useRef<HTMLDivElement | null>(null);
  const [widgetLoaded, setWidgetLoaded] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const loadWidget = () => {
      if (!document.querySelector('script[src*="featurable.com"]')) {
        const script = document.createElement("script");
        script.src = "https://featurable.com/assets/bundle.js";
        script.defer = true;
        script.charset = "UTF-8";
        document.body.appendChild(script);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          loadWidget();
          observer.disconnect();
        }
      },
      { rootMargin: "300px 0px" }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const widget = widgetRef.current;
    if (!widget) return;

    const markReviewerImagesDecorative = () => {
      widget.querySelectorAll("img").forEach((image) => {
        if (!image.getAttribute("alt")) {
          image.setAttribute("alt", "");
          image.setAttribute("role", "presentation");
          image.setAttribute("aria-hidden", "true");
        }
      });
    };

    const checkWidgetLoaded = () => {
      if (widget.children.length > 0) {
        setWidgetLoaded(true);
      }
    };

    markReviewerImagesDecorative();
    checkWidgetLoaded();

    const observer = new MutationObserver(() => {
      markReviewerImagesDecorative();
      checkWidgetLoaded();
    });

    observer.observe(widget, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="section-spacing bg-background">
      <div className="container mx-auto px-4">
        {/* Fallback heading, hidden once the widget renders its own */}
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
          <div
            ref={widgetRef}
            id="featurable-db846b26-606c-49f2-82ca-c73eb47770bf"
            data-featurable-async
            className="min-h-[340px]"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviewsCarousel;
