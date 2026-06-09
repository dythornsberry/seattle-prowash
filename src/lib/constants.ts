// Single source of truth for trust metrics and contact info
// Update these values in ONE place and they propagate everywhere.

export const PHONE = {
  display: "206-752-6690",
  digits: "2067526690",
  tel: "tel:12067526690",
} as const;

export const TRUST_METRICS = {
  rating: "5.0",
  reviewCount: "200+",
  guarantee: "12-Month",
  guaranteeFull: "12-Month Moss-Free Guarantee",
  quotes: "Free",
  roofsCompleted: "500+",
} as const;
