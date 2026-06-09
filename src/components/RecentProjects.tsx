import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { navigateToContact } from "@/lib/navigation";
import recentAsphaltRoofBeforeAfter from "@/assets/recent-asphalt-roof-before-after-2026.webp";
import recentGreenMetalRoofBeforeAfter from "@/assets/recent-green-metal-roof-before-after-2026.webp";
import recentSilverMetalRoofBeforeAfter from "@/assets/recent-silver-metal-roof-before-after-2026.webp";
import recentBlackMetalRoof from "@/assets/recent-black-metal-roof-cleaning-2026.webp";
import gutterBeforeAfter from "@/assets/gutter-cleaning-before-after.jpg";
import patioPressureWashingBefore2 from "@/assets/recent-patio-pressure-washing-before-2-2026.webp";
import patioPressureWashingAfter2 from "@/assets/recent-patio-pressure-washing-after-2-2026.webp";

type RecentProject = {
  title: string;
  location: string;
  service: string;
  date: string;
  image: string;
  afterImage?: string;
  alt: string;
  afterAlt?: string;
  description: string;
  featured?: boolean;
};

const recentProjects: RecentProject[] = [
  {
    title: "Metal roof cleaning before & after",
    location: "Lake Washington Area",
    service: "Metal Roof Cleaning",
    date: "Recent project",
    image: recentGreenMetalRoofBeforeAfter,
    alt: "Green metal roof cleaning before and after by Seattle ProWash",
    description: "Organic debris and roof staining cleaned from a standing seam metal roof with a careful, roof-safe process.",
    featured: true,
  },
  {
    title: "Silver metal roof wash",
    location: "Greater Seattle",
    service: "Metal Roof Cleaning",
    date: "Recent project",
    image: recentSilverMetalRoofBeforeAfter,
    alt: "Silver metal roof cleaning before and after",
    description: "Metal roof cleaned and brightened with careful attention around seams, skylights, and roof transitions.",
  },
  {
    title: "Black metal roof cleaned",
    location: "Kenmore Area",
    service: "Metal Roof Cleaning",
    date: "Recent project",
    image: recentBlackMetalRoof,
    alt: "Clean black metal roof after Seattle ProWash metal roof cleaning",
    description: "Finished black metal roof project showing a clean roof surface around skylights and forested rooflines.",
  },
  {
    title: "Asphalt roof moss removal",
    location: "Kenmore",
    service: "Roof Cleaning",
    date: "Recent project",
    image: recentAsphaltRoofBeforeAfter,
    alt: "Roof moss removal before and after in Kenmore",
    description: "Roof debris and moss removed to help protect the shingles through wet Seattle weather.",
  },
  {
    title: "Rooftop patio pressure washing",
    location: "Seattle Area",
    service: "Pressure Washing",
    date: "Recent project",
    image: patioPressureWashingBefore2,
    afterImage: patioPressureWashingAfter2,
    alt: "Concrete patio before pressure washing",
    afterAlt: "Concrete patio after pressure washing",
    description: "Concrete patio cleaned section by section for a brighter, more even finish.",
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
              Get Fast Quote <ArrowRight className="w-4 h-4" />
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
                    {project.afterImage ? (
                      <div className="absolute inset-0 grid grid-cols-2">
                        <div className="relative overflow-hidden border-r-2 border-white">
                          <img
                            src={project.image}
                            alt={project.alt}
                            loading="lazy"
                            decoding="async"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <span className="absolute bottom-2 left-2 rounded bg-black/70 px-2 py-1 text-xs font-bold uppercase tracking-wide text-white">
                            Before
                          </span>
                        </div>
                        <div className="relative overflow-hidden">
                          <img
                            src={project.afterImage}
                            alt={project.afterAlt || project.alt}
                            loading="lazy"
                            decoding="async"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <span className="absolute bottom-2 left-2 rounded bg-brand-orange px-2 py-1 text-xs font-bold uppercase tracking-wide text-white">
                            After
                          </span>
                        </div>
                      </div>
                    ) : (
                      <img
                        src={project.image}
                        alt={project.alt}
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
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
