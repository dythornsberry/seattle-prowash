import { Button } from "@/components/ui/button";
import TestimonialSlider from "@/components/TestimonialSlider";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

const RealResults = () => {
  return (
    <section className="py-16 bg-off-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-teal mb-4">
            Real Results for Your Neighbors
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            From mossy roofs in Seattle to dirty driveways in Bellevue, see the transformations our customers love.
          </p>
        </div>

        {/* Part A: Customer Testimonials */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-dark-teal mb-2">
              What Our Neighbors Say
            </h3>
          </div>
          <TestimonialSlider />
        </div>

        {/* Part B: Before & After Gallery */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-dark-teal mb-2">
              Before & After Transformations
            </h3>
          </div>
          <BeforeAfterSlider />
          
          <div className="text-center mt-8">
            <Button 
              variant="outline" 
              size="lg"
              className="border-dark-teal text-dark-teal hover:bg-dark-teal hover:text-white"
              onClick={() => {
                window.location.href = '/gallery';
              }}
            >
              View More Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealResults;