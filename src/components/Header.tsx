import { useState } from "react";
import { Link } from "react-router-dom";
import { navigateToContact as goToContact, navigateToHome as goHome } from "@/lib/navigation";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { useScrollShadow } from "./ScrollHeader";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const hasScrolled = useScrollShadow();

  const phoneNumber = "206-752-6690";
  
  const handleCallClick = () => {
    // Track phone call click
    if (window.gtag) {
      window.gtag('event', 'phone_call_click', {
        location: 'header',
        phone_number: '2067526690'
      });
    }
    window.location.href = `tel:1${phoneNumber.replace(/[^0-9]/g, '')}`;
  };
  
  const navigation: { name: string; href: string; onClick?: () => void }[] = [
    { name: "Home", href: "/", onClick: goHome },
    { name: "Pricing", href: "/pricing" },
    { name: "Gallery", href: "/gallery" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/#contact", onClick: goToContact }
  ];

  const serviceLinks = [
    { name: "All Services", href: "/services" },
    { name: "Roof Cleaning", href: "/roof-cleaning" },
    { name: "Moss Removal & Treatment", href: "/moss-treatment" },
    { name: "Gutter Cleaning", href: "/gutter-cleaning" },
    { name: "Pressure Washing", href: "/pressure-washing" },
    { name: "Window Cleaning", href: "/window-cleaning" },
    { name: "Commercial", href: "/commercial" },
  ];

  return (
    <header id="site-header" className={`fixed top-12 md:top-11 z-40 w-full bg-brand-navy/95 backdrop-blur-sm border-b border-brand-orange/20 transition-shadow duration-300 ${hasScrolled ? 'shadow-lg' : 'shadow-md'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-11 md:h-16">
          {/* Brand Text */}
          <div className="flex items-center">
            <Link to="/">
              <span className="whitespace-nowrap text-xl md:text-2xl font-bold text-white hover:text-brand-orange transition-colors duration-250 cursor-pointer">
                Seattle <span className="text-brand-orange">ProWash</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-5 xl:space-x-8">
            {navigation.map((item) => (
              item.onClick ? (
                <button
                  key={item.name}
                  onClick={item.onClick}
                  className="text-white hover:text-brand-orange font-medium transition-colors duration-250 cursor-pointer"
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-white hover:text-brand-orange font-medium transition-colors duration-250 cursor-pointer"
                >
                  {item.name}
                </Link>
              )
            ))}
            
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-white hover:text-brand-orange font-medium transition-colors duration-250 cursor-pointer">
                Services
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border-brand-orange/20">
                {serviceLinks.map((service) => (
                  <DropdownMenuItem key={service.name} asChild>
                    <Link 
                      to={service.href}
                      className="cursor-pointer hover:text-brand-orange"
                    >
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={handleCallClick}
              className="flex items-center gap-2 whitespace-nowrap bg-brand-orange/15 hover:bg-brand-orange/25 text-brand-orange font-bold text-base xl:text-xl px-3 xl:px-4 py-2 rounded-lg transition-all duration-250 active:scale-95 border border-brand-orange/30"
            >
              <Phone className="w-5 h-5" />
              {phoneNumber}
            </button>
            <Button
              variant="cta-orange"
              size="sm"
              onClick={goToContact}
              className="font-semibold"
            >
              Request Estimate
            </Button>
          </div>

          {/* Mobile Controls */}
          <div className="lg:hidden flex items-center space-x-2">
            <Button 
              variant="prowash-phone" 
              size="sm"
              onClick={handleCallClick}
              className="border-white text-white hover:bg-white hover:text-brand-navy"
            >
              <Phone className="w-4 h-4" />
              Call
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-brand-orange"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-brand-orange/20 bg-brand-navy/98">
            <nav className="py-4 space-y-2">
              {navigation.map((item) => (
                item.onClick ? (
                  <button
                    key={item.name}
                    onClick={() => {
                      setIsMenuOpen(false);
                      item.onClick?.();
                    }}
                    className="block w-full text-left px-4 py-2 text-white hover:bg-brand-orange/20 hover:text-brand-orange font-medium transition-colors duration-250 cursor-pointer"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-2 text-white hover:bg-brand-orange/20 hover:text-brand-orange font-medium transition-colors duration-250 cursor-pointer"
                  >
                    {item.name}
                  </Link>
                )
              ))}
              
              {/* Services Section in Mobile */}
              <div className="border-t border-brand-orange/20 pt-2 mt-2">
                <div className="px-4 py-2 text-brand-orange font-semibold text-sm">
                  Services
                </div>
                {serviceLinks.map((service) => (
                  <Link
                    key={service.name}
                    to={service.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-6 py-2 text-white hover:bg-brand-orange/20 hover:text-brand-orange transition-colors duration-250"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
              
              <div className="px-4 pt-4 border-t border-brand-orange/20">
                <Button 
                  variant="cta-orange" 
                  className="w-full" 
                  size="lg"
                  onClick={() => {
                    setIsMenuOpen(false);
                    goToContact();
                  }}
                >
                  Request Estimate →
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
