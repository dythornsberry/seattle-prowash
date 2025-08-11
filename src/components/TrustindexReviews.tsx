import { useEffect, useRef } from "react";

const TRUSTINDEX_SRC = "https://cdn.trustindex.io/loader.js?009ace551bfb85760c066c21aaa";

const TrustindexReviews = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    // Defer script injection to ensure the rest of the page renders first
    const timer = window.setTimeout(() => {
      if (!containerRef.current) return;

      // Clean previous widget content if any (avoid duplicates on hot reload)
      containerRef.current.innerHTML = "";

      const script = document.createElement("script");
      script.src = TRUSTINDEX_SRC;
      script.async = true;
      script.defer = true;
      scriptRef.current = script;

      // Insert the script inside the container so the widget renders right here
      containerRef.current.appendChild(script);
    }, 0);

    return () => {
      window.clearTimeout(timer);
      if (scriptRef.current && containerRef.current) {
        try {
          containerRef.current.removeChild(scriptRef.current);
        } catch {}
      }
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <section aria-label="Google Reviews" className="py-10">
      <div className="container mx-auto px-4">
        <div className="w-full flex justify-center">
          {/* Trustindex will render the widget here */}
          <div ref={containerRef} className="w-full max-w-5xl overflow-visible" />
        </div>
      </div>
    </section>
  );
};

export default TrustindexReviews;
