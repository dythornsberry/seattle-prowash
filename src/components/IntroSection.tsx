import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const IntroSection = () => {
  return (
    <section className="py-8 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Based in Kenmore, Seattle ProWash offers gentle <strong>roof cleaning</strong> and <strong>moss removal</strong> services across the <strong>Seattle metro area</strong>. 
            Our soft-wash methods restore your roof's look and protect your shingles from damage.{" "}
            <Link 
              to="/roof-moss-removal" 
              className="inline-flex items-center gap-1 text-brand-orange hover:text-brand-orange/80 font-semibold transition-colors"
            >
              Learn about our roof moss removal process
              <ArrowRight className="w-4 h-4" />
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
