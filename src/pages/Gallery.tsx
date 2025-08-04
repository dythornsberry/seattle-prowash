import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Import only confirmed existing images - using a conservative approach
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
      { src: beforeRoof1, alt: "Roof before cleaning", title: "Roof - Before Treatment" },
      { src: afterRoof1, alt: "Roof after cleaning", title: "Roof - After Treatment" },
      { src: dylanRoofWork, alt: "Dylan working on roof cleaning", title: "Dylan - Roof Specialist" }
    ],
    "House Washing": [
      { src: beforeHouse2, alt: "House before cleaning", title: "House - Before Treatment" },
      { src: afterHouse2, alt: "House after cleaning", title: "House - After Treatment" }
    ],
    "Pressure Washing": [
      { src: beforeConcrete3, alt: "Concrete surface before cleaning", title: "Concrete - Before" },
      { src: afterConcrete3, alt: "Concrete surface after cleaning", title: "Concrete - After" }
    ],
    "Team at Work": [
      { src: dylanOwnerPatioPressureWashing, alt: "Dylan owner pressure washing patio", title: "Dylan - Owner in Action" },
      { src: prowashTruck, alt: "Seattle ProWash truck", title: "Professional Equipment" },
      { src: heroCleaningService, alt: "Professional cleaning service in action", title: "Professional Service" }
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