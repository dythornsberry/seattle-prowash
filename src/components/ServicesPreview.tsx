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
    description: "Deep roof cleaning, moss removal & treatment, plus complete gutter cleaning.",
    inclusions: ["Gutter cleanout & downspout flushing", "Debris cleanup", "12-month moss-free guarantee"],
    price: "Starting at $850",
    detail: "12-month moss-free guarantee",
  },
  {
    name: "Complete Gutter Cleaning",
    path: "/gutter-cleaning",
    image: gutterImage,
    mobileImage: gutterImageMobile,
    alt: "Gutters before and after debris removal",
    description: "Roof debris blow-off, gutter cleanout, and downspout flushing.",
    inclusions: ["Debris cleanup included", "Moss removal & treatment are in the roof combo"],
    price: "Starting at $350",
    detail: "Debris cleanup included",
  },
];


const ServicesPreview = () => (
  <>
  <section className="section-spacing bg-white pb-0 md:pb-0 lg:pb-0">
    <div className="mx-auto max-w-6xl px-5">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
        Roof &amp; Gutter Cleaning
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service) => (
          <Link
            key={service.path}
            to={service.path}
            className="group flex flex-col hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange rounded-lg"
          >
            <picture className="block aspect-[4/3] overflow-hidden rounded-lg bg-muted">
              <source media="(max-width: 767px)" srcSet={service.mobileImage} type="image/webp" />
              <img
                src={service.image}
                alt={service.alt}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </picture>
            <div className="flex flex-1 flex-col gap-3 pt-5">
              <div>
                <h3 className="text-xl font-semibold text-foreground sm:text-2xl">{service.name}</h3>
                <span className="mt-2 block font-semibold text-brand-navy">{service.price}</span>
              </div>
              <p className="text-muted-foreground">{service.description}</p>
              <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">{service.inclusions.map((item) => <li key={item}>{item}</li>)}</ul>
              <div className="mt-auto flex items-center justify-between gap-3 text-sm font-semibold text-brand-navy">
                <span className="pt-3">Service details</span>
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
