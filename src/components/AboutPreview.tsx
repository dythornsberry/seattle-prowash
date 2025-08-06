import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import dylanOwnerPhoto from "@/assets/dylan-owner-patio-pressure-washing.jpg";

const AboutPreview = () => {
  return (
    <section className="section-spacing bg-brand-gray py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-8">
                Meet Dylan — Seattle ProWash Owner
              </h2>
              <div className="space-y-6 text-lg text-brand-gray-text">
                <p>
                  I started Seattle ProWash after working for companies that rushed every job. I wanted to build something better — a team that does real, thorough work and treats homeowners with respect. We're not perfect, but we care more than anyone — and that's why our customers stick with us.
                </p>
              </div>
              
              <div className="mt-8">
                <Button 
                  variant="prowash-secondary" 
                  size="lg"
                  onClick={() => window.location.href = '/about'}
                >
                  Learn More About Our Story
                </Button>
              </div>
            </div>

            <div className="fade-up">
              <Card className="overflow-hidden shadow-2xl border-brand-orange/20">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={dylanOwnerPhoto}
                      alt="Dylan, owner of Seattle ProWash, pressure washing a patio"
                      className="w-full h-[400px] object-cover"
                    />
                    <div className="absolute bottom-4 left-4 bg-brand-yellow text-black px-4 py-2 rounded-lg">
                      <div className="font-semibold">Dylan Thornsberry</div>
                      <div className="text-sm">Owner & Operator</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;