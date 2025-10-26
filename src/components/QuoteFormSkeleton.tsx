import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Phone, Mail, MapPin, Shield, CheckCircle, Clock } from "lucide-react";

const QuoteFormSkeleton = () => {
  // Time-sensitive offer - expires in 7 days
  const offerExpiry = new Date();
  offerExpiry.setDate(offerExpiry.getDate() + 7);
  const offerExpiryStr = offerExpiry.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

  return (
    <section id="contact" className="section-spacing bg-off-white/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Urgency Banner */}
          <div className="mb-8 text-center fade-up">
            <div className="inline-block bg-brand-orange/10 border-2 border-brand-orange rounded-xl px-6 py-3">
              <p className="text-brand-navy font-bold flex items-center justify-center gap-2">
                <Clock className="w-5 h-5" />
                Book before {offerExpiryStr} and lock in this year's rates
              </p>
            </div>
          </div>

          <div className="text-center mb-12 fade-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-4 font-heading">
              Get Your Free Quote Today
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Most quotes sent same day • No obligation • Free consultation
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info & Trust Badges - Fully Rendered */}
            <div className="lg:col-span-1 space-y-6 fade-up">
              <Card className="border-2 border-brand-navy/20 shadow-lg rounded-xl">
                <CardHeader>
                  <CardTitle className="text-brand-navy font-heading">Quick Contact</CardTitle>
                  <CardDescription>
                    Prefer to call? We're here to help!
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-brand-orange" />
                    <div>
                      <a href="tel:12067526690" className="font-semibold text-brand-navy hover:text-brand-orange transition-colors">
                        206-752-6690
                      </a>
                      <p className="text-sm text-muted-foreground">Call or text anytime</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-brand-orange" />
                    <div>
                      <a href="mailto:seattleprowash@gmail.com" className="text-sm text-brand-navy hover:text-brand-orange transition-colors break-all">
                        seattleprowash@gmail.com
                      </a>
                      <p className="text-sm text-muted-foreground">1-hour response time</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-brand-orange mt-1" />
                    <div>
                      <p className="text-sm text-brand-navy">Kenmore & Greater Seattle</p>
                      <p className="text-sm text-muted-foreground">Bothell, Kirkland, Shoreline</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Trust Badges with Icons */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-brand-navy/10">
                  <Shield className="w-5 h-5 text-brand-orange flex-shrink-0" />
                  <span className="text-sm font-semibold text-brand-navy">Licensed & Insured in Washington</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-brand-navy/10">
                  <CheckCircle className="w-5 h-5 text-brand-orange flex-shrink-0" />
                  <span className="text-sm font-semibold text-brand-navy">100% Satisfaction Guarantee</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-brand-navy/10">
                  <CheckCircle className="w-5 h-5 text-brand-orange flex-shrink-0" />
                  <span className="text-sm font-semibold text-brand-navy">Serving Greater Seattle Metro</span>
                </div>
              </div>
            </div>

            {/* Quote Form Skeleton */}
            <div className="lg:col-span-2 fade-up">
              <Card className="border-2 border-brand-navy/20 shadow-xl rounded-xl">
                <CardHeader>
                  <CardTitle className="text-brand-navy font-heading">
                    Request Your Free Quote
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll send you an estimate
                  </CardDescription>
                  <div className="mt-3 p-3 bg-brand-orange/10 rounded-lg border border-brand-orange/20">
                    <p className="text-sm text-brand-navy font-medium">
                      🔒 Your information is secure. No spam. No obligation.
                    </p>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Name Field */}
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-12 w-full rounded-xl" />
                    </div>
                    
                    {/* Phone Field */}
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-32" />
                      <Skeleton className="h-12 w-full rounded-xl" />
                    </div>
                    
                    {/* Email Field */}
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-16" />
                      <Skeleton className="h-12 w-full rounded-xl" />
                    </div>
                    
                    {/* Address Field */}
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-36" />
                      <Skeleton className="h-12 w-full rounded-xl" />
                    </div>
                    
                    {/* Checkbox */}
                    <Skeleton className="h-16 w-full rounded-md" />
                    
                    {/* Details Field */}
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-40" />
                      <Skeleton className="h-24 w-full rounded-xl" />
                    </div>
                    
                    {/* Submit Button */}
                    <Skeleton className="h-12 w-full rounded-xl" />
                    
                    {/* Privacy Text */}
                    <Skeleton className="h-3 w-64 mx-auto" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteFormSkeleton;
