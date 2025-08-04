import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Import only existing images
import afterConcrete3 from "@/assets/after-concrete-3.jpg";
import afterHouse2 from "@/assets/after-house-2.jpg";
import afterRoof1 from "@/assets/after-roof-1.jpg";
import asphaltRoofMossCleaningBeforeAfter from "@/assets/asphalt-roof-moss-cleaning-before-after.jpg";
import beforeConcrete3 from "@/assets/before-concrete-3.jpg";
import beforeHouse2 from "@/assets/before-house-2.jpg";
import beforeRoof1 from "@/assets/before-roof-1.jpg";
import commercialBuildingWashing from "@/assets/commercial-building-washing.jpg";
import commercialEntranceAfter from "@/assets/commercial-entrance-after.jpg";
import commercialEntranceBefore from "@/assets/commercial-entrance-before.jpg";
import concreteStairsBeforeAfter from "@/assets/concrete-stairs-before-after.jpg";
import concreteStepsMossRemoval from "@/assets/concrete-steps-moss-removal.jpg";
import coveredDrivewayAfter from "@/assets/covered-driveway-after.jpg";
import coveredDrivewayBefore from "@/assets/covered-driveway-before.jpg";
import decraRoofCleaningAfter from "@/assets/decra-roof-cleaning-after.jpg";
import decraRoofCleaningBefore from "@/assets/decra-roof-cleaning-before.jpg";
import drivewayMossCleaningBeforeAfter from "@/assets/driveway-moss-cleaning-before-after.jpg";
import drivewayPressureWashing from "@/assets/driveway-pressure-washing.jpg";
import drivaySurfaceCleaner from "@/assets/driveway-surface-cleaner.jpg";
import dylanOwnerPatioPressureWashing from "@/assets/dylan-owner-patio-pressure-washing.jpg";
import dylanRoofWork from "@/assets/dylan-roof-work.jpg";
import gutterBrighteningBeforeAfter from "@/assets/gutter-brightening-before-after.jpg";
import gutterCleaningBeforeAfter from "@/assets/gutter-cleaning-before-after.jpg";
import houseSidingSoftwashBeforeAfter from "@/assets/house-siding-softwash-before-after.jpg";
import houseSoftwashBeforeAfter from "@/assets/house-softwash-before-after.jpg";
import houseWashExteriorBeforeAfter from "@/assets/house-wash-exterior-before-after.jpg";
import houseWashSidingBeforeAfter from "@/assets/house-wash-siding-before-after.jpg";
import metalRoofCleaningAfter from "@/assets/metal-roof-cleaning-after.jpg";
import metalRoofCleaningBefore from "@/assets/metal-roof-cleaning-before.jpg";
import metalRoofCleaningBeforeAfter from "@/assets/metal-roof-cleaning-before-after.jpg";
import modernPatioPressureWashingAfter from "@/assets/modern-patio-pressure-washing-after.jpg";
import modernPatioPressureWashingBefore from "@/assets/modern-patio-pressure-washing-before.jpg";
import patioPressureWashingAfter from "@/assets/patio-pressure-washing-after.jpg";
import patioPressureWashingBefore from "@/assets/patio-pressure-washing-before.jpg";
import patioPressureWashingBeforeAfter from "@/assets/patio-pressure-washing-before-after.jpg";
import paverDrivewayCleaningAfter from "@/assets/paver-driveway-cleaning-after.jpg";
import paverDrivewayCleaningBefore from "@/assets/paver-driveway-cleaning-before.jpg";
import plasticAwningCleaningAfter from "@/assets/plastic-awning-cleaning-after.jpg";
import plasticAwningCleaningBefore from "@/assets/plastic-awning-cleaning-before.jpg";
import pressureWashingProgress from "@/assets/pressure-washing-progress.jpg";
import prowashTruck from "@/assets/prowash-truck.jpg";
import prowashTruckDriveway from "@/assets/prowash-truck-driveway.jpg";
import prowashTruckStreet from "@/assets/prowash-truck-street.jpg";
import retainingWallPressureWash from "@/assets/retaining-wall-pressure-wash.jpg";
import roofMossMoldMildewRemovalBeforeAfter from "@/assets/roof-moss-mold-mildew-removal-before-after.jpg";
import roofSoftwashBeforeAfter from "@/assets/roof-softwash-before-after.jpg";
import roofSoftwashInProgress from "@/assets/roof-softwash-in-progress.jpg";
import roofSoftwashProgress2 from "@/assets/roof-softwash-progress-2.jpg";
import technicianApartmentSoftwash from "@/assets/technician-apartment-softwash.jpg";
import technicianHoldingLadder from "@/assets/technician-holding-ladder.jpg";
import technicianHousWashing from "@/assets/technician-house-washing.jpg";
import technicianMovingLadder from "@/assets/technician-moving-ladder.jpg";
import technicianSurfaceCleaning from "@/assets/technician-surface-cleaning.jpg";
import technicianTruckPortrait from "@/assets/technician-truck-portrait.jpg";
import truckAtJobsite from "@/assets/truck-at-jobsite.jpg";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Roof Cleaning", 
    "House Washing",
    "Pressure Washing",
    "Commercial",
    "Team at Work"
  ];

  const galleryImages = {
    "Roof Cleaning": [
      { src: asphaltRoofMossCleaningBeforeAfter, alt: "Asphalt roof moss cleaning before and after", title: "Asphalt Roof Moss Treatment" },
      { src: roofMossMoldMildewRemovalBeforeAfter, alt: "Roof moss mold and mildew removal before and after", title: "Moss, Mold & Mildew Removal" },
      { src: roofSoftwashBeforeAfter, alt: "Roof soft wash before and after transformation", title: "Soft Wash Roof Cleaning" },
      { src: metalRoofCleaningBeforeAfter, alt: "Metal roof cleaning before and after", title: "Metal Roof Restoration" },
      { src: decraRoofCleaningBefore, alt: "Decra roof before cleaning", title: "Decra Roof - Before" },
      { src: decraRoofCleaningAfter, alt: "Decra roof after cleaning", title: "Decra Roof - After" },
      { src: metalRoofCleaningBefore, alt: "Metal roof before cleaning", title: "Metal Roof - Before" },
      { src: metalRoofCleaningAfter, alt: "Metal roof after cleaning", title: "Metal Roof - After" },
      { src: beforeRoof1, alt: "Roof before cleaning", title: "Roof - Before Treatment" },
      { src: afterRoof1, alt: "Roof after cleaning", title: "Roof - After Treatment" },
      { src: roofSoftwashInProgress, alt: "Roof soft wash cleaning in progress", title: "Soft Wash in Progress" },
      { src: roofSoftwashProgress2, alt: "Roof soft wash progress photo", title: "Professional Roof Treatment" }
    ],
    "House Washing": [
      { src: houseSoftwashBeforeAfter, alt: "House soft wash before and after", title: "Complete House Soft Wash" },
      { src: houseWashExteriorBeforeAfter, alt: "House exterior wash before and after", title: "Exterior House Cleaning" },
      { src: houseWashSidingBeforeAfter, alt: "House siding wash before and after", title: "Siding Restoration" },
      { src: houseSidingSoftwashBeforeAfter, alt: "House siding soft wash before and after", title: "Gentle Siding Treatment" },
      { src: beforeHouse2, alt: "House before cleaning", title: "House - Before Treatment" },
      { src: afterHouse2, alt: "House after cleaning", title: "House - After Treatment" },
      { src: gutterCleaningBeforeAfter, alt: "Gutter cleaning before and after", title: "Gutter Cleaning Service" },
      { src: gutterBrighteningBeforeAfter, alt: "Gutter brightening before and after", title: "Gutter Brightening" },
      { src: plasticAwningCleaningBefore, alt: "Plastic awning before cleaning", title: "Awning - Before" },
      { src: plasticAwningCleaningAfter, alt: "Plastic awning after cleaning", title: "Awning - After" }
    ],
    "Pressure Washing": [
      { src: patioPressureWashingBeforeAfter, alt: "Patio pressure washing before and after", title: "Patio Transformation" },
      { src: modernPatioPressureWashingBefore, alt: "Modern patio before pressure washing", title: "Modern Patio - Before" },
      { src: modernPatioPressureWashingAfter, alt: "Modern patio after pressure washing", title: "Modern Patio - After" },
      { src: patioPressureWashingBefore, alt: "Patio before pressure washing", title: "Patio - Before" },
      { src: patioPressureWashingAfter, alt: "Patio after pressure washing", title: "Patio - After" },
      { src: concreteStairsBeforeAfter, alt: "Concrete stairs before and after pressure washing", title: "Concrete Stairs Cleaning" },
      { src: concreteStepsMossRemoval, alt: "Concrete steps moss removal", title: "Moss Removal from Steps" },
      { src: beforeConcrete3, alt: "Concrete surface before cleaning", title: "Concrete - Before" },
      { src: afterConcrete3, alt: "Concrete surface after cleaning", title: "Concrete - After" },
      { src: drivewayMossCleaningBeforeAfter, alt: "Driveway moss cleaning before and after", title: "Driveway Moss Treatment" },
      { src: drivewayPressureWashing, alt: "Driveway pressure washing in action", title: "Driveway Cleaning Process" },
      { src: drivaySurfaceCleaner, alt: "Driveway surface cleaner equipment", title: "Professional Surface Cleaning" },
      { src: paverDrivewayCleaningBefore, alt: "Paver driveway before cleaning", title: "Paver Driveway - Before" },
      { src: paverDrivewayCleaningAfter, alt: "Paver driveway after cleaning", title: "Paver Driveway - After" },
      { src: coveredDrivewayBefore, alt: "Covered driveway before cleaning", title: "Covered Driveway - Before" },
      { src: coveredDrivewayAfter, alt: "Covered driveway after cleaning", title: "Covered Driveway - After" },
      { src: retainingWallPressureWash, alt: "Retaining wall pressure washing", title: "Retaining Wall Cleaning" },
      { src: pressureWashingProgress, alt: "Pressure washing work in progress", title: "Cleaning in Progress" }
    ],
    "Commercial": [
      { src: commercialBuildingWashing, alt: "Commercial building washing", title: "Commercial Building Cleaning" },
      { src: commercialEntranceBefore, alt: "Commercial entrance before cleaning", title: "Commercial Entrance - Before" },
      { src: commercialEntranceAfter, alt: "Commercial entrance after cleaning", title: "Commercial Entrance - After" }
    ],
    "Team at Work": [
      { src: dylanOwnerPatioPressureWashing, alt: "Dylan owner pressure washing patio", title: "Dylan - Owner in Action" },
      { src: dylanRoofWork, alt: "Dylan working on roof cleaning", title: "Dylan - Roof Specialist" },
      { src: technicianHousWashing, alt: "Technician house washing", title: "Professional House Washing" },
      { src: technicianTruckPortrait, alt: "Technician with truck portrait", title: "Team Member Portrait" },
      { src: technicianHoldingLadder, alt: "Technician holding ladder", title: "Professional Equipment Setup" },
      { src: technicianMovingLadder, alt: "Technician moving ladder", title: "Team in Action" },
      { src: technicianSurfaceCleaning, alt: "Technician surface cleaning", title: "Surface Cleaning Expert" },
      { src: technicianApartmentSoftwash, alt: "Technician apartment soft wash", title: "Apartment Soft Washing" },
      { src: prowashTruck, alt: "Seattle ProWash truck", title: "Professional Equipment" },
      { src: prowashTruckStreet, alt: "ProWash truck on street", title: "Mobile Service" },
      { src: prowashTruckDriveway, alt: "ProWash truck in driveway", title: "On-Site Service" },
      { src: truckAtJobsite, alt: "Truck at job site", title: "Ready for Work" }
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
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