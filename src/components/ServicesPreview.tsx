import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import roofImage from "@/assets/roof-cleaning-before-after-new.jpg";
import roofImageMobile from "@/assets/roof-cleaning-before-after-new-mobile.webp";
import gutterImage from "@/assets/gutter-cleaning-before-after.jpg";
import gutterImageMobile from "@/assets/gutter-cleaning-before-after-mobile.webp";
import pressureImage from "@/assets/driveway-surface-cleaner.jpg";
import houseImage from "@/assets/technician-house-washing-mobile.webp";
import windowImage from "@/assets/window-cleaning-action-mobile.webp";

const services = [
  {
    name: "Roof Cleaning",
    path: "/roof-cleaning",
    image: roofImage,
    mobileImage: roofImageMobile,
    alt: "Roof before and after moss removal",
    description: "Moss removal and treatment. Gutter cleaning included.",
    price: "From $499",
    detail: "12-month moss-free guarantee",
  },
  {
    name: "Gutter Cleaning",
    path: "/gutter-cleaning",
    image: gutterImage,
    mobileImage: gutterImageMobile,
    alt: "Gutters before and after debris removal",
    description: "Gutters cleared, downspouts flushed, and roof debris blown off.",
    price: "From $250",
    detail: "Debris cleanup included",
  },
];

const additionalServices = [
  {
    name: "Pressure Washing",
    path: "/pressure-washing",
    image: pressureImage,
    imagePosition: "object-[center_70%]",
    alt: "Surface cleaner washing a concrete driveway",
    description: "Concrete driveways, patios, and decks.",
  },
  {
    name: "House Soft Washing",
    path: "/house-washing",
    image: houseImage,
    imagePosition: "object-right",
    alt: "Seattle ProWash technician washing house siding",
    description: "Low-pressure cleaning for house siding.",
  },
  {
    name: "Exterior Window Cleaning",
    path: "/window-cleaning",
    image: windowImage,
    imagePosition: "object-center",
    alt: "Seattle ProWash technician cleaning the outside of a window",
    description: "Outside glass, frames, and sills.",
  },
];

const ServicesPreview = () => (
  <section className="section-spacing bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-brand-navy text-center mb-8 fade-up">
        Roof &amp; Gutter Cleaning
      </h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
        {services.map((service) => (
          <Link
            key={service.path}
            to={service.path}
            className="group flex flex-col overflow-hidden rounded-lg border border-brand-navy/15 hover:border-brand-orange hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange transition-colors"
          >
            <picture className="block aspect-[4/3] overflow-hidden bg-muted">
              <source media="(max-width: 767px)" srcSet={service.mobileImage} type="image/webp" />
              <img
                src={service.image}
                alt={service.alt}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </picture>
            <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-2xl font-bold text-brand-navy">{service.name}</h3>
                <span className="font-semibold text-brand-navy whitespace-nowrap">{service.price}</span>
              </div>
              <p className="text-muted-foreground">{service.description}</p>
              <div className="mt-auto flex items-center justify-between gap-3 text-sm font-semibold text-brand-navy">
                <span>{service.detail}</span>
                <ArrowRight className="h-5 w-5 shrink-0 text-brand-orange" aria-hidden="true" />
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="max-w-6xl mx-auto mt-8 border-t border-brand-navy/10 pt-6">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <h2 className="text-xl font-semibold text-brand-navy">More Exterior Cleaning</h2>
          <Link to="/services" className="inline-flex items-center gap-1 text-sm font-medium text-brand-navy hover:text-brand-orange">
            All services <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <nav aria-label="Other cleaning services" className="grid lg:grid-cols-3 gap-3">
          {additionalServices.map((service) => (
            <Link
              key={service.path}
              to={service.path}
              className="group flex items-center gap-3 rounded-lg border border-brand-navy/15 p-3 hover:border-brand-orange hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange transition-colors"
            >
              <img
                src={service.image}
                alt={service.alt}
                loading="lazy"
                decoding="async"
                width={80}
                height={80}
                className={`h-20 w-20 shrink-0 rounded object-cover ${service.imagePosition}`}
              />
              <div className="min-w-0 flex-1">
                <h3 className="text-base font-semibold leading-snug text-brand-navy">{service.name}</h3>
                <p className="mt-1 text-sm leading-snug text-muted-foreground">{service.description}</p>
              </div>
              <ArrowRight className="h-4 w-4 shrink-0 text-brand-orange" aria-hidden="true" />
            </Link>
          ))}
        </nav>
      </div>
    </div>
  </section>
);

export default ServicesPreview;
