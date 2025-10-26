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
                Don't Wait Until Moss Damages Your Roof
              </h2>
            </div>
            <p className="text-lg text-muted-foreground">
              Each season of delay increases damage and repair costs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="fade-up border-brand-orange/20">
              <CardContent className="p-6">
                <h3 className="font-bold text-brand-navy text-lg mb-2">Lifts Shingles → Prevents Leaks</h3>
                <p className="text-sm text-muted-foreground">
                  Moss roots break the seal and create water entry points.
                </p>
              </CardContent>
            </Card>
            
            <Card className="fade-up border-brand-orange/20">
              <CardContent className="p-6">
                <h3 className="font-bold text-brand-navy text-lg mb-2">Traps Moisture → Stops Rot</h3>
                <p className="text-sm text-muted-foreground">
                  Moss holds water like a sponge, accelerating decay.
                </p>
              </CardContent>
            </Card>
            
            <Card className="fade-up border-brand-orange/20">
              <CardContent className="p-6">
                <h3 className="font-bold text-brand-navy text-lg mb-2">Voids Warranties → Protects Home Value</h3>
                <p className="text-sm text-muted-foreground">
                  Neglected moss can void roofing warranty coverage.
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
