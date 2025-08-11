/**
 * Navigation helper functions
 */

/**
 * Navigate to the contact section on the home page
 * This works from any page and ensures proper scrolling
 */
export const navigateToContact = () => {
  // If we're already on the home page, just scroll to contact
  if (window.location.pathname === '/') {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      // On mobile, scroll to the form specifically for better UX
      const isMobile = window.innerWidth < 1024;
      const formElement = contactElement.querySelector('form');
      
      if (isMobile && formElement) {
        formElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      } else {
        contactElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  } else {
    // Navigate to home page with hash
    window.location.href = '/#contact';
  }
};

/**
 * Navigate to the reviews section on the home page
 */
export const navigateToReviews = () => {
  if (window.location.pathname === '/') {
    const reviewsElement = document.getElementById('reviews');
    if (reviewsElement) {
      reviewsElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
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