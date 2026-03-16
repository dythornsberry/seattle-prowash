const gaId = import.meta.env.VITE_GA4_MEASUREMENT_ID;

if (gaId && typeof window !== 'undefined' && !['localhost', '127.0.0.1'].includes(window.location.hostname)) {
  function loadAnalytics() {
    if (window.gtag) return;
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: unknown[]) { window.dataLayer.push(args); }
    gtag('js', new Date());
    gtag('config', gaId);
    window.gtag = gtag;
  }

  const events = ['pointerdown', 'touchstart', 'keydown', 'scroll'] as const;
  function loadOnInteraction() {
    events.forEach(e => window.removeEventListener(e, loadOnInteraction));
    loadAnalytics();
  }
  events.forEach(e => window.addEventListener(e, loadOnInteraction, { once: true, passive: true }));

  if ('requestIdleCallback' in window) {
    requestIdleCallback(loadAnalytics, { timeout: 5000 });
  } else {
    setTimeout(loadAnalytics, 4000);
  }
}
