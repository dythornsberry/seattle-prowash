import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, AlertTriangle, X } from "lucide-react";
import { useState } from "react";

const CostOfWaiting = () => {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  const handleImageClick = (imageSrc: string) => {
    setExpandedImage(imageSrc);
  };

  const handleCloseModal = () => {
    setExpandedImage(null);
  };
  return (
    <section className="section-spacing bg-light-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-teal text-center mb-12">
            The Cost of Waiting vs. The Peace of Mind We Deliver
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* The Failure */}
            <Card className="border-2 border-red-200 bg-red-50/50">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                  <h3 className="text-xl font-bold text-red-800">The Cost of Waiting</h3>
                </div>
                
                <div className="mb-6">
                  <img
                    src="/lovable-uploads/062a3f5b-99f6-4c63-8ace-78e9a451a6f0.png"
                    alt="Roof covered in moss and algae showing potential problems"
                    className="w-full h-48 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => handleImageClick("/lovable-uploads/062a3f5b-99f6-4c63-8ace-78e9a451a6f0.png")}
                  />
                </div>
                
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-text-charcoal">Risk of leaks and costly water damage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-text-charcoal">Decreased home value</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-text-charcoal">Potential damage to shingles</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* The Success */}
            <Card className="border-2 border-bright-green bg-green-50/50">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-bright-green" />
                  <h3 className="text-xl font-bold text-green-800">Peace of Mind We Deliver</h3>
                </div>
                
                <div className="mb-6">
                  <img
                    src="/lovable-uploads/ddfefd30-18aa-48ac-98db-283c94d8e8ec.png"
                    alt="Clean, pristine roof after professional moss removal"
                    className="w-full h-48 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => handleImageClick("/lovable-uploads/ddfefd30-18aa-48ac-98db-283c94d8e8ec.png")}
                  />
                </div>
                
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-bright-green mt-0.5 flex-shrink-0" />
                    <span className="text-text-charcoal">Extend the life of your roof</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-bright-green mt-0.5 flex-shrink-0" />
                    <span className="text-text-charcoal">Boost your home's curb appeal</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-bright-green mt-0.5 flex-shrink-0" />
                    <span className="text-text-charcoal">Enjoy a 12-Month Moss-Free Guarantee</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Modal for expanded images */}
      {expandedImage && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={handleCloseModal}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              onClick={handleCloseModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={expandedImage}
              alt="Expanded roof image"
              className="w-full h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default CostOfWaiting;