import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import dylanOwnerPhoto from "@/assets/dylan-owner-patio-pressure-washing.jpg";

const AboutPreview = () => {
  return (
    <section className="section-spacing bg-brand-gray/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-6">
                Meet Dylan — Seattle ProWash Owner
              </h2>
              <div className="space-y-4 text-lg text-brand-gray-text">
                <p>
                  Seattle ProWash is owned and operated by Dylan Thornsberry, a Kenmore-based local who built this company to serve Seattle-area homeowners with honest, effective roof cleaning services.
                </p>
                <p>
                  After years of working for other pressure washing companies, Dylan knew there was a better way to serve local homeowners. So in 2022, he launched Seattle ProWash with a mission to deliver reliable, top-quality cleaning using real professional gear.
                </p>
                <p className="font-semibold text-brand-orange">
                  "I've worked on every kind of roof, siding, and driveway you can imagine. I know what works best for each property. I started Seattle ProWash to bring honest, reliable cleaning to the people in my community."
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
                    <div className="absolute bottom-4 left-4 bg-brand-blue/90 text-white px-4 py-2 rounded-lg">
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