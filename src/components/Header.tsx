import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Roof Cleaning", href: "/services#roof-cleaning" },
    { name: "Gutter Cleaning", href: "/services#gutter-cleaning" },
    { name: "Pricing", href: "/pricing" },
    { name: "Reviews", href: "/reviews" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/src/assets/seattle-prowash-logo.png" 
              alt="Seattle ProWash Logo" 
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-brand-blue hover:text-cta-orange transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="tel:2067526690"
              className="flex items-center gap-2 text-brand-blue hover:text-cta-orange transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">206-752-6690</span>
            </a>
            <Button 
              className="bg-cta-orange hover:bg-cta-orange-dark text-white font-bold"
              onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="w-5 h-5 text-brand-blue" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-4 mt-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg text-brand-blue hover:text-cta-orange transition-colors font-medium py-2"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-4 border-t border-border">
                  <a 
                    href="tel:2067526690"
                    className="flex items-center gap-2 text-brand-blue text-lg font-medium py-2"
                  >
                    <Phone className="w-5 h-5" />
                    206-752-6690
                  </a>
                  <Button 
                    className="w-full mt-4 bg-cta-orange hover:bg-cta-orange-dark text-white font-bold"
                    onClick={() => {
                      setIsOpen(false);
                      document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Get Your Free Quote
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;