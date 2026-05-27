import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";

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
  // Featured cities get larger cards; rest are compact chips
  const featuredNames = new Set(["Kenmore", "Bellevue", "Seattle"]);
  const featured = areas.filter((a) => featuredNames.has(a.name));
  const rest = areas.filter((a) => !featuredNames.has(a.name));

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

        <div className="max-w-5xl mx-auto">
          {/* Featured cities */}
          {featured.length > 0 && (
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              {featured.map((area) => (
                <Link
                  key={`${area.name}-${area.path}`}
                  to={area.path}
                  className="group bg-white border border-brand-navy/10 hover:border-brand-orange rounded-xl p-5 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin className="w-5 h-5 text-brand-orange" />
                    <p className="font-bold text-lg text-brand-navy group-hover:text-brand-orange transition-colors">
                      {area.name}
                    </p>
                  </div>
                  {area.description && (
                    <p className="text-sm text-muted-foreground">
                      {area.description}
                    </p>
                  )}
                </Link>
              ))}
            </div>
          )}

          {/* Other cities as compact chips */}
          {rest.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2">
              {rest.map((area) => (
                <Link
                  key={`${area.name}-${area.path}`}
                  to={area.path}
                  className="inline-flex items-center gap-1.5 bg-white border border-brand-navy/10 hover:border-brand-orange hover:bg-brand-orange/5 text-brand-navy hover:text-brand-orange font-medium text-sm px-4 py-2 rounded-full transition-all"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  {area.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/service-areas"
            className="inline-flex items-center gap-1 text-brand-orange hover:underline font-semibold"
          >
            View All Service Areas <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreasSection;
