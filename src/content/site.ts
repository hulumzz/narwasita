import type { SiteContent } from '../types';
export const siteContent:SiteContent={
 campaign:{
  heading:'Nusantara, dipakai dengan cara baru.',
  body:'Cerita, karakter, dan bentuk Nusantara dalam pakaian sehari-hari.',
  // Portrait with graphic tee. Replace with approved official campaign photos before production claims.
  image:'/images/look-01.jpg',mobileImage:'/images/look-01.jpg',
  ctaLabel:'Lihat pilihan Narwasita',ctaLink:'#koleksi'
 },
 philosophy:{
  heading:'Cerita yang bergerak bersama kita.',
  paragraphs:[
   'Berangkat dari ragam cerita Nusantara, Narwasita menghadirkan tafsir visual yang lebih dekat dengan keseharian.',
   'Bukan soal mengenakan simbol sebanyak mungkin. Kami tertarik pada bagaimana makna, bentuk, dan karakter bertemu dalam satu pakaian.'
  ]
 },
 featuredProductIds:['nws-001','nws-002'],
 stores:{},verificationUrl:undefined,partnerContactUrl:undefined,socials:[]
};
export const getSiteContent=()=>siteContent;