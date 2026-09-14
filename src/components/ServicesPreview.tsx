import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import roofImage from "@/assets/roof-cleaning-before-after-new.jpg";
import roofImageMobile from "@/assets/roof-cleaning-before-after-new-mobile.webp";
import gutterImage from "@/assets/gutter-cleaning-before-after.jpg";
import gutterImageMobile from "@/assets/gutter-cleaning-before-after-mobile.webp";
import ExteriorCleaningServices from "@/components/ExteriorCleaningServices";

const services = [
  {
    name: "Roof & Gutter Cleaning Combo",
    path: "/roof-cleaning",
    image: roofImage,
    mobileImage: roofImageMobile,
    alt: "Roof before and after moss removal",
    description: "All in one: deep roof cleaning, moss removal and treatment, gutter cleanout, downspout flushing, and debris cleanup.",
    price: "Starting at $850",
    detail: "12-month moss-free guarantee",
  },
  {
    name: "Complete Gutter Cleaning",
    path: "/gutter-cleaning",
    image: gutterImage,
    mobileImage: gutterImageMobile,
    alt: "Gutters before and after debris removal",
    description: "Roof debris blown off, gutters cleared, downspouts flushed, and debris cleaned up. Moss removal and treatment are part of the roof combo, not this service.",
    price: "Starting at $350",
    detail: "Debris cleanup included",
  },
];


const ServicesPreview = () => (
  <>
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
    </div>
  </section>
  <ExteriorCleaningServices />
  </>
);

export default ServicesPreview;
