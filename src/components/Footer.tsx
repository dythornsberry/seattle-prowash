import { Button } from "@/components/ui/button";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-white">
      <div className="bg-brand-orange py-4 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <h3 className="text-center text-lg font-bold md:text-left md:text-xl">
              Ready for a cleaner exterior?
            </h3>
            <Button
              variant="prowash-cta"
              size="lg"
              onClick={() => { window.location.href = "tel:206-752-6690"; }}
            >
              <Phone className="mr-2 h-4 w-4" />
              Call or Text 206-752-6690
            </Button>
          </div>
        </div>
      </div>

      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
            <div>
              <h2 className="mb-2 text-2xl font-bold text-white">
                Seattle <span className="text-brand-orange">ProWash</span>
              </h2>
              <p className="mb-4 text-sm font-medium text-brand-orange">Based in Kenmore, WA</p>
              <p className="max-w-sm leading-relaxed text-white/75">
                Roof, gutter, and exterior cleaning across north Seattle and the Eastside.
              </p>
              <Link to="/reviews" className="mt-5 inline-block font-semibold text-white hover:text-brand-orange">
                5.0 stars from 233 Google reviews
              </Link>
            </div>

            <div>
              <h3 className="mb-5 text-lg font-bold text-white">Services</h3>
              <nav className="grid grid-cols-2 gap-x-5 gap-y-3 text-sm" aria-label="Footer services">
                <Link to="/roof-cleaning" className="text-white/75 hover:text-brand-orange">Roof Cleaning</Link>
                <Link to="/gutter-cleaning" className="text-white/75 hover:text-brand-orange">Gutter Cleaning</Link>
                <Link to="/moss-treatment" className="text-white/75 hover:text-brand-orange">Moss Treatment</Link>
                <Link to="/pressure-washing" className="text-white/75 hover:text-brand-orange">Pressure Washing</Link>
                <Link to="/window-cleaning" className="text-white/75 hover:text-brand-orange">Window Cleaning</Link>
                <Link to="/services" className="text-white/75 hover:text-brand-orange">All Services</Link>
              </nav>
            </div>

            <div>
              <h3 className="mb-5 text-lg font-bold text-white">Contact</h3>
              <div className="space-y-4 text-sm">
                <a href="tel:+12067526690" className="flex items-center gap-3 font-semibold hover:text-brand-orange">
                  <Phone className="h-5 w-5 shrink-0 text-brand-orange" />
                  206-752-6690
                </a>
                <a href="mailto:seattleprowash@gmail.com" className="flex items-center gap-3 text-white/80 hover:text-brand-orange">
                  <Mail className="h-5 w-5 shrink-0 text-brand-orange" />
                  seattleprowash@gmail.com
                </a>
                <div className="flex items-center gap-3 text-white/80">
                  <Clock className="h-5 w-5 shrink-0 text-brand-orange" />
                  Call or text anytime
                </div>
                <div className="flex items-start gap-3 text-white/80">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange" />
                  <span>6516 NE 192nd Pl<br />Kenmore, WA 98028</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/15 py-6 pb-24 md:pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-white/60 md:flex-row md:text-left">
            <p>© {currentYear} Seattle ProWash LLC · WA Contractor Lic. #SEATTPL783M6</p>
            <div className="flex gap-6">
              <Link to="/pricing" className="hover:text-white">Pricing</Link>
              <Link to="/faq" className="hover:text-white">FAQ</Link>
              <Link to="/service-areas" className="hover:text-white">Service Areas</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
