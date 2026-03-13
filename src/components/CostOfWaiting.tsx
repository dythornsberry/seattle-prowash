import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, AlertTriangle } from "lucide-react";
import GuaranteeBadge from "@/components/GuaranteeBadge";

const CostOfWaiting = () => {
  return (
    <section className="section-spacing bg-light-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-teal text-center mb-4">
            The Cost of Waiting vs. The Peace of Mind We Deliver
          </h2>
          <p className="text-center text-lg text-text-charcoal max-w-3xl mx-auto mb-12">
            Moss actively destroys your roof. Here's what happens when you delay.
          </p>
          
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
                    src="/lovable-uploads/8cb3c10f-c05a-4727-93c9-247d82982b7a.webp"
                    alt="Damaged moss-covered roof showing years of neglect and deterioration"
                    className="w-full h-48 object-cover rounded-lg grayscale opacity-75"
                    width="400"
                    height="192"
                    loading="lazy"
                  />
                  <p className="text-sm text-gray-600 mt-2 italic">Years of moss damage and neglect</p>
                </div>
                
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-text-charcoal"><strong>Moss lifts shingles</strong> creating entry points for water damage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-text-charcoal"><strong>Trapped moisture</strong> accelerates wood rot & structural decay</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-text-charcoal"><strong>Voided warranties</strong> when maintenance is neglected</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-text-charcoal"><strong>$10,000-$30,000</strong> roof replacement vs. $499-$1,200 cleaning (most homes)</span>
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
                    src="/lovable-uploads/0189ddf5-dfd1-4746-b6b4-7b665e561954.webp"
                    alt="Clean, professionally maintained roof after expert treatment and moss removal"
                    className="w-full h-48 object-cover rounded-lg object-[center_80%]"
                    width="400"
                    height="192"
                    loading="lazy"
                  />
                  <p className="text-sm text-gray-600 mt-2 italic">Professional cleaning results that last</p>
                </div>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-bright-green mt-0.5 flex-shrink-0" />
                    <span className="text-text-charcoal">Extend your roof's lifespan <strong>10–15 years</strong> with proper moss treatment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-bright-green mt-0.5 flex-shrink-0" />
                    <span className="text-text-charcoal">Boost curb appeal - most homeowners notice the difference from the street</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-bright-green mt-0.5 flex-shrink-0" />
                    <span className="text-text-charcoal">12-month moss-free guarantee - if it grows back, we re-treat free</span>
                  </li>
                </ul>
                <GuaranteeBadge className="text-sm" />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CostOfWaiting;
