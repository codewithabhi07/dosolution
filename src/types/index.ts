export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  features: string[];
  imageUrl: string;
  tag: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Weddings' | 'Candid' | 'Traditional' | 'Pre-Wedding' | 'Couple Portraits';
  location: string;
  imageUrl: string;
  aspectRatio: 'portrait' | 'landscape' | 'square';
  caption: string;
  instagramUrl?: string;
}

export interface FilmItem {
  id: string;
  title: string;
  type: 'Cinematic Wedding Film' | 'Teaser' | 'Highlight Film' | 'Couple Story' | 'Traditional Rituals';
  couple: string;
  location: string;
  duration: string;
  thumbnailUrl: string;
  videoUrl: string; // YouTube or embed link
  youtubeUrl?: string; // Direct YouTube watch link
  isFeatured?: boolean;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  couple: string;
  weddingLocation: string;
  event: string;
  rating: number;
  featuredImage?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface InstagramPost {
  id: string;
  title: string;
  type: 'Portrait' | 'Haldi' | 'Mehendi' | 'Rituals' | 'Reel' | 'Behind The Scenes';
  imageUrl: string;
  likes: string;
  aspectRatio?: 'portrait' | 'square';
  reelUrl?: string;
  postUrl?: string;
}

export interface InquiryFormData {
  name: string;
  phone: string;
  email: string;
  weddingDate: string;
  weddingLocation: string;
  eventType: string;
  servicesRequired: string[];
  message: string;
}
