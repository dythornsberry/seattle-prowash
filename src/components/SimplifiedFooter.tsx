import { Link } from "react-router-dom";

const SimplifiedFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-2">
              Seattle ProWash
            </h3>
            <p className="text-gray-300">
              206-752-6690 • seattleprowash@gmail.com
            </p>
            <p className="text-gray-300">
              Serving: Kenmore, Bothell, Kirkland, Bellevue, Shoreline, Edmonds
            </p>
          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
              Services
            </Link>
            <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
              Pricing
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <Link to="/gallery" className="text-gray-300 hover:text-white transition-colors">
              Gallery
            </Link>
            <Link to="/faq" className="text-gray-300 hover:text-white transition-colors">
              FAQ
            </Link>
            <a href="/#contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </a>
            <a href="#privacy" className="text-gray-300 hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#terms" className="text-gray-300 hover:text-white transition-colors">
              Terms
            </a>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 pt-6">
            <p className="text-sm text-gray-400">
              © {currentYear} Seattle ProWash. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SimplifiedFooter;