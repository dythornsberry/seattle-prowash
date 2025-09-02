import beforeRoof from "@/assets/new-roof-before-1.webp";
import afterRoof from "@/assets/new-roof-after-1.webp";
import { useState } from "react";

const SingleBeforeAfter = () => {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-seattle-blue mb-8">
            Real Results
          </h2>
          
          <p className="text-lg text-text-charcoal mb-8">
            Seattle roof — treatment results
          </p>

          <div className="relative max-w-2xl mx-auto mb-8">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src={showAfter ? afterRoof : beforeRoof}
                alt={showAfter ? "Roof treatment after - moss completely removed" : "Roof treatment before - heavy moss coverage"}
                className="w-full h-auto object-cover"
                width="800"
                height="600"
              />
              
              {/* Before/After Toggle */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-white/90 backdrop-blur-sm rounded-full p-1 flex">
                  <button
                    onClick={() => setShowAfter(false)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      !showAfter 
                        ? 'bg-seattle-blue text-white' 
                        : 'text-text-charcoal hover:bg-gray-100'
                    }`}
                  >
                    Before
                  </button>
                  <button
                    onClick={() => setShowAfter(true)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      showAfter 
                        ? 'bg-seattle-blue text-white' 
                        : 'text-text-charcoal hover:bg-gray-100'
                    }`}
                  >
                    After
                  </button>
                </div>
              </div>
            </div>
          </div>

          <a 
            href="/gallery" 
            className="text-seattle-blue hover:underline font-medium"
          >
            See more results →
          </a>
        </div>
      </div>
    </section>
  );
};

export default SingleBeforeAfter;