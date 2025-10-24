import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialCardProps {
  quote: string;
  author: string;
  service: string;
}

const TestimonialCard = ({ quote, author, service }: TestimonialCardProps) => {
  return (
    <Card className="bg-white border-brand-orange/10 shadow-lg transition-transform duration-200 hover:-translate-y-1">
      <CardContent className="p-6">
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-brand-orange text-brand-orange" />
          ))}
        </div>
        <p className="text-muted-foreground italic mb-4">"{quote}"</p>
        <div className="border-t pt-4">
          <p className="font-semibold text-brand-navy">{author}</p>
          <p className="text-sm text-muted-foreground">{service}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
