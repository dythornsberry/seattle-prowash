interface OptimizedImageProps {
  src: string;
  srcWebP?: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: "lazy" | "eager";
  fetchPriority?: "high" | "low" | "auto";
  onClick?: () => void;
  sizes?: string;
}

const OptimizedImage = ({ 
  src, 
  srcWebP, 
  alt, 
  className = "", 
  width, 
  height, 
  loading = "lazy", 
  fetchPriority = "auto",
  onClick,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
}: OptimizedImageProps) => {
  return (
    <picture onClick={onClick} className={className}>
      {srcWebP && <source srcSet={srcWebP} type="image/webp" sizes={sizes} />}
      <img 
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        fetchPriority={fetchPriority}
        className="w-full h-full object-cover"
        style={{
          aspectRatio: width && height ? `${width}/${height}` : undefined
        }}
      />
    </picture>
  );
};

export default OptimizedImage;