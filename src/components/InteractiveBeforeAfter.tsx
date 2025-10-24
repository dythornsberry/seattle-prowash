import { useState, useEffect, useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface InteractiveBeforeAfterProps {
  beforeImage: string;
  afterImage: string;
  beforeImageWebP?: string;
  afterImageWebP?: string;
  beforeAlt: string;
  afterAlt: string;
}

const InteractiveBeforeAfter = ({
  beforeImage,
  afterImage,
  beforeImageWebP,
  afterImageWebP,
  beforeAlt,
  afterAlt,
}: InteractiveBeforeAfterProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [hasAutoPlayed, setHasAutoPlayed] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  // Auto-scroll animation on mobile (once per page load)
  useEffect(() => {
    if (!isMobile || hasAutoPlayed) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAutoPlayed) {
            setHasAutoPlayed(true);
            
            // Animate from 50% to 0% (reveal after), then back to 50%
            setTimeout(() => {
              let progress = 50;
              const animateToZero = setInterval(() => {
                progress -= 2;
                if (progress <= 0) {
                  clearInterval(animateToZero);
                  setSliderPosition(0);
                  
                  // Wait 800ms then animate back
                  setTimeout(() => {
                    let returnProgress = 0;
                    const animateBack = setInterval(() => {
                      returnProgress += 2;
                      if (returnProgress >= 50) {
                        clearInterval(animateBack);
                        setSliderPosition(50);
                      } else {
                        setSliderPosition(returnProgress);
                      }
                    }, 20);
                  }, 800);
                } else {
                  setSliderPosition(progress);
                }
              }, 20);
            }, 500);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [isMobile, hasAutoPlayed]);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    
    setSliderPosition(percent);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] overflow-hidden rounded-xl shadow-lg select-none cursor-ew-resize"
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
    >
      {/* After Image (Background) */}
      <picture>
        {afterImageWebP && <source srcSet={afterImageWebP} type="image/webp" />}
        <img
          src={afterImage}
          alt={afterAlt}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      </picture>

      {/* Before Image (Clipped) */}
      <div
        className="absolute inset-0 overflow-hidden transition-[clip-path] duration-100"
        style={{
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
        }}
      >
        <picture>
          {beforeImageWebP && <source srcSet={beforeImageWebP} type="image/webp" />}
          <img
            src={beforeImage}
            alt={beforeAlt}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </picture>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg z-10">
        Before
      </div>
      <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg z-10">
        After
      </div>

      {/* Slider Line & Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-20 transition-[left] duration-100"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl border-4 border-gray-300 flex items-center justify-center">
          <div className="flex gap-1">
            <div className="w-0.5 h-4 bg-gray-600"></div>
            <div className="w-0.5 h-4 bg-gray-600"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveBeforeAfter;
