import { useState } from "react";
import { Link } from "react-router-dom";
import { navigateToContact as goToContact, navigateToReviews as goToReviews, navigateToHome as goHome } from "@/lib/navigation";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";


const Header = () => {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const phoneNumber = "206-752-6690";
  
  interface NavigationItem {
    name: string;
    href: string;
    onClick?: () => void;
  }
  

  
  const navigation: NavigationItem[] = [
    { name: "Home", href: "/", onClick: goHome },
    { name: "Roof Moss Treatment", href: "/roof-moss" },
    { name: "Roof Cleaning", href: "/roof-cleaning" },
    { name: "Gutter Cleaning", href: "/gutter-cleaning" },
    { 
      name: "Reviews", 
      href: "/#reviews",
      onClick: goToReviews
    },
    { name: "Service Area", href: "/kenmore" },
    { name: "Gallery", href: "/gallery" },
    { name: "FAQ", href: "/faq" },
    { name: "About", href: "/about" },
    { 
      name: "Contact", 
      href: "/#contact",
      onClick: goToContact
    }
  ];

  return (
    <header id="site-header" className="fixed top-10 md:top-11 z-40 w-full bg-brand-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-12 md:h-20">
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
              variant="prowash-cta" 
              size="lg"
              onClick={goToContact}
              className="bg-bright-orange hover:bg-bright-orange/90 text-white font-bold text-base px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Get Moss Removal Quote
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => window.location.href = `tel:1${phoneNumber.replace(/[^0-9]/g, '')}`}
              className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              Call {phoneNumber}
            </Button>
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center space-x-2">
            <Button 
              variant="prowash-phone" 
              size="sm"
              onClick={() => window.location.href = `tel:1${phoneNumber.replace(/[^0-9]/g, '')}`}
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
                    goToContact();
                  }}
                >
                  Get Moss Removal Quote
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