import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Droplet, Home, Car, Zap } from "lucide-react";

const StreamlinedServices = () => {
  const services = [
    {
      icon: Droplet,
      title: "Roof Cleaning",
      price: "From $500",
      description: "Our soft wash roof cleaning safely kills moss and algae using a gentle, low-pressure method that protects your shingles. We remove all loose debris, leaving your roof spotless and backed by our 12-month moss-free guarantee."
    },
    {
      icon: Droplet,
      title: "Gutter Cleaning",
      price: "From $250",
      description: "We clear all debris from your gutters and flush your downspouts to ensure proper water flow and protect your home's foundation. Every job includes completion photos so you can see the finished work."
    },
    {
      icon: Home,
      title: "House Washing",
      price: "From $500",
      description: "A complete exterior soft wash that gently cleans siding, trim, eaves, and gutters to remove algae, mildew, and organic stains. Our safe, low-pressure technique works on all materials and leaves your home looking fresh."
    },
    {
      icon: Car,
      title: "Pressure Washing",
      price: "From $250",
      description: "Revitalize your home's curb appeal with deep cleaning for driveways, patios, walkways, and other hardscapes. We remove years of built-up grime, moss, and algae to restore surfaces to like-new condition."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-teal mb-4">
            Professional Cleaning For Every Part of Your Home
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-bright-orange/50 fade-up h-full flex flex-col">
                <CardHeader className="text-center pb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-bright-orange/10 rounded-full mb-4 mx-auto group-hover:bg-bright-orange/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-bright-orange" />
                  </div>
                  <CardTitle className="text-xl font-bold text-dark-teal mb-3">
                    {service.title}
                  </CardTitle>
                  <Badge variant="secondary" className="bg-bright-orange text-white text-lg font-bold px-4 py-2 mb-3">
                    {service.price}
                  </Badge>
                </CardHeader>
                
                <CardContent className="flex-grow flex flex-col">
                  <CardDescription className="text-gray-700 leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </CardDescription>
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-dark-teal text-dark-teal hover:bg-dark-teal hover:text-white" 
                    size="sm"
                    onClick={() => {
                      window.location.href = '/pricing';
                    }}
                  >
                    See Pricing & Details
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StreamlinedServices;