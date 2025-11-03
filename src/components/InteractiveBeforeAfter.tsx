import { useState, useEffect, useRef, memo } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { throttleRAF, rafAnimate } from "@/utils/performanceUtils";

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
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationCleanupRef = useRef<(() => void) | null>(null);
  const isMobile = useIsMobile();

  // Hide hint after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowHint(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  // Optimized auto-scroll animation using RAF
  useEffect(() => {
    if (!isMobile || hasAutoPlayed || isUserInteracting) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAutoPlayed && !isUserInteracting) {
            setHasAutoPlayed(true);
            
            // Debounce initial animation by 500ms
            setTimeout(() => {
              if (isUserInteracting) return;

              // Animate from 50% to 0% using RAF
              const cleanup1 = rafAnimate((progress) => {
                if (isUserInteracting) return false;
                const newPos = 50 - (50 * progress);
                setSliderPosition(newPos);
                return true;
              }, 1500);

              animationCleanupRef.current = cleanup1;

              // After first animation completes, wait then animate back
              setTimeout(() => {
                if (isUserInteracting) return;
                
                const cleanup2 = rafAnimate((progress) => {
                  if (isUserInteracting) return false;
                  const newPos = 0 + (50 * progress);
                  setSliderPosition(newPos);
                  return true;
                }, 1500);

                animationCleanupRef.current = cleanup2;
              }, 2500);
            }, 500);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
      if (animationCleanupRef.current) {
        animationCleanupRef.current();
      }
    };
  }, [isMobile, hasAutoPlayed, isUserInteracting]);

  // Throttled move handler using RAF for 60fps performance
  const handleMove = useRef(
    throttleRAF((clientX: number) => {
      if (!containerRef.current) return;
      
      setIsUserInteracting(true);
      setShowHint(false);
      
      // Cancel any ongoing animations
      if (animationCleanupRef.current) {
        animationCleanupRef.current();
        animationCleanupRef.current = null;
      }
      
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
      
      setSliderPosition(percent);
    })
  ).current;

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
    
    // Cancel animations
    if (animationCleanupRef.current) {
      animationCleanupRef.current();
      animationCleanupRef.current = null;
    }
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
      <div className={`absolute inset-0 transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <picture>
          {afterImageWebP && <source srcSet={afterImageWebP} type="image/webp" />}
          <img
            src={afterImage}
            alt={afterAlt}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
            decoding="async"
            onLoad={() => setIsLoaded(true)}
          />
        </picture>
      </div>

      {/* Blur placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}

      {/* Before Image (Clipped) - GPU accelerated */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden' as const,
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

      {/* Slider Line & Handle - GPU accelerated */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-20 cursor-ew-resize"
        style={{ 
          left: `${sliderPosition}%`,
          transform: 'translateZ(0)',
          willChange: isDragging ? 'left' : 'auto'
        }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl border-4 border-gray-300 flex items-center justify-center cursor-ew-resize transition-shadow duration-200 hover:shadow-2xl hover:border-brand-orange">
          <div className="flex gap-1">
            <div className="w-0.5 h-5 bg-gray-600"></div>
            <div className="w-0.5 h-5 bg-gray-600"></div>
          </div>
        </div>
      </div>

      {/* Drag Hint */}
      {showHint && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/75 text-white px-4 py-2 rounded-full text-sm font-medium z-30 animate-[pulse_2s_ease-in-out_infinite]">
          <span className="hidden sm:inline">← Drag to compare →</span>
          <span className="sm:hidden">Tap or drag ↔</span>
        </div>
      )}
    </div>
  );
};

export default memo(InteractiveBeforeAfter);
