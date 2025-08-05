import { Button } from "@/components/ui/button";

interface GalleryFiltersProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const GalleryFilters = ({ categories, activeCategory, onCategoryChange }: GalleryFiltersProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-12 fade-up">
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? "prowash-primary" : "prowash-secondary"}
          size="sm"
          onClick={() => onCategoryChange(category)}
          className="min-w-[120px]"
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default GalleryFilters;