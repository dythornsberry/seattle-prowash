import { Star, Phone, Mail, MapPin } from "lucide-react";

const SimplifiedFooter = () => {
  return (
    <footer className="bg-dark-teal text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          
          {/* Logo and Tagline */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-3">Seattle ProWash</h3>
            <p className="text-white/80 mb-4">
              Kenmore's trusted roof & gutter cleaning specialists.
            </p>
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <a 
                href="https://www.google.com/search?q=Seattle+ProWash+reviews" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white text-sm"
              >
                180+ Google Reviews
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-bright-orange" />
                <a href="tel:2067526690" className="hover:text-bright-orange transition-colors">
                  206.752.6690
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-bright-orange" />
                <a href="mailto:seattleprowash@gmail.com" className="hover:text-bright-orange transition-colors">
                  seattleprowash@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-bright-orange mt-1" />
                <div className="text-white/80">
                  <p>Serving Greater Seattle Area</p>
                </div>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-bold text-lg mb-4">Service Areas</h4>
            <ul className="space-y-2 text-white/80">
              <li>Kenmore</li>
              <li>Bothell</li>
              <li>Kirkland</li>
              <li>Bellevue</li>
              <li>Shoreline</li>
              <li>Edmonds</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/services" className="text-white/80 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/pricing" className="text-white/80 hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/about" className="text-white/80 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/gallery" className="text-white/80 hover:text-white transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-white/80 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © 2025 Seattle ProWash. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="/privacy" className="text-white/60 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-white/60 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SimplifiedFooter;