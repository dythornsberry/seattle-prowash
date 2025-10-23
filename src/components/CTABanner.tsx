import { Button } from "@/components/ui/button";
import { Clock, Phone } from "lucide-react";

const CTABanner = () => {
  return (
    <section className="py-16 bg-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-32 h-32 border-2 border-orange-400 rounded-full -translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 border-2 border-orange-400 rounded-full translate-x-24 translate-y-24"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center space-y-8 fade-up">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Ready for a moss-free roof?
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-4xl mx-auto">
            <Button 
              size="xl" 
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 text-lg rounded-lg shadow-lg"
              onClick={() => {
                if (window.location.pathname === '/') {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = '/#contact';
                }
              }}
            >
              Get Free Quote Today
            </Button>
            
            <div className="text-center mt-4">
              <p className="text-gray-300">
                Or call <a href="tel:12067526690" className="text-white hover:text-orange-400 transition-colors">206-752-6690</a>
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTABanner;