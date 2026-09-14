import { useState } from "react";
import { Link } from "react-router-dom";
import { navigateToContact } from "@/lib/navigation";
import { Button } from "@/components/ui/button";
import BrandWordmark from "@/components/BrandWordmark";
import { Phone, Menu, ChevronDown, ArrowRight } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from "@/components/ui/sheet";

const navigation = [
  { name: "Pricing", href: "/pricing" },
  { name: "Our Work", href: "/gallery" },
  { name: "About", href: "/about" },
  { name: "Service Areas", href: "/service-areas" },
];

const services = [
  { name: "Roof Cleaning", href: "/roof-cleaning" },
  { name: "Gutter Cleaning", href: "/gutter-cleaning" },
  { name: "Moss Removal & Treatment", href: "/moss-treatment" },
  { name: "House Soft Washing", href: "/pressure-washing#house-soft-washing" },
  { name: "Pressure Washing", href: "/pressure-washing" },
  { name: "Deck Cleaning", href: "/pressure-washing#deck-cleaning" },
  { name: "All Services", href: "/services" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const call = () => window.gtag?.("event", "phone_call_click", { location: "header", phone_number: "2067526690" });

  return (
    <header id="site-header" className="fixed inset-x-0 top-0 z-40 border-b bg-white">
      <div className="mx-auto flex h-20 max-w-[1360px] items-center justify-between gap-4 px-4 sm:px-6">
        <Link to="/" aria-label="Seattle ProWash home" className="flex shrink-0 hover:no-underline">
          <BrandWordmark />
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-6 text-sm font-semibold xl:flex">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex min-h-11 items-center gap-1 text-foreground hover:text-brand-navy">
              Services <ChevronDown className="h-4 w-4" aria-hidden="true" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              {services.map((service) => <DropdownMenuItem key={service.href} asChild><Link to={service.href}>{service.name}</Link></DropdownMenuItem>)}
            </DropdownMenuContent>
          </DropdownMenu>
          {navigation.map((item) => <Link key={item.href} to={item.href} className="py-3 hover:text-brand-navy">{item.name}</Link>)}
        </nav>
        <div className="flex items-center gap-3 sm:gap-5">
          <a href="tel:12067526690" onClick={call} className="hidden items-center gap-2 text-sm font-semibold text-brand-navy sm:flex"><Phone className="h-4 w-4" aria-hidden="true" />206-752-6690</a>
          <Button variant="cta-orange" onClick={navigateToContact} className="h-11 px-4">Get a Quote <ArrowRight className="hidden sm:block" aria-hidden="true" /></Button>
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild><Button variant="outline" size="icon" className="h-11 w-11 shrink-0 border-border xl:hidden" aria-label="Open menu"><Menu aria-hidden="true" /></Button></SheetTrigger>
            <SheetContent className="w-[min(90vw,380px)] overflow-y-auto bg-white px-6 pb-28">
              <SheetHeader className="mb-6 text-left"><SheetTitle><BrandWordmark /></SheetTitle><SheetDescription className="sr-only">Site navigation and cleaning services</SheetDescription></SheetHeader>
              <nav aria-label="Mobile navigation" className="space-y-1">
                {[{ name: "Home", href: "/" }, ...navigation].map((item) => <Link key={item.href} to={item.href} onClick={() => setIsMenuOpen(false)} className="block border-b py-3 font-semibold">{item.name}</Link>)}
                <p className="pt-5 pb-2 text-sm text-muted-foreground">Services</p>
                {services.map((service) => <Link key={service.href} to={service.href} onClick={() => setIsMenuOpen(false)} className="block py-2 text-sm">{service.name}</Link>)}
                <a href="tel:12067526690" onClick={call} className="flex items-center gap-2 pt-6 font-semibold text-brand-navy"><Phone className="h-4 w-4" />206-752-6690</a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
