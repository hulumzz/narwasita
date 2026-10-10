import { Product } from '../types';

export const products: Product[] = [
  {
    id: 'nws-001',
    slug: 'rupa-pesisir-tee-charcoal',
    title: 'Rupa Pesisir Tee — Charcoal',
    collectionSlug: 'rupa-pesisir',
    description: 'Interpretasi garis pantai dalam potongan minimalis.',
    images: [
      { src: '/images/look-01.jpg', alt: 'Model mengenakan Rupa Pesisir Tee Charcoal', width: 1200, height: 1600 },
      { src: '/images/detail-print.jpg', alt: 'Detail sablon Rupa Pesisir', width: 1600, height: 1600 }
    ],
    variants: [
      { id: 'v-001-s', sku: 'NWS-RP-01-S', size: 'S', color: 'Charcoal', available: true },
      { id: 'v-001-m', sku: 'NWS-RP-01-M', size: 'M', color: 'Charcoal', available: true }
    ],
    material: 'Heavyweight Cotton 235gsm',
    featured: true,
    status: 'published'
  },
  {
    id: 'nws-002',
    slug: 'akar-bumi-tee-moss',
    title: 'Akar Bumi Tee — Moss',
    collectionSlug: 'akar-bumi',
    description: 'Warna bumi dengan kelembutan yang menyatu dengan kulit.',
    images: [
      { src: '/images/look-02.jpg', alt: 'Model mengenakan Akar Bumi Tee Moss', width: 1200, height: 1600 },
      { src: '/images/detail-fabric.jpg', alt: 'Detail bahan heavy cotton', width: 1600, height: 900 }
    ],
    variants: [
      { id: 'v-002-m', sku: 'NWS-AB-02-M', size: 'M', color: 'Moss', available: true }
    ],
    material: 'Heavyweight Cotton 235gsm',
    featured: true,
    status: 'published'
  }
];

export const getFeaturedProducts = () => products.filter(p => p.featured);
export const getProduct = (slug: string) => products.find(p => p.slug === slug);
