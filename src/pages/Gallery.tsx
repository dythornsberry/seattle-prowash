import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Expand, X } from "lucide-react";

// Import only actual pressure washing business photos that exist
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
import asphaltRoofBefore from "@/assets/asphalt-roof-moss-cleaning-before-after.jpg";
import gutterBefore from "@/assets/gutter-cleaning-before-after.jpg";
import metalRoofBefore from "@/assets/metal-roof-cleaning-before-after.jpg";
import patioBefore from "@/assets/patio-pressure-washing-before-after.jpg";
import houseBefore from "@/assets/house-wash-exterior-before-after.jpg";
import drivewayBefore from "@/assets/driveway-moss-cleaning-before-after.jpg";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    "All",
    "Roof Cleaning", 
    "House Washing",
    "Gutter Cleaning",
    "Pressure Washing",
    "Team at Work"
  ];

  const galleryImages = {
    "Roof Cleaning": [
      { 
        src: asphaltRoofBefore, 
        alt: "Roof moss removal before and after in Seattle", 
        title: "Roof Moss Removal", 
        location: "Seattle", 
        description: "Roof soft wash in Seattle – moss removal before and after",
        service: "Roof Cleaning"
      },
      { 
        src: metalRoofBefore, 
        alt: "Metal roof cleaning transformation in Bellevue", 
        title: "Metal Roof Restoration", 
        location: "Bellevue", 
        description: "Metal roof soft wash in Bellevue – before and after treatment",
        service: "Roof Cleaning"
      },
      { 
        src: dylanRoofWork, 
        alt: "Dylan working on roof cleaning project", 
        title: "Dylan - Roof Cleaning Specialist", 
        location: "Kirkland", 
        description: "Professional roof cleaning specialist at work",
        service: "Roof Cleaning"
      },
      { 
        src: "/lovable-uploads/e74889d8-949e-43d7-8979-5150f13e7df4.png", 
        alt: "Metal roof moss removal and cleaning transformation", 
        title: "Metal Roof Moss Removal", 
        location: "Seattle Area", 
        description: "Complete metal roof restoration - moss removal and soft wash cleaning before and after",
        service: "Roof Cleaning"
      },
      { 
        src: "/lovable-uploads/39ad7527-e74d-4532-a64b-0365b83aee6b.png", 
        alt: "Metal roof and skylight cleaning before and after", 
        title: "Metal Roof & Skylight Cleaning", 
        location: "Seattle Area", 
        description: "Professional metal roof soft wash with skylight cleaning - complete restoration",
        service: "Roof Cleaning"
      }
    ],
    "House Washing": [
      { 
        src: houseBefore, 
        alt: "House exterior cleaning before and after in Kenmore", 
        title: "House Exterior Soft Wash", 
        location: "Kenmore", 
        description: "House washing in Kenmore – soft wash exterior cleaning before and after",
        service: "House Washing"
      }
    ],
    "Gutter Cleaning": [
      { 
        src: gutterBefore, 
        alt: "Gutter cleaning and brightening service in Bothell", 
        title: "Gutter Cleaning & Brightening", 
        location: "Bothell", 
        description: "Gutter cleaning in Bothell – full cleanout and brightening service",
        service: "Gutter Cleaning"
      }
    ],
    "Pressure Washing": [
      { 
        src: patioBefore, 
        alt: "Patio pressure washing transformation in Seattle", 
        title: "Patio Pressure Washing", 
        location: "Seattle", 
        description: "Pressure washing in Seattle – patio restoration before and after",
        service: "Pressure Washing"
      },
      { 
        src: drivewayBefore, 
        alt: "Driveway moss removal and cleaning in Kirkland", 
        title: "Driveway Moss Removal", 
        location: "Kirkland", 
        description: "Pressure washing in Kirkland – driveway moss removal and cleaning",
        service: "Pressure Washing"
      },
      { 
        src: dylanOwnerPatioPressureWashing, 
        alt: "Dylan pressure washing patio surface", 
        title: "Professional Pressure Washing", 
        location: "Bellevue", 
        description: "Professional pressure washing service in action",
        service: "Pressure Washing"
      },
      { 
        src: "/lovable-uploads/b629f07e-3990-42a8-920f-554f60488376.png", 
        alt: "Second story patio pressure washing before and after transformation", 
        title: "2nd Story Patio Restoration", 
        location: "Seattle Area", 
        description: "Dramatic transformation of 2nd story concrete patio - before and after pressure washing",
        service: "Pressure Washing"
      }
    ],
    "Team at Work": [
      { 
        src: prowashTruck, 
        alt: "Seattle ProWash professional equipment truck", 
        title: "Professional Equipment", 
        location: "Seattle Area", 
        description: "Seattle ProWash professional equipment and truck",
        service: "Equipment"
      },
      { 
        src: prowashTruckStreet, 
        alt: "ProWash truck on service call", 
        title: "On-Site Service", 
        location: "Service Area", 
        description: "Professional service calls throughout the Seattle area",
        service: "Service"
      },
      { 
        src: prowashTruckDriveway, 
        alt: "ProWash truck at residential job", 
        title: "Residential Service", 
        location: "Residential", 
        description: "Professional residential cleaning services",
        service: "Service"
      },
      { 
        src: technicianTruckPortrait, 
        alt: "Professional technician with equipment", 
        title: "Professional Team", 
        location: "Seattle Area", 
        description: "Experienced and professional cleaning technicians",
        service: "Team"
      },
      { 
        src: technicianHoldingLadder, 
        alt: "Technician preparing equipment", 
        title: "Equipment Setup", 
        location: "On Site", 
        description: "Professional equipment preparation and safety procedures",
        service: "Equipment"
      },
      { 
        src: technicianMovingLadder, 
        alt: "Technician moving ladder for roof access", 
        title: "Safety First", 
        location: "On Site", 
        description: "Safety-first approach to all roof and exterior cleaning",
        service: "Safety"
      },
      { 
        src: truckAtJobsite, 
        alt: "ProWash truck at residential jobsite", 
        title: "Jobsite Setup", 
        location: "Residential", 
        description: "Professional jobsite setup and service delivery",
        service: "Service"
      },
      { 
        src: "/lovable-uploads/69a00574-1236-42ac-8dad-f347524ce62e.png", 
        alt: "Team performing 3-story townhome soft wash with professional equipment", 
        title: "3-Story Townhome Soft Wash", 
        location: "Seattle Area", 
        description: "Professional team and equipment setup for multi-story townhome soft washing project",
        service: "House Washing"
      }
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
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Before & After: Real Exterior Cleaning Results
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                Authentic transformations from your neighbors across Kenmore, Bothell, and Kirkland. No stock photos—just real Seattle ProWash results.
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
                  className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute top-4 right-4">
                      <Expand className="w-6 h-6 text-white drop-shadow-lg" />
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-brand-white font-semibold text-lg mb-2">
                        {image.title}
                      </h3>
                      <p className="text-white/90 text-sm mb-3">
                        {image.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="bg-brand-yellow text-brand-navy text-xs">
                          {image.location}
                        </Badge>
                        <Badge variant="outline" className="border-white text-white text-xs">
                          {activeCategory === "All" ? 
                            Object.keys(galleryImages).find(cat => 
                              galleryImages[cat].includes(image)
                            ) : activeCategory
                          }
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust message */}
            <div className="text-center mt-12 px-4">
              <div className="inline-flex items-center gap-2 bg-brand-orange/10 text-brand-navy px-4 py-2 rounded-full text-sm font-medium">
                ✓ All photos are real Seattle ProWash jobs • No stock images
              </div>
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
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Ready for Your Transformation?
              </h2>
              <p className="text-xl mb-8 text-white/90">
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

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl max-h-[90vh] w-full">
            <img
              src={selectedImage}
              alt="Expanded gallery view"
              className="w-full h-full object-contain rounded-lg"
            />
            <Button
              variant="outline"
              size="icon"
              className="absolute top-4 right-4 bg-white/90 hover:bg-white"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X className="w-5 h-5" />
            </Button>
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <p className="text-white text-sm bg-black/50 px-3 py-1 rounded-full inline-block">
                Click anywhere to close
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;