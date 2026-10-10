import type { SiteContent } from '../types';

export const siteContent: SiteContent = {
 campaign: { heading: 'Nusantara, dipakai dengan cara baru.', body: 'Narwasita merangkai cerita, karakter, dan bentuk ke dalam pakaian sehari-hari.', image: '/images/hero-desktop.jpg', mobileImage: '/images/hero-mobile.jpg', ctaLabel: 'Lihat pilihan Narwasita', ctaLink: '#koleksi' },
 philosophy: { heading: 'Berakar pada keberagaman, dibentuk dengan cara pandang hari ini.', paragraphs: ['Berangkat dari ragam cerita Nusantara, Narwasita menghadirkan tafsir yang lebih dekat dengan keseharian.', 'Bentuk dan cerita berjalan beriringan. Tidak perlu ornamen berlebihan untuk mengingat dari mana inspirasi datang.'] },
 featuredProductIds: ['nws-001','nws-002'],
 // Unverified shop URLs must never be presented as official destinations.
 stores: {},
 verificationUrl: undefined,
 partnerContactUrl: undefined,
 socials: []
};
export const getSiteContent = () => siteContent;