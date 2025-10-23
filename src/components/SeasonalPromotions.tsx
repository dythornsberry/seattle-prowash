import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const SeasonalPromotions = () => {
  const promotions = [
    {
      id: 1,
      title: "Fall 2025 Roof & Gutter Cleaning + Moss Protection Package",
      description: "Complete autumn protection for your home. Includes gutter cleaning, debris removal, and our professional moss treatment with 12-month moss-free guarantee.",
      validUntil: "December 31, 2025",
      discount: "Save $50",
      isActive: true
    }
  ];

  const activePromotions = promotions.filter(promo => promo.isActive);

  if (activePromotions.length === 0) {
    return null;
  }

  const handleGetQuote = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-12 bg-gradient-to-br from-bright-green/5 to-primary-teal/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-bright-green" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary-teal">
              Limited-Time Offers
            </h2>
            <Sparkles className="w-6 h-6 text-bright-green" />
          </div>
          <p className="text-lg text-text-charcoal max-w-2xl mx-auto">
            Take advantage of our seasonal promotions and save on professional roof and gutter cleaning services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {activePromotions.map((promotion) => (
            <Card key={promotion.id} className="bg-white border-2 border-bright-green/20 hover:border-bright-green/40 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-bright-green text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {promotion.discount}
                  </div>
                  <div className="flex items-center gap-1 text-sm text-text-charcoal">
                    <Calendar className="w-4 h-4" />
                    <span>Valid until {promotion.validUntil}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-primary-teal mb-3">
                  {promotion.title}
                </h3>
                
                <p className="text-text-charcoal mb-6 leading-relaxed">
                  {promotion.description}
                </p>
                
                <Button 
                  onClick={handleGetQuote}
                  className="w-full bg-bright-green hover:bg-bright-green/90 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:shadow-lg"
                >
                  Get Free Quote Today
                </Button>
                <p className="text-xs italic text-text-charcoal/70 mt-3 text-center">
                  *Offers cannot be combined. Valid for new customers only. Seattle metro area including <Link to="/kenmore" className="hover:text-primary-teal transition-colors">Kenmore</Link>, <Link to="/bothell" className="hover:text-primary-teal transition-colors">Bothell</Link>, and <Link to="/kirkland" className="hover:text-primary-teal transition-colors">Kirkland</Link>.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeasonalPromotions;