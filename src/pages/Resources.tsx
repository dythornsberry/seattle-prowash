import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import MobileBottomBar from "@/components/MobileBottomBar";
import { navigateToContact } from "@/lib/navigation";

const Resources = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const articles = [
    {
      id: "roof-gutter-cleaning-importance",
      title: "Why Regular Roof and Gutter Cleaning Matters",
      excerpt: "Discover how regular maintenance protects your Pacific Northwest home from water damage, extends roof life, and saves thousands in repairs. Learn why Seattle ProWash recommends annual cleaning for optimal protection.",
      category: "Maintenance",
      readTime: "5 min read",
      date: "2025-12-15"
    },
    {
      id: "prevent-moss-algae-growth",
      title: "How to Prevent Moss and Algae Growth",
      excerpt: "Pacific Northwest homes face unique challenges with moss and algae. Learn proven prevention strategies, treatment options, and why professional moss removal is essential for long-term roof health.",
      category: "Prevention",
      readTime: "7 min read", 
      date: "2025-12-10"
    },
    {
      id: "gutter-cleaning-safety-tips",
      title: "Safety Tips When Cleaning Gutters",
      excerpt: "Gutter cleaning can be dangerous without proper precautions. Our safety experts share essential tips for DIY maintenance and explain when it's time to call the professionals for your safety.",
      category: "Safety",
      readTime: "4 min read",
      date: "2025-12-05"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Roof & Gutter Care Resources"
        description="Expert guides and tips from Seattle ProWash professionals. Learn about moss prevention, gutter maintenance, and protecting your Pacific Northwest home."
        url="https://www.seattleprowash.com/resources"
      />
      <Header />
        
        <main className="pt-16 md:pt-20">
          {/* Hero Section */}
          <section className="bg-primary-teal text-white py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <Badge variant="secondary" className="mb-4">
                  Resources & Tips
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Expert Roof & Gutter Care Resources
                </h1>
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                  Helpful guides and tips from Seattle ProWash professionals to keep your Pacific Northwest home protected
                </p>
              </div>
            </div>
          </section>

          {/* Articles Grid */}
          <section className="py-16 bg-off-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-dark-teal mb-4">
                    Latest Articles & Guides
                  </h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Stay informed with expert advice on maintaining your roof, gutters, and exterior surfaces in the Pacific Northwest climate.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {articles.map((article) => (
                    <Card key={article.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <CardContent className="p-0">
                        <div className="p-6">
                          <div className="flex items-center gap-2 mb-4">
                            <Badge variant="secondary" className="text-xs">
                              {article.category}
                            </Badge>
                            <div className="flex items-center gap-1 text-sm text-gray-500">
                              <Clock className="w-4 h-4" />
                              {article.readTime}
                            </div>
                          </div>
                          
                          <h3 className="text-xl font-bold text-dark-teal mb-3 leading-tight">
                            {article.title}
                          </h3>
                          
                          <p className="text-gray-600 mb-6 leading-relaxed">
                            {article.excerpt}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1 text-sm text-gray-500">
                              <Calendar className="w-4 h-4" />
                              {new Date(article.date).toLocaleDateString('en-US', { 
                                month: 'long', 
                                day: 'numeric', 
                                year: 'numeric' 
                              })}
                            </div>
                            
                            <Link to={`/resources/${article.id}`}>
                              <Button variant="ghost" size="sm" className="text-primary-teal hover:text-primary-teal/80">
                                Read more
                                <ArrowRight className="w-4 h-4 ml-1" />
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Newsletter Signup */}
          <section className="py-16 bg-dark-teal text-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Stay Informed About Home Maintenance
                </h2>
                <p className="text-xl text-white/90 mb-8">
                  Get seasonal tips and maintenance reminders delivered to your inbox
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-4 py-3 rounded-lg text-dark-teal flex-1"
                  />
                  <Button variant="secondary" size="lg">
                    Subscribe
                  </Button>
                </div>
                <p className="text-sm text-white/70 mt-4">
                  No spam, just helpful maintenance tips. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-off-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-dark-teal mb-6">
                  Need Professional Help?
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  While these resources are helpful, nothing beats professional care. Get a fast quote today for expert roof and gutter cleaning services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    variant="cta-orange"
                    size="xl"
                    className="bg-bright-orange hover:bg-bright-orange/90 text-white font-bold"
                    onClick={navigateToContact}
                  >
                    GET FAST QUOTE
                  </Button>
                  <Button 
                    variant="outline"
                    size="xl"
                    onClick={() => window.location.href = 'tel:206-752-6690'}
                  >
                    Call 206-752-6690
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>

      <Footer />
      <MobileBottomBar />
    </div>
  );
};

export default Resources;
