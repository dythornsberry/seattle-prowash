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
  return (
    <section className="border-t bg-white py-12">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <h2 className="text-2xl text-foreground md:text-3xl">{title}</h2>
            <p className="mt-3 text-muted-foreground">{description}</p>
          </div>
          <Link to="/service-areas" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-brand-navy">All Service Areas <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
        </div>
        <nav aria-label="Local service areas" className="mt-6 grid grid-cols-2 gap-x-5 sm:grid-cols-3 lg:grid-cols-6">
          {areas.map((area) => (
            <Link key={area.path} to={area.path} className="flex min-h-12 items-center gap-2 text-sm font-medium text-brand-navy"><MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />{area.name}</Link>
          ))}
        </nav>
      </div>
    </section>
  );
};

export default ServiceAreasSection;
