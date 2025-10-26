import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import dylanOwnerPhotoWebP from "@/assets/dylan-owner-patio-pressure-washing.webp";
import dylanOwnerPhoto from "@/assets/dylan-owner-patio-pressure-washing.jpg";
import OptimizedImage from "./OptimizedImage";

const AboutPreview = () => {
  return (
    <section className="section-spacing bg-brand-gray/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-teal mb-6">
                Your Expert Guide to a Protected Home
              </h2>
              <div className="space-y-4 text-lg text-brand-gray-text">
                <p>
                  Hi, I'm Dylan, owner of Seattle ProWash.
                </p>
                <p>
                  I started this company after working for others who cut corners. I wanted to offer something better: legit gear, honest pricing, and a crew that cares about protecting your roof and gutters. Whether we're treating moss on a steep roof or hand-cleaning clogged gutters, we treat every home like it's our own.
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
                    <OptimizedImage
                      src={dylanOwnerPhoto}
                      srcWebP={dylanOwnerPhotoWebP}
                      alt="Dylan, owner of Seattle ProWash, performing professional roof and gutter cleaning"
                      className="w-full h-[400px] object-cover"
                      width={400}
                      height={400}
                      loading="lazy"
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