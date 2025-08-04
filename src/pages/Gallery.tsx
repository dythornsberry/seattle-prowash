import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Import only actual pressure washing business photos
import afterConcrete3 from "@/assets/after-concrete-3.jpg";
import afterHouse2 from "@/assets/after-house-2.jpg";
import afterRoof1 from "@/assets/after-roof-1.jpg";
import beforeConcrete3 from "@/assets/before-concrete-3.jpg";
import beforeHouse2 from "@/assets/before-house-2.jpg";
import beforeRoof1 from "@/assets/before-roof-1.jpg";
import dylanOwnerPatioPressureWashing from "@/assets/dylan-owner-patio-pressure-washing.jpg";
import dylanRoofWork from "@/assets/dylan-roof-work.jpg";
import heroCleaningService from "@/assets/hero-cleaning-service.jpg";
import prowashTruck from "@/assets/prowash-truck.jpg";
import prowashTruckStreet from "@/assets/prowash-truck-street.jpg";
import prowashTruckDriveway from "@/assets/prowash-truck-driveway.jpg";
import technicianTruckPortrait from "@/assets/technician-truck-portrait.jpg";
import technicianHoldingLadder from "@/assets/technician-holding-ladder.jpg";
import technicianMovingLadder from "@/assets/technician-moving-ladder.jpg";
import truckAtJobsite from "@/assets/truck-at-jobsite.jpg";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Roof Cleaning", 
    "House Washing",
    "Pressure Washing",
    "Team at Work"
  ];

  const galleryImages = {
    "Roof Cleaning": [
      { src: beforeRoof1, alt: "Moss-covered roof before professional cleaning", title: "Roof Before - Moss Removal Needed" },
      { src: afterRoof1, alt: "Clean, moss-free roof after Seattle ProWash treatment", title: "Roof After - Moss-Free & Protected" },
      { src: dylanRoofWork, alt: "Dylan working on roof cleaning project", title: "Dylan - Roof Cleaning Specialist" }
    ],
    "House Washing": [
      { src: beforeHouse2, alt: "Dirty house siding with algae and mildew", title: "House Before - Algae & Mildew Buildup" },
      { src: afterHouse2, alt: "Clean, bright house exterior after soft washing", title: "House After - Soft Wash Restoration" },
      { src: heroCleaningService, alt: "Professional house cleaning service in progress", title: "Professional House Washing" }
    ],
    "Pressure Washing": [
      { src: beforeConcrete3, alt: "Dirty concrete driveway before pressure washing", title: "Concrete Before - Stained & Dirty" },
      { src: afterConcrete3, alt: "Clean concrete surface after pressure washing", title: "Concrete After - Pressure Washed Clean" },
      { src: dylanOwnerPatioPressureWashing, alt: "Dylan pressure washing patio surface", title: "Professional Pressure Washing" }
    ],
    "Team at Work": [
      { src: prowashTruck, alt: "Seattle ProWash professional equipment truck", title: "Professional Equipment" },
      { src: prowashTruckStreet, alt: "ProWash truck on service call", title: "On-Site Service" },
      { src: prowashTruckDriveway, alt: "ProWash truck at residential job", title: "Residential Service" },
      { src: technicianTruckPortrait, alt: "Professional technician with equipment", title: "Professional Team" },
      { src: technicianHoldingLadder, alt: "Technician preparing equipment", title: "Equipment Setup" },
      { src: technicianMovingLadder, alt: "Technician moving ladder for roof access", title: "Safety First" },
      { src: truckAtJobsite, alt: "ProWash truck at residential jobsite", title: "Jobsite Setup" }
    ]
  };

  const getFilteredImages = () => {
    if (activeCategory === "All") {
      return Object.values(galleryImages).flat();
    }
    return galleryImages[activeCategory] || [];
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="section-spacing bg-gradient-to-b from-brand-navy to-brand-navy/90">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-brand-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-brand-white">
                Our Work Gallery
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                See the incredible transformations we've achieved for Pacific Northwest property owners.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Categories */}
        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "prowash-primary" : "outline"}
                  onClick={() => setActiveCategory(category)}
                  className="transition-all duration-300"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="section-spacing">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
                {activeCategory === "All" ? "All Projects" : activeCategory}
              </h2>
              <p className="text-xl text-muted-foreground">
                Professional cleaning results that speak for themselves
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {getFilteredImages().map((image, index) => (
                <div
                  key={index}
                  className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-brand-white font-semibold text-lg mb-2">
                        {image.title}
                      </h3>
                      <Badge variant="secondary" className="bg-brand-yellow text-brand-navy">
                        {activeCategory === "All" ? 
                          Object.keys(galleryImages).find(cat => 
                            galleryImages[cat].includes(image)
                          ) : activeCategory
                        }
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {getFilteredImages().length === 0 && (
              <div className="text-center py-16">
                <p className="text-xl text-muted-foreground">
                  No images found for this category.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-spacing bg-brand-navy">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-brand-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready for Your Transformation?
              </h2>
              <p className="text-xl mb-8 text-brand-white/90">
                Let us restore your property to its best condition with our professional cleaning services.
              </p>
              <Button variant="prowash-secondary" size="xl">
                Get Your Free Quote Today
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;