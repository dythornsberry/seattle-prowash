// Schema.org structured data utilities for SEO

interface LocalBusinessSchemaProps {
  name: string;
  description: string;
  url: string;
  telephone: string;
  email?: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    latitude: number;
    longitude: number;
  };
  areaServed: string[];
  priceRange?: string;
  rating?: {
    ratingValue: number;
    reviewCount: number;
  };
  image?: string;
}

type JsonLd = Record<string, unknown>;

export const generateLocalBusinessSchema = (props: LocalBusinessSchemaProps) => {
  const schema: JsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${props.url}#business`,
    name: props.name,
    description: props.description,
    url: props.url,
    telephone: props.telephone,
    image: props.image || new URL("/og-seattle-prowash.jpg", props.url).toString(),
    address: {
      "@type": "PostalAddress",
      streetAddress: props.address.streetAddress,
      addressLocality: props.address.addressLocality,
      addressRegion: props.address.addressRegion,
      postalCode: props.address.postalCode,
      addressCountry: props.address.addressCountry
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: props.geo.latitude,
      longitude: props.geo.longitude
    },
    areaServed: props.areaServed.map(area => ({
      "@type": "City",
      name: area
    })),
    priceRange: props.priceRange || "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59"
      }
    ]
  };

  if (props.email) {
    schema.email = props.email;
  }

  if (props.rating) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: props.rating.ratingValue,
      reviewCount: props.rating.reviewCount,
      bestRating: 5,
      worstRating: 1
    };
  }

  return schema;
};

interface ServiceSchemaProps {
  name: string;
  description: string;
  provider: string;
  areaServed: string[];
  serviceType: string;
  url: string;
  offers?: {
    price?: string;
    priceCurrency?: string;
    priceRange?: string;
  };
}

export const generateServiceSchema = (props: ServiceSchemaProps) => {
  const schema: JsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: props.name,
    description: props.description,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      "@id": "https://www.seattleprowash.com#business",
      name: props.provider,
      url: "https://www.seattleprowash.com"
    },
    areaServed: props.areaServed.map(area => ({
      "@type": "City",
      name: area
    })),
    serviceType: props.serviceType,
    url: props.url
  };

  if (props.offers) {
    schema.offers = {
      "@type": "Offer",
      priceCurrency: props.offers.priceCurrency || "USD",
      ...(props.offers.price && { price: props.offers.price }),
      ...(props.offers.priceRange && { priceRange: props.offers.priceRange })
    };
  }

  return schema;
};

interface FAQSchemaProps {
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export const generateFAQSchema = (props: FAQSchemaProps) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: props.faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
};

interface ReviewSchemaProps {
  itemReviewed: {
    type: string;
    name: string;
  };
  reviews: Array<{
    author: string;
    reviewRating: number;
    reviewBody: string;
    datePublished?: string;
  }>;
}

export const generateReviewSchema = (props: ReviewSchemaProps) => {
  return props.reviews.map(review => ({
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": props.itemReviewed.type,
      name: props.itemReviewed.name
    },
    author: {
      "@type": "Person",
      name: review.author
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.reviewRating,
      bestRating: 5,
      worstRating: 1
    },
    reviewBody: review.reviewBody,
    ...(review.datePublished && { datePublished: review.datePublished })
  }));
};

// Breadcrumb Schema
export interface BreadcrumbItem {
  name: string;
  url: string;
}

export const generateBreadcrumbSchema = (items: BreadcrumbItem[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
};

// Article Schema
interface ArticleSchemaProps {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}

export const generateArticleSchema = (props: ArticleSchemaProps) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: props.headline,
    description: props.description,
    url: props.url,
    datePublished: props.datePublished,
    dateModified: props.dateModified || props.datePublished,
    image: props.image || "https://www.seattleprowash.com/og-seattle-prowash.jpg",
    author: {
      "@type": "Person",
      name: "Dylan Thornsberry",
      jobTitle: "Owner",
      worksFor: {
        "@type": "HomeAndConstructionBusiness",
        "@id": "https://www.seattleprowash.com#business",
        name: "Seattle ProWash"
      }
    },
    publisher: {
      "@type": "Organization",
      "@id": "https://www.seattleprowash.com#business",
      name: "Seattle ProWash",
      logo: {
        "@type": "ImageObject",
        url: "https://www.seattleprowash.com/favicon.png"
      }
    }
  };
};

// Helper function to inject schema into document head
export const injectSchema = (schema: unknown) => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  // data-injected lets the build-time snapshot (scripts/prerender.js) collect
  // page-specific schema and bake it into the static HTML for non-JS crawlers
  script.setAttribute('data-injected', '1');
  script.text = JSON.stringify(schema);
  document.head.appendChild(script);
  return () => {
    document.head.removeChild(script);
  };
};

// Company information (centralized)
export const COMPANY_INFO = {
  name: "Seattle ProWash",
  legalName: "Seattle ProWash LLC",
  url: "https://www.seattleprowash.com",
  telephone: "206-752-6690",
  description: "Professional roof cleaning and gutter cleaning services in the Greater Seattle area. Specializing in moss removal with a 12-month guarantee.",
  address: {
    streetAddress: "6516 NE 192nd Pl",
    addressLocality: "Kenmore",
    addressRegion: "WA",
    postalCode: "98028",
    addressCountry: "US"
  },
  geo: {
    latitude: 47.75740,
    longitude: -122.24650
  },
  serviceAreas: [
    "Kenmore",      // Home base
    "Lake Forest Park", // Next door to home base
    "Bothell",      // High job volume
    "Lynnwood",     // High job volume
    "Kirkland",     // High job volume
    "Shoreline",    // High job volume
    "Woodinville",  // Secondary
    "Seattle",      // Brand awareness
    "Bellevue",     // Secondary
    "Redmond",      // Secondary
    "Sammamish"     // Secondary
  ],
  rating: {
    ratingValue: 5.0,
    reviewCount: 224
  }
};
