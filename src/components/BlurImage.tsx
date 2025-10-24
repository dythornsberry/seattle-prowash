import { useState, useEffect } from "react";

interface BlurImageProps {
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

const BlurImage = ({
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
}: BlurImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = srcWebP || src;
    img.onload = () => setIsLoaded(true);
  }, [src, srcWebP]);

  return (
    <picture onClick={onClick} className={`relative overflow-hidden ${className}`}>
      {srcWebP && <source srcSet={srcWebP} type="image/webp" sizes={sizes} />}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding="async"
        className={`w-full h-full object-cover transition-all duration-200 ease-out ${
          isLoaded ? 'blur-0 scale-100' : 'blur-lg scale-102'
        }`}
        style={{
          aspectRatio: width && height ? `${width}/${height}` : undefined
        }}
      />
    </picture>
  );
};

export default BlurImage;
