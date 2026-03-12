import { ReactNode, useEffect, useRef, useState } from "react";

interface DeferredSectionProps {
  children: ReactNode;
  placeholder?: ReactNode;
  rootMargin?: string;
}

const DeferredSection = ({
  children,
  placeholder = null,
  rootMargin = "300px 0px",
}: DeferredSectionProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible || !containerRef.current) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [isVisible, rootMargin]);

  return <div ref={containerRef}>{isVisible ? children : placeholder}</div>;
};

export default DeferredSection;
