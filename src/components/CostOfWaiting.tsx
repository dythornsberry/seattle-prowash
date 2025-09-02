import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const CostOfWaiting = () => {
  return (
    <section className="section-spacing bg-light-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-teal text-center mb-12">
            The Cost of Waiting vs. The Peace of Mind We Deliver
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* The Failure */}
            <Card className="border-2 border-red-200 bg-red-50/50">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                  <h3 className="text-xl font-bold text-red-800">The Cost of Waiting</h3>
                </div>
                
                <div className="mb-6">
                  <img
                    src="/lovable-uploads/8cb3c10f-c05a-4727-93c9-247d82982b7a.png"
                    alt="Damaged, mossy roof showing potential problems"
                    className="w-full h-48 object-cover rounded-lg grayscale opacity-75"
                    width="400"
                    height="192"
                    loading="lazy"
                  />
                </div>
                
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-text-charcoal">Higher risk of leaks & water damage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-text-charcoal">Possible shingle deterioration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-text-charcoal">Lower curb appeal & home value</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* The Success */}
            <Card className="border-2 border-bright-green bg-green-50/50">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-bright-green" />
                  <h3 className="text-xl font-bold text-green-800">Peace of Mind We Deliver</h3>
                </div>
                
                <div className="mb-6">
                  <img
                    src="/lovable-uploads/0189ddf5-dfd1-4746-b6b4-7b665e561954.png"
                    alt="Clean, pristine roof after professional cleaning"
                    className="w-full h-48 object-cover rounded-lg object-[center_80%]"
                    width="400"
                    height="192"
                    loading="lazy"
                  />
                </div>
                
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-bright-green mt-0.5 flex-shrink-0" />
                    <span className="text-text-charcoal">Extend roof life with proper treatment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-bright-green mt-0.5 flex-shrink-0" />
                    <span className="text-text-charcoal">Boost curb appeal immediately</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-bright-green mt-0.5 flex-shrink-0" />
                    <span className="text-text-charcoal">12-month moss-free guarantee</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button 
              variant="cta-orange" 
              size="xl"
              className="bg-bright-orange hover:bg-bright-orange/90 text-white font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              GET YOUR FREE QUOTE TODAY
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CostOfWaiting;