import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServiceAreaMap = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Areas We Serve
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Wondering if we serve your neighborhood? Check our service area below.
          </p>
        </div>

        <div className="rounded-lg overflow-hidden shadow-lg mb-6">
          <iframe
            src="https://www.google.com/maps/d/embed?mid=15rkY40rp-zfqZWUBMldquSqKXJ55HXo"
            width="100%"
            height="480"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Seattle ProWash Service Area Map"
          />
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            asChild
            className="gap-2"
          >
            <a
              href="https://www.google.com/maps/d/u/0/view?mid=15rkY40rp-zfqZWUBMldquSqKXJ55HXo&usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Larger Map
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaMap;
