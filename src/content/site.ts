import { SiteContent } from '../types';

export const siteContent: SiteContent = {
  campaign: {
    heading: "Nusantara, dipakai dengan cara baru.",
    body: "Narwasita merangkai cerita, karakter, dan bentuk ke dalam pakaian sehari-hari. Dari akar. Untuk hari ini.",
    image: "/images/hero-desktop.jpg",
    mobileImage: "/images/hero-mobile.jpg",
    ctaLabel: "Lihat Koleksi",
    ctaLink: "/collections"
  },
  philosophy: {
    heading: "Berakar pada keberagaman, dibentuk dengan cara pandang hari ini.",
    paragraphs: [
      "Berangkat dari ragam cerita Nusantara, Narwasita menghadirkan tafsir yang lebih dekat dengan keseharian.",
      "Tidak ada ornamen yang dipaksakan. Hanya material terbaik, potongan yang relevan, dan narasi yang jujur pada setiap jahitannya."
    ]
  },
  featuredProductIds: ['nws-001', 'nws-002'],
  stores: {
    shopee: { url: "https://shopee.co.id/narwasita", enabled: true },
    tokopedia: { url: "https://tokopedia.com/narwasita", enabled: true },
    tiktok: { url: "https://tiktok.com/@narwasita", enabled: false }
  },
  verificationUrl: undefined, // Belum live sesuai PRD
  partnerContactUrl: "mailto:partner@narwasita.id",
  socials: [
    { name: "Instagram", url: "https://instagram.com/narwasita" },
    { name: "WhatsApp", url: "https://wa.me/628111222333" }
  ]
};

export const getSiteContent = () => siteContent;
