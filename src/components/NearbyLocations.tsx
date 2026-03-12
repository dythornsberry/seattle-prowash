import { Link } from "react-router-dom";

interface NearbyLocationsProps {
  currentCity: string;
  cities: Array<{
    name: string;
    path: string;
  }>;
}

const NearbyLocations = ({ cities }: NearbyLocationsProps) => {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          We Also Serve Nearby Areas
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {cities.map((city) => (
            <Link 
              key={city.path} 
              to={city.path} 
              className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
            >
              <p className="font-semibold text-brand-navy">{city.name}</p>
            </Link>
          ))}
          <Link 
            to="/service-areas" 
            className="text-center p-4 bg-brand-orange text-white rounded-lg hover:bg-brand-orange/90 transition-colors"
          >
            <p className="font-semibold">View All Areas</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NearbyLocations;
