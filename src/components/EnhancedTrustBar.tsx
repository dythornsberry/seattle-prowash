import { BadgeCheck, Clock3, ShieldCheck, Star } from "lucide-react";

const proofPoints = [
  {
    icon: Star,
    value: "200+",
    label: "5-star reviews",
  },
  {
    icon: Clock3,
    value: "Same-day",
    label: "estimates",
  },
  {
    icon: ShieldCheck,
    value: "Licensed",
    label: "& insured",
  },
  {
    icon: BadgeCheck,
    value: "12-month",
    label: "moss-free guarantee",
  },
];

const EnhancedTrustBar = () => {
  return (
    <section className="relative z-20 -mt-8 bg-transparent pb-4 md:-mt-10 md:pb-8">
      <div className="container mx-auto px-4">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-3 lg:grid-cols-4">
          {proofPoints.map(({ icon: Icon, value, label }) => (
            <div
              key={`${value}-${label}`}
              className="rounded-2xl border border-brand-navy/10 bg-white/95 p-4 text-center shadow-[0_18px_45px_rgba(15,23,42,0.10)] backdrop-blur-sm"
            >
              <div className="mx-auto mb-3 inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-orange/12 text-brand-orange">
                <Icon className="h-5 w-5" />
              </div>
              <p className="text-lg font-bold leading-tight text-brand-navy md:text-xl">
                {value}
              </p>
              <p className="mt-1 text-sm font-medium leading-snug text-muted-foreground">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnhancedTrustBar;
