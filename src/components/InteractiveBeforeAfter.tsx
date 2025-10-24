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
  const [showHint, setShowHint] = useState(true);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  // Hide hint after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowHint(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  // Auto-scroll animation on mobile (once per page load, pause if user touches)
  useEffect(() => {
    if (!isMobile || hasAutoPlayed || isUserInteracting) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAutoPlayed && !isUserInteracting) {
            setHasAutoPlayed(true);
            
            // Animate from 50% to 0% (reveal after), then back to 50%
            setTimeout(() => {
              let progress = 50;
              const animateToZero = setInterval(() => {
                if (isUserInteracting) {
                  clearInterval(animateToZero);
                  return;
                }
                progress -= 1.5; // Slower animation
                if (progress <= 0) {
                  clearInterval(animateToZero);
                  setSliderPosition(0);
                  
                  // Wait 1000ms then animate back
                  setTimeout(() => {
                    if (isUserInteracting) return;
                    let returnProgress = 0;
                    const animateBack = setInterval(() => {
                      if (isUserInteracting) {
                        clearInterval(animateBack);
                        return;
                      }
                      returnProgress += 1.5;
                      if (returnProgress >= 50) {
                        clearInterval(animateBack);
                        setSliderPosition(50);
                      } else {
                        setSliderPosition(returnProgress);
                      }
                    }, 20);
                  }, 1000);
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
  }, [isMobile, hasAutoPlayed, isUserInteracting]);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    
    setIsUserInteracting(true);
    setShowHint(false);
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    
    setSliderPosition(percent);
  };

  // Tap to toggle between before/after
  const handleClick = () => {
    setIsUserInteracting(true);
    setShowHint(false);
    setSliderPosition(prev => prev > 25 ? 0 : 100);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
    setIsUserInteracting(true);
    setShowHint(false);
  };
  const handleMouseUp = () => setIsDragging(false);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    handleMove(e.clientX);
  };

  const handleTouchStart = () => {
    setIsUserInteracting(true);
    setShowHint(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    e.preventDefault();
    handleMove(e.touches[0].clientX);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] overflow-hidden rounded-xl shadow-lg select-none"
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onClick={handleClick}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      style={{ touchAction: 'none' }}
    >
      {/* After Image (Background) */}
      <picture>
        {afterImageWebP && <source srcSet={afterImageWebP} type="image/webp" />}
        <img
          src={afterImage}
          alt={afterAlt}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </picture>

      {/* Before Image (Clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
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
            decoding="async"
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
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-20 cursor-ew-resize"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl border-4 border-gray-300 flex items-center justify-center cursor-ew-resize">
          <div className="flex gap-1">
            <div className="w-0.5 h-5 bg-gray-600"></div>
            <div className="w-0.5 h-5 bg-gray-600"></div>
          </div>
        </div>
      </div>

      {/* Drag Hint */}
      {showHint && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/75 text-white px-4 py-2 rounded-full text-sm font-medium animate-pulse z-30">
          ← Drag to compare →
        </div>
      )}
    </div>
  );
};

export default InteractiveBeforeAfter;
