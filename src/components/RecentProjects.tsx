import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { navigateToContact } from "@/lib/navigation";
import metalRoofBeforeAfter from "@/assets/metal-roof-cleaning-before-after.jpg";
import newMetalRoofBefore from "@/assets/new-metal-roof-before-2.jpg";
import newMetalRoofAfter from "@/assets/new-metal-roof-after-2.jpg";
import roofMossBeforeAfter from "@/assets/roof-moss-mold-mildew-removal-before-after.jpg";
import gutterBeforeAfter from "@/assets/gutter-cleaning-before-after.jpg";
import drivewayBeforeAfter from "@/assets/driveway-moss-cleaning-before-after.jpg";
import houseWashBeforeAfter from "@/assets/house-wash-siding-before-after.jpg";

type RecentProject = {
  title: string;
  location: string;
  service: string;
  date: string;
  image: string;
  alt: string;
  description: string;
  featured?: boolean;
};

const recentProjects: RecentProject[] = [
  {
    title: "Metal roof cleaning",
    location: "Seattle Area",
    service: "Metal Roof Cleaning",
    date: "Recent project",
    image: metalRoofBeforeAfter,
    alt: "Metal roof cleaning before and after by Seattle ProWash",
    description: "Heavy moss and staining removed from a metal roof using a roof-safe cleaning process.",
    featured: true,
  },
  {
    title: "Standing seam metal roof",
    location: "Eastside",
    service: "Metal Roof Cleaning",
    date: "Recent project",
    image: newMetalRoofAfter,
    alt: "Clean standing seam metal roof after professional cleaning",
    description: "Metal roof cleaned and brightened with careful attention around seams and roof transitions.",
  },
  {
    title: "Metal roof before cleaning",
    location: "Greater Seattle",
    service: "Roof Cleaning",
    date: "Recent project",
    image: newMetalRoofBefore,
    alt: "Metal roof before moss removal and cleaning",
    description: "Before photo from a metal roof project with moss buildup and organic staining.",
  },
  {
    title: "Roof moss removal",
    location: "Kenmore",
    service: "Roof Cleaning",
    date: "Recent project",
    image: roofMossBeforeAfter,
    alt: "Roof moss removal before and after in Kenmore",
    description: "Moss removal and treatment to help protect the roof through wet Seattle weather.",
  },
  {
    title: "Gutter cleaning",
    location: "Bothell",
    service: "Gutter Cleaning",
    date: "Recent project",
    image: gutterBeforeAfter,
    alt: "Gutter cleaning before and after in Bothell",
    description: "Clogged gutters cleared and cleaned so water can drain away from the home.",
  },
  {
    title: "Driveway cleaning",
    location: "Kirkland",
    service: "Pressure Washing",
    date: "Recent project",
    image: drivewayBeforeAfter,
    alt: "Driveway pressure washing before and after in Kirkland",
    description: "Driveway moss and grime removed for a cleaner, safer entry surface.",
  },
  {
    title: "House soft washing",
    location: "North Seattle",
    service: "House Soft Washing",
    date: "Recent project",
    image: houseWashBeforeAfter,
    alt: "House soft washing before and after in North Seattle",
    description: "Low-pressure exterior cleaning for siding with algae and organic buildup.",
  },
];

const RecentProjects = () => {
  const [featuredProject, ...projectCards] = recentProjects;

  return (
    <section className="section-spacing bg-off-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-10 fade-up">
            <div className="max-w-3xl">
              <Badge className="bg-brand-orange text-white border-0 mb-4">
                Recently Completed
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-4">
                Recent Projects Around Greater Seattle
              </h2>
              <p className="text-lg text-muted-foreground">
                Fresh roof cleaning, metal roof cleaning, gutter cleaning, house soft washing, and pressure washing work from the Seattle ProWash crew.
              </p>
            </div>
            <Button variant="cta-orange" size="lg" onClick={navigateToContact}>
              Get a Quote <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="grid lg:grid-cols-5 gap-5">
            <article className="lg:col-span-2 bg-white rounded-2xl overflow-hidden shadow-md border border-brand-navy/10 fade-up">
              <div className="relative aspect-[4/3]">
                <img
                  src={featuredProject.image}
                  alt={featuredProject.alt}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-brand-navy text-white border-0">
                    {featuredProject.service}
                  </Badge>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-brand-orange" />
                    {featuredProject.location}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <CalendarDays className="w-4 h-4 text-brand-orange" />
                    {featuredProject.date}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-3">
                  {featuredProject.title}
                </h3>
                <p className="text-muted-foreground mb-5">
                  {featuredProject.description}
                </p>
                <Link
                  to="/gallery"
                  className="inline-flex items-center font-semibold text-brand-orange hover:text-brand-navy transition-colors"
                >
                  View more work <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </article>

            <div className="lg:col-span-3 grid sm:grid-cols-2 gap-5">
              {projectCards.map((project) => (
                <article
                  key={`${project.title}-${project.location}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-brand-navy/10 fade-up"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.alt}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-white text-brand-navy border-0 shadow-sm">
                        {project.service}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
                      <MapPin className="w-4 h-4 text-brand-orange" />
                      {project.location}
                    </div>
                    <h3 className="text-lg font-bold text-brand-navy mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
