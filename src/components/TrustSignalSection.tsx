import { Star } from "lucide-react";

const GoogleIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" width="20" height="20">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    text: "Outstanding work! They removed years of moss from our roof and it looks brand new. Professional team and fair pricing.",
    rating: 5
  },
  {
    id: 2,
    name: "Mike Chen",
    text: "Seattle ProWash exceeded expectations. Thorough cleaning, great communication, and they protected our landscaping perfectly.",
    rating: 5
  },
  {
    id: 3,
    name: "Lisa Martinez",
    text: "Best roof cleaning service in the area! They were on time, professional, and the results speak for themselves.",
    rating: 5
  }
];

const TrustSignalSection = () => {
  return (
    <section id="reviews" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Google Rating Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <GoogleIcon />
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-2xl font-bold text-gray-900">5.0</span>
          </div>
          <p className="text-xl text-gray-700 font-medium">
            Based on 180+ Google Reviews
          </p>
          <a 
            href="https://www.google.com/search?q=Seattle+ProWash+reviews" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block mt-2 text-primary-teal hover:text-primary-teal/80 font-medium underline"
          >
            Read all reviews on Google
          </a>
        </div>

        {/* Reviews Carousel */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                "{review.text}"
              </p>
              <div className="font-semibold text-gray-900">
                - {review.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSignalSection;