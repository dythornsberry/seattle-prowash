import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface Resource {
  title: string;
  description: string;
  path: string;
}

interface RelatedResourcesProps {
  locationName?: string;
  resources?: Resource[];
}

const defaultResources: Resource[] = [
  {
    title: "What Roof Cleaning Costs in Seattle",
    description: "Real 2026 prices and what actually drives them.",
    path: "/resources/roof-cleaning-cost-seattle"
  },
  {
    title: "Moss Treatment vs. Full Roof Cleaning",
    description: "Which service your roof actually needs, explained honestly.",
    path: "/resources/moss-treatment-vs-roof-cleaning"
  },
  {
    title: "Best Time of Year to Clean",
    description: "Season-by-season timing advice for roofs and gutters.",
    path: "/resources/best-time-roof-gutter-cleaning-seattle"
  }
];

const RelatedResources = ({ locationName, resources = defaultResources }: RelatedResourcesProps) => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Helpful Resources {locationName && `for ${locationName} Homeowners`}
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {resources.map((resource) => (
            <Card key={resource.path} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">{resource.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{resource.description}</p>
                <Link to={resource.path} className="text-brand-orange hover:underline font-semibold">
                  Read Article →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedResources;
