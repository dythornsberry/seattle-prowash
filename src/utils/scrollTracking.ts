// Scroll depth tracking for analytics
let tracked50 = false;
let tracked75 = false;
let tracked100 = false;

export const initScrollTracking = () => {
  if (typeof window === 'undefined') return;

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    const scrollPercentage = (scrolled / scrollHeight) * 100;

    // Track 50%
    if (scrollPercentage >= 50 && !tracked50) {
      tracked50 = true;
      if (window.gtag) {
        window.gtag('event', 'scroll_depth', {
          depth_percentage: 50
        });
      }
    }

    // Track 75%
    if (scrollPercentage >= 75 && !tracked75) {
      tracked75 = true;
      if (window.gtag) {
        window.gtag('event', 'scroll_depth', {
          depth_percentage: 75
        });
      }
    }

    // Track 100%
    if (scrollPercentage >= 99 && !tracked100) {
      tracked100 = true;
      if (window.gtag) {
        window.gtag('event', 'scroll_depth', {
          depth_percentage: 100
        });
      }
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });

  // Reset tracking when navigating to a new page
  return () => {
    window.removeEventListener('scroll', handleScroll);
    tracked50 = false;
    tracked75 = false;
    tracked100 = false;
  };
};
