import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const IntroSection = () => {
  return (
    <section className="py-8 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            In Seattle's rainy, tree-filled climate, clogged gutters and roof debris are inevitable. 
            Based in Kenmore, <strong>Seattle ProWash</strong> makes it easy to protect your home with reliable <strong>gutter cleaning</strong> and light <strong>roof maintenance</strong>. No harsh chemicals, no long waits. 
            Our soft-wash methods restore your home's exterior while keeping your gutters flowing freely.{" "}
            <Link 
              to="/gutter-cleaning" 
              className="inline-flex items-center gap-1 text-brand-orange hover:text-brand-orange/80 font-semibold transition-colors"
            >
              Learn about our gutter cleaning services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
