export type Marketplace = 'shopee' | 'tiktok' | 'tokopedia';

export type ProductVariant = {
  id: string;
  sku: string;
  size: string;
  color: string;
  available?: boolean;
  officialLinks?: Partial<Record<Marketplace, string>>;
};

export type Product = {
  id: string;
  slug: string;
  title: string;
  collectionSlug?: string;
  description: string;
  images: { src: string; alt: string; width: number; height: number; focus?: string }[];
  variants: ProductVariant[];
  material?: string;
  sizeChartImage?: string;
  featured: boolean;
  status: 'published' | 'draft' | 'archived';
};

export type SiteContent = {
  campaign: { 
    heading: string; 
    body?: string; 
    image: string; 
    mobileImage?: string; 
    ctaLabel?: string; 
    ctaLink?: string;
  };
  philosophy: { heading: string; paragraphs: string[] };
  featuredProductIds: string[];
  stores: Partial<Record<Marketplace, { url: string; enabled: boolean }>>;
  verificationUrl?: string;
  partnerContactUrl?: string;
  socials: { name: string; url: string }[];
};
