import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const GutterAddonSection = () => {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto border-2 border-brand-orange/20">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl md:text-3xl font-bold text-brand-blue mb-2">
              Gutter Cleaning (Add-On Service)
            </CardTitle>
            <CardDescription className="text-lg">
              Protect your investment with professional gutter maintenance
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                  <p className="text-sm">Hand scoop and vacuum debris removal</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                  <p className="text-sm">Downspout flush and function test</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                  <p className="text-sm">Completion photos sent to you</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                  <p className="text-sm">Optional gutter brightening available</p>
                </div>
              </div>
            </div>
            
            <div className="text-center pt-4">
              <p className="text-sm text-muted-foreground mb-4">
                Save money when bundled with roof cleaning services
              </p>
              <Link to="/gutter-cleaning">
                <Button variant="prowash-secondary" className="group">
                  Learn More About Gutter Cleaning
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default GutterAddonSection;
