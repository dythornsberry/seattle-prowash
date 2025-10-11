import { AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const MossUrgency = () => {
  return (
    <section className="section-spacing bg-brand-orange/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 fade-up">
            <div className="flex items-center justify-center gap-3 mb-4">
              <AlertTriangle className="w-8 h-8 text-brand-orange" />
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy">
                Why Act Now
              </h2>
            </div>
            <p className="text-lg text-muted-foreground">
              Moss damage compounds fast. Every season you wait increases the risk.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="fade-up border-brand-orange/20">
              <CardContent className="p-6">
                <h3 className="font-bold text-brand-navy mb-2">Lifts Shingles</h3>
                <p className="text-sm text-muted-foreground">
                  Moss roots grow under shingles, breaking the seal and creating entry points for water.
                </p>
              </CardContent>
            </Card>
            
            <Card className="fade-up border-brand-orange/20">
              <CardContent className="p-6">
                <h3 className="font-bold text-brand-navy mb-2">Traps Moisture</h3>
                <p className="text-sm text-muted-foreground">
                  Moss holds water against your roof like a sponge, accelerating decay and rot.
                </p>
              </CardContent>
            </Card>
            
            <Card className="fade-up border-brand-orange/20">
              <CardContent className="p-6">
                <h3 className="font-bold text-brand-navy mb-2">Voids Warranties</h3>
                <p className="text-sm text-muted-foreground">
                  Most roofing warranties require regular maintenance. Neglected moss can void your coverage.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MossUrgency;
