import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import houseImage from "@/assets/house-wash-before-after-2026.jpg";
import concreteImage from "@/assets/patio-pressure-wash-before-after-2026.jpg";
import deckImage from "@/assets/deck-cleaning-before-after-2026.jpg";

const services = [
  { name: "House Soft Washing", description: "Low-pressure cleaning for siding, trim, and soffits.", image: houseImage, alt: "House siding before and after soft washing", href: "/pressure-washing#house-soft-washing" },
  { name: "Pressure Washing", description: "Concrete driveways, patios, and walkways.", image: concreteImage, alt: "Patio before and after pressure washing", href: "/pressure-washing" },
  { name: "Deck Cleaning", description: "Wood and composite decks, cleaned for the surface.", image: deckImage, alt: "Wood deck before and after cleaning", href: "/pressure-washing#deck-cleaning" },
];

const ExteriorCleaningServices = () => (
  <section className="py-12 md:py-16 bg-white">
    <div className="container mx-auto px-4 max-w-6xl">
      <h2 className="text-3xl font-bold text-brand-navy mb-8">House, Concrete &amp; Deck Cleaning</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service) => (
          <Link key={service.name} to={service.href} className="group hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange rounded-lg">
            <img src={service.image} alt={service.alt} loading="lazy" className="w-full aspect-[4/3] object-cover rounded-lg" />
            <h3 className="flex items-start justify-between gap-3 mt-4 text-xl font-bold text-brand-navy">
              {service.name}<ArrowRight className="w-5 h-5 shrink-0 mt-1 text-brand-orange" aria-hidden="true" />
            </h3>
            <p className="mt-2 text-muted-foreground">{service.description}</p>
          </Link>
        ))}
      </div>
      <p className="text-sm text-muted-foreground mt-6">We also offer <Link className="underline underline-offset-4" to="/window-cleaning">exterior window cleaning</Link>.</p>
    </div>
  </section>
);

export default ExteriorCleaningServices;
