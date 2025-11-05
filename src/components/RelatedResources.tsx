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
    title: "Prevent Moss & Algae Growth",
    description: "Learn how to keep your home's exterior moss-free year-round.",
    path: "/resources/prevent-moss-algae-growth"
  },
  {
    title: "Gutter Cleaning Safety Tips",
    description: "Essential safety guidelines for maintaining your gutters.",
    path: "/resources/gutter-cleaning-safety-tips"
  },
  {
    title: "Roof & Gutter Maintenance",
    description: "Why regular cleaning is crucial for your home.",
    path: "/resources/roof-gutter-cleaning-importance"
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
