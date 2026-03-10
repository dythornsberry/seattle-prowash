/**
 * Navigation helper functions
 */

/**
 * Calculate dynamic offset for sticky headers
 */
const getStickyOffset = (): number => {
  const topBar = document.getElementById('sticky-top-bar');
  const header = document.getElementById('site-header');
  const extra = 12; // buffer so content clears the header shadow

  if (header) {
    return header.getBoundingClientRect().bottom + extra;
  } else if (topBar) {
    return topBar.getBoundingClientRect().bottom + extra;
  }
  return 92; // default reasonable offset
};

/**
 * Scroll to a section by ID with offset for sticky headers
 */
export const scrollToSection = (sectionId: string, options?: { preferForm?: boolean; behavior?: ScrollBehavior }) => {
  const element = document.getElementById(sectionId);
  if (!element) return false;

  const formElement = options?.preferForm ? element.querySelector('form') as HTMLElement | null : null;
  const target = formElement ?? element;

  const offset = getStickyOffset();
  const y = target.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: y, behavior: options?.behavior ?? 'smooth' });
  return true;
};

/**
 * Navigate to the contact section on the home page
 */
export const navigateToContact = () => {
  if (window.location.pathname === '/') {
    if (scrollToSection('contact', { preferForm: true })) return;
  }
  window.location.href = '/#contact';
};

/**
 * Navigate to the reviews section on the home page
 */
export const navigateToReviews = () => {
  if (window.location.pathname === '/') {
    if (scrollToSection('reviews')) return;
  }
  window.location.href = '/#reviews';
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
