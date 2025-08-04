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
      contactElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  } else {
    // Navigate to home page and scroll to contact after load
    window.location.href = '/#contact';
    
    // Wait for navigation and then scroll
    setTimeout(() => {
      const contactElement = document.getElementById('contact');
      if (contactElement) {
        contactElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
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
    window.location.href = '/#reviews';
    setTimeout(() => {
      const reviewsElement = document.getElementById('reviews');
      if (reviewsElement) {
        reviewsElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  }
};