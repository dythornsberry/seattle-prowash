import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceArea {
  name: string;
  path: string;
  description?: string;
}

interface ServiceAreasSectionProps {
  title?: string;
  description?: string;
  areas: ServiceArea[];
}

const ServiceAreasSection = ({ 
  title = "Service Areas", 
  description = "Professional exterior cleaning services across the Greater Seattle area",
  areas 
}: ServiceAreasSectionProps) => {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {description}
          </p>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {areas.map((area) => (
            <Link 
              key={`${area.name}-${area.path}`} 
              to={area.path}
              className="group"
            >
              <Card className="h-full hover:shadow-lg transition-all hover:border-brand-orange/50">
                <CardContent className="p-4">
                  <p className="font-semibold text-brand-navy group-hover:text-brand-orange transition-colors">
                    {area.name}
                  </p>
                  {area.description && (
                    <p className="text-sm text-muted-foreground mt-1">
                      {area.description}
                    </p>
                  )}
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link 
            to="/service-areas" 
            className="inline-flex items-center text-brand-orange hover:underline font-semibold"
          >
            View All Service Areas →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreasSection;
