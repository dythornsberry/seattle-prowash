import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: string;
}

export const SEOHead = ({ 
  title, 
  description, 
  image = "/lovable-uploads/cd85dd92-8acb-405d-a73c-44650e962bd8.png",
  url,
  type = "website"
}: SEOHeadProps) => {
  const fullTitle = `${title} | Seattle ProWash`;
  const currentUrl = url || `https://www.seattleprowash.com${window.location.pathname}`;
  const imageUrl = image.startsWith('http') ? image : `https://www.seattleprowash.com${image}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      
      {/* Geo-targeting meta tags - Based in Kenmore, WA */}
      <meta name="geo.region" content="US-WA" />
      <meta name="geo.placename" content="Kenmore" />
      <meta name="geo.position" content="47.7574;-122.2465" />
      <meta name="ICBM" content="47.7574, -122.2465" />
      
      {/* OpenGraph tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Seattle ProWash" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      
      {/* Social Media Profiles */}
      <link rel="me" href="https://www.facebook.com/SeattleProWash" />
      <link rel="me" href="https://share.google/VJ2xiQPvoc6E8IQvw" />
      <link rel="me" href="https://www.youtube.com/@seattleprowash" />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="author" content="Seattle ProWash" />
      <meta name="copyright" content="Seattle ProWash LLC" />
      
      <link rel="canonical" href={currentUrl} />
    </Helmet>
  );
};
