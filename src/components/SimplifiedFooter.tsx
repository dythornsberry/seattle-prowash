import { Star, Phone, Mail, MapPin } from "lucide-react";

const SimplifiedFooter = () => {
  return (
    <footer className="bg-brand-blue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Business Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/src/assets/seattle-prowash-logo.png" 
                alt="Seattle ProWash Logo" 
                className="h-8 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-white/80 mb-4">
              Kenmore's trusted roof & gutter cleaning specialists.
            </p>
            <div className="space-y-2 text-sm">
              <p>📞 206-752-6690</p>
              <p>✉️ seattleprowash@gmail.com</p>
              <p>📍 Serving: Kenmore, Bothell, Kirkland, Bellevue, Shoreline, Edmonds</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="/services#roof-cleaning" className="hover:text-cta-orange transition-colors">Roof Cleaning</a></li>
              <li><a href="/services#gutter-cleaning" className="hover:text-cta-orange transition-colors">Gutter Cleaning</a></li>
              <li><a href="/pricing" className="hover:text-cta-orange transition-colors">Pricing</a></li>
              <li><a href="/reviews" className="hover:text-cta-orange transition-colors">Reviews</a></li>
            </ul>
          </div>

          {/* Additional Links */}
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="/about" className="hover:text-cta-orange transition-colors">About</a></li>
              <li><a href="/gallery" className="hover:text-cta-orange transition-colors">Gallery</a></li>
              <li><a href="/faq" className="hover:text-cta-orange transition-colors">FAQ</a></li>
              <li><a href="/contact" className="hover:text-cta-orange transition-colors">Contact</a></li>
              <li><a href="/privacy" className="hover:text-cta-orange transition-colors">Privacy</a></li>
              <li><a href="/terms" className="hover:text-cta-orange transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/60">
          <p>&copy; 2025 Seattle ProWash. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default SimplifiedFooter;