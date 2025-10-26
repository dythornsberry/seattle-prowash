import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const serviceAreas = [
    "Kenmore", "Bothell", "Kirkland", "Shoreline", "Woodinville", 
    "Redmond", "Bellevue", "Mukilteo", "Mill Creek", "Lynnwood"
  ];

  const services = [
    "Roof Cleaning",
    "Gutter Cleaning"
  ];

  return (
    <footer className="bg-brand-navy text-white">
      {/* Mini CTA Bar */}
      <div className="bg-brand-orange text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-lg md:text-xl font-bold">
                Ready for a moss-free roof?
              </h3>
              <p className="text-sm opacity-80">Same-day estimates • Fully licensed & insured • 12‑month moss‑free guarantee</p>
            </div>
            <Button 
              variant="prowash-cta" 
              size="lg"
              onClick={() => window.location.href = 'tel:206-752-6690'}
            >
              <Phone className="w-4 h-4 mr-2" />
              Call 206-752-6690
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-2 text-white">
                  Seattle <span className="text-brand-orange">ProWash</span>
                </h2>
                <p className="text-white/80 leading-relaxed">
                  Trusted roof cleaning and gutter specialists serving Kenmore, Bothell, Kirkland and greater Seattle. Protecting Pacific Northwest homes with safe, effective moss removal and drainage solutions.
                </p>
              </div>
              
              {/* Google Reviews Badge */}
              <div className="bg-brand-white/10 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex text-brand-orange">
                    ★★★★★
                  </div>
                  <span className="font-bold">5.0</span>
                </div>
                <p className="text-sm text-white/80">180+ Google Reviews</p>
                <Button 
                  variant="prowash-secondary" 
                  size="sm" 
                  className="mt-2 text-xs"
                  onClick={() => window.open('https://g.page/r/CZ1YhG3KQ4_8EAE/review', '_blank')}
                >
                  Read Reviews
                </Button>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Our Services</h3>
               <ul className="space-y-3">
                <li>
                  <Link 
                     to="/roof-cleaning" 
                    className="text-white/80 hover:text-brand-orange transition-colors duration-250 text-sm"
                  >
                    Roof Cleaning
                  </Link>
                </li>
                <li>
                  <Link 
                     to="/gutter-cleaning" 
                    className="text-white/80 hover:text-brand-orange transition-colors duration-250 text-sm"
                  >
                    Gutter Cleaning
                  </Link>
                </li>
              </ul>
            </div>

            {/* Service Areas */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Service Areas</h3>
              <div className="space-y-2">
                {serviceAreas.map((area, index) => {
                  const cityPages = ["Kenmore", "Bothell", "Kirkland", "Bellevue", "Redmond", "Sammamish", "Woodinville"];
                  const isLinkable = cityPages.includes(area);
                  const linkPath = isLinkable ? `/${area.toLowerCase()}` : null;
                  
                  return isLinkable && linkPath ? (
                    <Link 
                      key={index} 
                      to={linkPath}
                      className="inline-block text-sm text-white/80 hover:text-white transition-colors mr-3 mb-1 underline decoration-white/30 hover:decoration-white"
                    >
                      {area}
                      {index < serviceAreas.length - 1 && ","}
                    </Link>
                  ) : (
                    <span key={index} className="inline-block text-sm text-white/80 mr-3 mb-1">
                      {area}
                      {index < serviceAreas.length - 1 && ","}
                    </span>
                  );
                })}
              </div>
              <p className="text-xs text-white/60 mt-4">
                <Link to="/service-areas" className="hover:text-white underline">View all service areas</Link> • Serving ~15 miles from Kenmore
              </p>
              <p className="text-sm text-brand-orange mt-4 font-semibold">
                Call 206-752-6690 for your free same-day quote
              </p>
            </div>

            {/* Contact */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white">Contact Us</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-brand-orange flex-shrink-0" />
                  <div>
                     <a href="tel:+12067526690" className="font-semibold hover:text-brand-orange transition-colors">
                      206-752-6690
                    </a>
                    <p className="text-xs text-white/60">Call anytime</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-brand-orange flex-shrink-0" />
                  <div>
                    <a href="mailto:seattleprowash@gmail.com" className="text-sm hover:text-brand-orange transition-colors">
                      seattleprowash@gmail.com
                    </a>
                    <div className="text-xs text-white/60">
                      <p>We respond promptly during business hours</p>
                      <p>Most quotes are sent the same day</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-orange flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm">Kenmore, WA</p>
                    <p className="text-xs text-white/60">Licensed & Insured</p>
                  </div>
                </div>
              </div>

              <Button 
                variant="cta-orange" 
                size="lg" 
                className="w-full"
                onClick={navigateToContact}
              >
                Get My Free Quote →
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-white/60 mb-1">
                Licensed & Insured • Locally Owned • Serving Greater Seattle
              </p>
              <p className="text-sm text-white/60">
                © {currentYear} Seattle ProWash. All rights reserved.
              </p>
            </div>
            <div className="flex gap-6 text-sm">
              <Link to="/faq" className="text-white/60 hover:text-white transition-colors">
                FAQ
              </Link>
              <a href="#privacy" className="text-white/60 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-white/60 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;