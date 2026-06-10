import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { navigateToContact } from "@/lib/navigation";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <title>Page Not Found | Seattle ProWash</title>
      </Helmet>
      <Header />
      <main className="flex-1 flex items-center justify-center pt-24 pb-16 px-4">
        <div className="max-w-xl mx-auto text-center">
          <div className="text-8xl font-bold text-brand-orange mb-4">404</div>
          <h1 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Sorry, we couldn't find that page. But we can definitely find the moss on your roof. Let us help!
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
            <Button
              variant="cta-orange"
              size="xl"
              onClick={navigateToContact}
            >
              Get Fast Quote →
            </Button>
            <Button
              variant="prowash-outline"
              size="xl"
              onClick={() => window.location.href = 'tel:2067526690'}
            >
              <Phone className="w-4 h-4 mr-2" />
              Call or Text 206-752-6690
            </Button>
          </div>

          <div className="border-t border-brand-navy/10 pt-8">
            <p className="text-sm text-muted-foreground mb-4">Looking for one of these?</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/" className="text-sm text-brand-navy hover:text-brand-orange underline transition-colors">Home</Link>
              <Link to="/roof-cleaning" className="text-sm text-brand-navy hover:text-brand-orange underline transition-colors">Roof Cleaning</Link>
              <Link to="/gutter-cleaning" className="text-sm text-brand-navy hover:text-brand-orange underline transition-colors">Gutter Cleaning</Link>
              <Link to="/pricing" className="text-sm text-brand-navy hover:text-brand-orange underline transition-colors">Pricing</Link>
              <Link to="/gallery" className="text-sm text-brand-navy hover:text-brand-orange underline transition-colors">Gallery</Link>
              <Link to="/service-areas" className="text-sm text-brand-navy hover:text-brand-orange underline transition-colors">Service Areas</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
