import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import logoImage from "@/assets/seattle-prowash-logo.png";

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const phoneNumber = "206-752-6690";
  
  interface NavigationItem {
    name: string;
    href: string;
    onClick?: () => void;
  }
  
  const navigateToContact = () => {
    if (window.location.pathname === '/') {
      // Already on home page, just scroll to contact
      const contactElement = document.getElementById('contact');
      if (contactElement) {
        contactElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    } else {
      // Navigate to home page first, then scroll to contact
      navigate('/');
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

  const navigateToReviews = () => {
    if (window.location.pathname === '/') {
      // Already on home page, just scroll to reviews
      const reviewsElement = document.getElementById('reviews');
      if (reviewsElement) {
        reviewsElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    } else {
      // Navigate to home page first, then scroll to reviews
      navigate('/');
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
  
  const navigation: NavigationItem[] = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { 
      name: "Reviews", 
      href: "/#reviews",
      onClick: () => navigateToReviews()
    },
    { 
      name: "Contact", 
      href: "/#contact",
      onClick: () => navigateToContact()
    }
  ];

  return (
    <header className="sticky top-0 z-50 bg-brand-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Brand Text */}
          <div className="flex items-center">
            <Link to="/">
              <h1 className="text-xl md:text-2xl font-bold text-brand-blue hover:text-brand-orange transition-colors duration-250 cursor-pointer">
                Seattle <span className="text-brand-orange">ProWash</span>
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              item.onClick ? (
                <button
                  key={item.name}
                  onClick={item.onClick}
                  className="text-brand-blue hover:text-brand-orange font-medium transition-colors duration-250 cursor-pointer"
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-brand-blue hover:text-brand-orange font-medium transition-colors duration-250 cursor-pointer"
                >
                  {item.name}
                </Link>
              )
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="prowash-secondary" 
              size="sm"
              onClick={navigateToContact}
            >
              Get Free Quote
            </Button>
            <Button 
              variant="prowash-phone" 
              size="sm"
              onClick={() => window.location.href = `tel:${phoneNumber}`}
            >
              <Phone className="w-4 h-4" />
              {phoneNumber}
            </Button>
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center space-x-2">
            <Button 
              variant="prowash-phone" 
              size="sm"
              onClick={() => window.location.href = `tel:${phoneNumber}`}
            >
              <Phone className="w-4 h-4" />
              Call
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-brand-blue"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-brand-white">
            <nav className="py-4 space-y-2">
              {navigation.map((item) => (
                item.onClick ? (
                  <button
                    key={item.name}
                    onClick={() => {
                      setIsMenuOpen(false);
                      item.onClick();
                    }}
                    className="block w-full text-left px-4 py-2 text-brand-blue hover:bg-brand-gray hover:text-brand-orange font-medium transition-colors duration-250 cursor-pointer"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-2 text-brand-blue hover:bg-brand-gray hover:text-brand-orange font-medium transition-colors duration-250 cursor-pointer"
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <div className="px-4 pt-4 border-t border-border">
                <Button 
                  variant="prowash-primary" 
                  className="w-full" 
                  size="lg"
                  onClick={() => {
                    setIsMenuOpen(false);
                    navigateToContact();
                  }}
                >
                  Get My Free Quote
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;