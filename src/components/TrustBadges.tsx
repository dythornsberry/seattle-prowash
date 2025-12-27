import { Star, Shield, Award } from "lucide-react";

const TrustBadges = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 py-4 px-4 bg-muted/30 rounded-lg mb-6">
      <div className="flex items-center gap-2">
        <Star className="w-5 h-5 text-brand-orange fill-brand-orange" />
        <span className="text-sm md:text-base font-medium text-foreground">194+ ⭐⭐⭐⭐⭐ Reviews</span>
      </div>
      <div className="flex items-center gap-2">
        <Award className="w-5 h-5 text-brand-orange" />
        <span className="text-sm md:text-base font-medium text-foreground">12-Month Guarantee</span>
      </div>
      <div className="flex items-center gap-2">
        <Shield className="w-5 h-5 text-brand-orange" />
        <span className="text-sm md:text-base font-medium text-foreground">Licensed & Insured</span>
      </div>
    </div>
  );
};

export default TrustBadges;
