/**
 * Navigation helper functions
 */

/**
 * Navigate to the contact section on the home page
 * This works from any page and ensures proper scrolling
 */
export const navigateToContact = () => {
  // If we're already on the home page, just scroll to contact with offset for sticky bars
  if (window.location.pathname === '/') {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      const formElement = contactElement.querySelector('form') as HTMLElement | null;
      const target = (formElement ?? (contactElement as HTMLElement));

      // Compute dynamic offset using element bottoms + small padding
      const topBar = document.getElementById('sticky-top-bar') as HTMLElement | null;
      const header = document.getElementById('site-header') as HTMLElement | null;
      let offset = 0;
      const extra = 12; // small buffer so content clears the header shadow
      if (header) {
        offset = header.getBoundingClientRect().bottom + extra;
      } else if (topBar) {
        offset = topBar.getBoundingClientRect().bottom + extra;
      } else {
        offset = 92; // default reasonable offset
      }
      const y = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      return;
    }
  }
  // Navigate to home page with hash (Index will handle offset scrolling)
  window.location.href = '/#contact';
};

/**
 * Navigate to the reviews section on the home page
 */
export const navigateToReviews = () => {
  if (window.location.pathname === '/') {
    const reviewsElement = document.getElementById('reviews');
    if (reviewsElement) {
      // Account for sticky top bar height
      const offsetTop = reviewsElement.offsetTop - 60;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  } else {
    // Navigate to home page with hash
    window.location.href = '/#reviews';
  }
};

/**
 * Navigate to home (scroll to top if already on home)
 */
export const navigateToHome = () => {
  if (window.location.pathname === '/') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    window.location.href = '/';
  }
};