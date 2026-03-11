import { useEffect, useState, useRef } from "react";

export const useScrollShadow = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        setHasScrolled(window.scrollY > 20);
        ticking.current = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return hasScrolled;
};
