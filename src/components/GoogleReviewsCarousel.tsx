import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";

const FEATURABLE_SCRIPT_SRC = "https://featurable.com/assets/bundle.js";
const FEATURABLE_WIDGET_ID = "featurable-db846b26-606c-49f2-82ca-c73eb47770bf";

const GoogleReviewsCarousel = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const widgetRef = useRef<HTMLDivElement | null>(null);
  const initializedRef = useRef(false);
  const [widgetLoaded, setWidgetLoaded] = useState(false);
  const [widgetFailed, setWidgetFailed] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const loadWidget = () => {
      const initializeWidget = () => {
        const widget = widgetRef.current;
        if (!widget || initializedRef.current) return;

        if (window.initializeFeaturableWidget) {
          try {
            window.initializeFeaturableWidget(widget);
            initializedRef.current = true;
          } catch (error) {
            console.error("Featurable reviews failed to initialize:", error);
            setWidgetFailed(true);
          }
        }
      };

      if (window.initializeFeaturableWidget) {
        initializeWidget();
        return;
      }

      const existingScript = document.querySelector<HTMLScriptElement>(
        `script[src="${FEATURABLE_SCRIPT_SRC}"]`
      );

      if (existingScript) {
        existingScript.addEventListener("load", initializeWidget, { once: true });
        existingScript.addEventListener("error", () => setWidgetFailed(true), { once: true });
      } else {
        const script = document.createElement("script");
        script.src = FEATURABLE_SCRIPT_SRC;
        script.defer = true;
        script.charset = "UTF-8";
        script.addEventListener("load", initializeWidget, { once: true });
        script.addEventListener("error", () => setWidgetFailed(true), { once: true });
        document.body.appendChild(script);
      }

      window.setTimeout(() => {
        if (!widgetRef.current?.children.length) {
          setWidgetFailed(true);
        }
      }, 7000);
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
            <div className="flex flex-wrap items-center justify-center gap-2 text-brand-orange">
              <span className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-brand-orange" />
                ))}
              </span>
              <span className="text-brand-navy font-semibold">5.0 from 233 Google Reviews</span>
            </div>
          </div>
        )}

        <div className="fade-up max-w-6xl mx-auto">
          {widgetFailed && !widgetLoaded ? (
            <div className="min-h-[220px] flex flex-col items-center justify-center rounded-lg border border-brand-navy/10 bg-white p-8 text-center shadow-sm">
              <p className="text-lg font-semibold text-brand-navy mb-2">
                Our Google reviews are temporarily unavailable here.
              </p>
              <p className="text-muted-foreground mb-5">
                Seattle ProWash is rated 5.0 stars by 233 local customers.
              </p>
              <a
                href="/reviews"
                className="inline-flex items-center justify-center rounded-md bg-brand-orange px-5 py-3 font-semibold text-white transition-colors hover:bg-brand-orange/90"
              >
                Read customer reviews
              </a>
            </div>
          ) : (
            <div
              ref={widgetRef}
              id={FEATURABLE_WIDGET_ID}
              data-featurable-async
              // The widget needs 320px; reclaim the page gutters on narrow phones.
              className="min-h-[340px] -mx-4 min-[352px]:mx-0"
            ></div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GoogleReviewsCarousel;
