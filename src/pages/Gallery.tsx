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
    "Commercial",
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
      },
      { 
        src: "/lovable-uploads/380b267e-dbb4-4a71-8ac9-2bba6d28b15c.png", 
        alt: "Metal roof cleaning before and after with visible cleaning process", 
        title: "Metal Roof Deep Cleaning", 
        location: "Seattle Area", 
        description: "Intensive metal roof cleaning showing the cleaning process and dramatic results - before and after",
        service: "Roof Cleaning"
      },
      { 
        src: "/lovable-uploads/7cdfb095-76e6-4419-b395-a8272819a23b.png", 
        alt: "Asphalt roof heavily covered in moss and debris before professional cleaning", 
        title: "Asphalt Roof Moss Removal - Before", 
        location: "Seattle, WA", 
        description: "Severely moss-covered asphalt roof with debris accumulation requiring professional soft wash treatment",
        service: "Roof Cleaning"
      },
      { 
        src: "/lovable-uploads/cd85dd92-8acb-405d-a73c-44650e962bd8.png", 
        alt: "Clean asphalt roof after professional moss removal and soft wash treatment", 
        title: "Asphalt Roof Moss Removal - After", 
        location: "Seattle, WA", 
        description: "Dramatic transformation of asphalt roof after professional moss removal and soft wash cleaning",
        service: "Roof Cleaning"
      },
      { 
        src: "/lovable-uploads/64d9c018-2edd-4f52-a9c8-26f38eacb1ab.png", 
        alt: "Asphalt roof debris removal before and after - moss and debris cleaning", 
        title: "Roof Debris Removal Transformation", 
        location: "Seattle Area", 
        description: "Professional asphalt roof cleaning - complete debris and moss removal before and after treatment",
        service: "Roof Cleaning"
      },
      { 
        src: "/lovable-uploads/d860338a-0f08-4e00-9f5a-6de054035c8f.png", 
        alt: "Asphalt roof soft wash before and after cleaning showing dramatic improvement", 
        title: "Asphalt Roof Deep Cleaning", 
        location: "Seattle Area", 
        description: "Comprehensive asphalt roof soft wash treatment - removing years of moss, debris, and organic buildup",
        service: "Roof Cleaning"
      },
      { 
        src: "/lovable-uploads/61baa673-a9e7-4e3c-a983-cc33629610c0.png", 
        alt: "Professional team performing asphalt roof soft wash treatment", 
        title: "Roof Soft Wash in Progress", 
        location: "Seattle Area", 
        description: "Professional team member applying soft wash treatment to asphalt roof - showing the cleaning process in action",
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
      },
      { 
        src: "/lovable-uploads/a1418643-21de-4dd3-a77d-eebe9209eaef.png", 
        alt: "House siding soft wash before and after showing dramatic cleaning results", 
        title: "Siding Soft Wash Transformation", 
        location: "Seattle Area", 
        description: "Professional house siding soft wash - removing dirt, algae, and staining to restore clean appearance",
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
      },
      { 
        src: "/lovable-uploads/26d7c8d9-d5dc-42b1-ac63-62630e258539.png", 
        alt: "Gutter cleaning before and after showing debris removal", 
        title: "Complete Gutter Cleanout", 
        location: "Seattle Area", 
        description: "Professional gutter cleaning service - removing debris, leaves, and buildup for proper water flow",
        service: "Gutter Cleaning"
      },
      { 
        src: "/lovable-uploads/b2ed7767-a921-4d56-8dfb-1c942c3daaa7.png", 
        alt: "Gutter cleaning before and after showing debris removal and restoration", 
        title: "Complete Gutter System Cleaning", 
        location: "Seattle Area", 
        description: "Professional gutter cleaning transformation - removing organic buildup, debris, and restoring proper water flow",
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
      },
      { 
        src: "/lovable-uploads/d07dd994-a56c-4706-8503-37b4bdde1119.png", 
        alt: "Vinyl fence pressure washing before and after cleaning", 
        title: "Vinyl Fence Restoration", 
        location: "Seattle Area", 
        description: "Professional vinyl fence pressure washing - removing dirt, moss, and stains to restore like-new appearance",
        service: "Pressure Washing"
      },
      { 
        src: "/lovable-uploads/405b2518-e88f-4784-9f29-4abab64c56e4.png", 
        alt: "Concrete staircase pressure washing dramatic before and after transformation", 
        title: "Concrete Staircase Restoration", 
        location: "Seattle, WA", 
        description: "Incredible transformation of heavily soiled concrete stairs - professional pressure washing removes years of buildup",
        service: "Pressure Washing"
      },
      { 
        src: "/lovable-uploads/6792eaac-aa82-4a1d-bbea-f66f775c2275.png", 
        alt: "Retaining wall and brick walkway pressure washing before and after transformation", 
        title: "Retaining Wall & Brick Restoration", 
        location: "Seattle, WA", 
        description: "Amazing transformation of moss-covered retaining wall and brick walkway - professional pressure washing restoration",
        service: "Pressure Washing"
      },
      { 
        src: "/lovable-uploads/30f25fb0-b625-4f3e-8328-3084ca71c36b.png", 
        alt: "Heavily soiled concrete patio before cleaning showing extreme moss and dirt buildup", 
        title: "Extreme Concrete Patio Restoration - Before", 
        location: "Lake Forest Park", 
        description: "Severely neglected concrete patio with heavy moss, algae, and dirt accumulation requiring intensive pressure washing",
        service: "Pressure Washing"
      },
      { 
        src: "/lovable-uploads/0d94bc5e-3592-4aa4-877a-d124110a3d0e.png", 
        alt: "Concrete patio after professional pressure washing showing dramatic transformation", 
        title: "Extreme Concrete Patio Restoration - After", 
        location: "Lake Forest Park", 
        description: "Incredible transformation of concrete patio - professional pressure washing reveals clean, like-new surface",
        service: "Pressure Washing"
      },
      { 
        src: "/lovable-uploads/61bfb1f1-0bee-423a-be7a-c49142b6fd6b.png", 
        alt: "Front walkway before pressure washing showing heavy moss and staining", 
        title: "Front Walkway Restoration - Before", 
        location: "Seattle Area", 
        description: "Heavily stained concrete walkway with moss growth requiring professional pressure washing treatment",
        service: "Pressure Washing"
      },
      { 
        src: "/lovable-uploads/7a0d1b2c-03a2-4054-8cf2-6bdc1dca519c.png", 
        alt: "Clean front walkway after professional pressure washing transformation", 
        title: "Front Walkway Restoration - After", 
        location: "Seattle Area", 
        description: "Dramatic transformation of front walkway - professional pressure washing removes years of buildup and staining",
        service: "Pressure Washing"
      },
      { 
        src: "/lovable-uploads/93a442fb-b597-4fdb-95b1-e0ca6294ae45.png", 
        alt: "Composite deck before and after soft wash cleaning restoration", 
        title: "Composite Deck Restoration", 
        location: "Seattle Area", 
        description: "Professional soft wash cleaning restores composite deck to original color and beauty",
        service: "Pressure Washing"
      },
      { 
        src: "/lovable-uploads/df415af5-fda0-44d2-aefc-2dd719bd41fd.png", 
        alt: "Composite deck staircase before and after pressure washing", 
        title: "Deck Staircase Cleaning", 
        location: "Seattle Area", 
        description: "Professional composite deck and staircase cleaning - removing buildup and restoring original appearance",
        service: "Pressure Washing"
      },
      { 
        src: "/lovable-uploads/421f2edc-aeab-4325-add0-bfac9af5b8e0.png", 
        alt: "Asphalt driveway pressure washing before and after showing moss removal", 
        title: "Asphalt Driveway Deep Clean", 
        location: "Seattle Area", 
        description: "Professional asphalt driveway pressure washing - removing heavy moss buildup and restoring clean appearance",
        service: "Pressure Washing"
      },
      { 
        src: "/lovable-uploads/0c381942-caa7-4984-890e-3512190e2d02.png", 
        alt: "Residential walkway pressure washing before and after transformation", 
        title: "Residential Walkway Restoration", 
        location: "Seattle Area", 
        description: "Complete walkway transformation - professional pressure washing removes moss and organic buildup",
        service: "Pressure Washing"
      },
      { 
        src: "/lovable-uploads/5addf656-858e-47e3-87a9-1db331528b89.png", 
        alt: "Retaining wall pressure washing in progress showing dramatic clean vs dirty comparison", 
        title: "Retaining Wall Restoration In Progress", 
        location: "Seattle Area", 
        description: "Professional retaining wall pressure washing in action - dramatic difference between cleaned and uncleaned sections",
        service: "Pressure Washing"
      }
    ],
    "Commercial": [
      { 
        src: "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/505253534_10221752307676177_2976856671973644899_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=NjUx8nup8JoQ7kNvwEvGqBK&_nc_oc=AdlXg8sTnsgV_4z2xolrpzaZkOt6jY5s0lvaQlhmDBkIYJALJtkPj1BVWg4xs8KLjjw&_nc_zt=23&_nc_ht=scontent-sea1-1.xx&_nc_gid=AGdv05BUdz6gSfsO_buvlg&oh=00_AfWYIUBhJ2oub2DlK2fHgazA2ZS0TOAckx3VFBMEB4OBGg&oe=689686D5", 
        alt: "Wells Fargo bank sidewalk pressure washing before and after", 
        title: "Bank Sidewalk Cleaning", 
        location: "Marysville", 
        description: "Professional sidewalk pressure washing at Wells Fargo bank location",
        service: "Commercial"
      },
      { 
        src: "https://scontent-sea5-1.xx.fbcdn.net/v/t39.30808-6/505108295_10221752306196140_7014226768814137650_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Wm28A_u7HC0Q7kNvwH02PaT&_nc_oc=AdmZgHGzW6Qrq5mLbgwD0zsAMxkykiRV2DjE545smgFz-acE_NS4L2xuNdmFdbLegxk&_nc_zt=23&_nc_ht=scontent-sea5-1.xx&_nc_gid=PrPovnSq4HwMHVThzZBvWg&oh=00_AfXna9BXdR-6a37Aw4YPtcEXIkQJjUmkzFTmYtACUIFbNg&oe=689689CA", 
        alt: "Wells Fargo bank sidewalk pressure washing second section", 
        title: "Bank Sidewalk Cleaning - Section 2", 
        location: "Marysville", 
        description: "Additional sidewalk section at Wells Fargo bank after professional pressure washing",
        service: "Commercial"
      },
      { 
        src: "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/505414342_10221752306076137_3126692555457843088_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ZqhOH46OLDsQ7kNvwFSeAGM&_nc_oc=AdnrFUFDPBNwwBgCME854GPT2zZWX1vup5QEmrUVioolG3er0Sngzj_t3i2U_8vTuIQ&_nc_zt=23&_nc_ht=scontent-sea1-1.xx&_nc_gid=pgqqRIciJIDVsapJlvumxw&oh=00_AfW6hp7tulMWl9R27juqBGw4MK-S7e3NIfgnvZzESeUx3w&oe=68967D91", 
        alt: "Wells Fargo ATM area pressure washing before and after", 
        title: "ATM Area Cleaning", 
        location: "Marysville", 
        description: "Professional cleaning of ATM entrance area at Wells Fargo bank",
        service: "Commercial"
      },
      { 
        src: "/lovable-uploads/4b6fff3e-567e-4898-916f-6985b5ac941e.png", 
        alt: "Wells Fargo bank interior floor pressure washing before and after", 
        title: "Bank Interior Floor Cleaning", 
        location: "Seattle", 
        description: "Professional interior floor pressure washing at Wells Fargo bank - dramatic transformation",
        service: "Commercial"
      },
      { 
        src: "/lovable-uploads/b6f5f7ae-fe57-44dc-99a7-17e3d06139ee.png", 
        alt: "Wells Fargo bank entrance sidewalk before and after pressure washing", 
        title: "Wells Fargo Sidewalk Cleaning", 
        location: "Seattle Area", 
        description: "Professional commercial sidewalk pressure washing for Wells Fargo bank entrance - dramatic transformation from heavily stained to spotless",
        service: "Commercial"
      },
      { 
        src: "/lovable-uploads/b075ca80-743b-42a6-830e-f31f8831ca56.png", 
        alt: "Professional team pressure washing CVS Pharmacy sidewalk for grand opening", 
        title: "CVS Grand Opening Preparation", 
        location: "Mountlake Terrace", 
        description: "Professional commercial pressure washing services for CVS Pharmacy grand opening - ensuring spotless sidewalks and entrance areas",
        service: "Commercial"
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
      },
      { 
        src: "/lovable-uploads/2c817c93-c905-4c9d-9f5c-9a73cbf8ad86.png", 
        alt: "Team member performing building soft wash in Seattle", 
        title: "Commercial Building Soft Wash", 
        location: "Seattle", 
        description: "Professional team member in action during commercial building soft wash project",
        service: "House Washing"
      },
      { 
        src: "/lovable-uploads/b075ca80-743b-42a6-830e-f31f8831ca56.png", 
        alt: "Professional team member pressure washing CVS Pharmacy sidewalk", 
        title: "Team in Action - CVS Grand Opening", 
        location: "Mountlake Terrace", 
        description: "Professional team member performing commercial pressure washing for CVS Pharmacy grand opening preparation",
        service: "Commercial Cleaning"
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