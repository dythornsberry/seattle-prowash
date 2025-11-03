// Performance optimization utilities

/**
 * Throttle function using requestAnimationFrame (60fps max)
 * Better than setTimeout for visual updates
 */
export const throttleRAF = <T extends (...args: any[]) => void>(callback: T) => {
  let rafId: number | null = null;
  let lastArgs: any[] | null = null;

  const throttled = (...args: any[]) => {
    lastArgs = args;
    
    if (rafId === null) {
      rafId = requestAnimationFrame(() => {
        if (lastArgs) {
          callback(...lastArgs);
        }
        rafId = null;
        lastArgs = null;
      });
    }
  };

  throttled.cancel = () => {
    if (rafId !== null) {
      cancelAnimationFrame(rafId);
      rafId = null;
      lastArgs = null;
    }
  };

  return throttled as T & { cancel: () => void };
};

/**
 * Debounce function for delayed execution
 */
export const debounce = <T extends (...args: any[]) => void>(
  callback: T,
  delay: number
) => {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  const debounced = (...args: any[]) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      callback(...args);
      timeoutId = null;
    }, delay);
  };

  debounced.cancel = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
  };

  return debounced as T & { cancel: () => void };
};

/**
 * RAF-based animation helper that returns a cleanup function
 */
export const rafAnimate = (
  callback: (progress: number) => boolean | void,
  duration: number
) => {
  let rafId: number;
  let startTime: number;
  let isCancelled = false;

  const animate = (currentTime: number) => {
    if (isCancelled) return;

    if (!startTime) startTime = currentTime;
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    const shouldContinue = callback(progress);

    if (progress < 1 && shouldContinue !== false) {
      rafId = requestAnimationFrame(animate);
    }
  };

  rafId = requestAnimationFrame(animate);

  return () => {
    isCancelled = true;
    if (rafId) {
      cancelAnimationFrame(rafId);
    }
  };
};

/**
 * Passive event listener helper (better scroll performance)
 */
export const addPassiveListener = (
  element: HTMLElement | Window,
  event: string,
  handler: EventListener
) => {
  element.addEventListener(event, handler, { passive: true });
  
  return () => {
    element.removeEventListener(event, handler);
  };
};
