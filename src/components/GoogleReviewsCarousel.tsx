import { useEffect, useRef } from "react";

const GoogleReviewsCarousel = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const widgetRef = useRef<HTMLDivElement | null>(null);

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

    markReviewerImagesDecorative();

    const observer = new MutationObserver(() => {
      markReviewerImagesDecorative();
    });

    observer.observe(widget, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="section-spacing bg-background">
      <div className="container mx-auto px-4">
        {/* Heading comes from the Featurable widget itself */}

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
