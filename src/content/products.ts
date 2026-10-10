import type { Product } from '../types';
// Editorial looks are examples until the product owner approves names, SKUs and availability.
// Do not publish invented shop links, prices or material specifications.
export const products: Product[]=[
 {id:'nws-001',slug:'look-01-charcoal',title:'Look 01 / Charcoal',
  description:'Kaos grafis gelap dalam potongan kasual.',
  images:[{src:'/images/look-01.jpg',alt:'Model mengenakan kaos grafis bernuansa charcoal',width:896,height:1200}],
  variants:[],featured:true,status:'draft'},
 {id:'nws-002',slug:'look-02-earth',title:'Look 02 / Earth',
  description:'Kaos warna bumi dipadukan dengan warna terang.',
  images:[{src:'/images/look-02.jpg',alt:'Model mengenakan kaos warna bumi dengan celana terang',width:896,height:1200}],
  variants:[],featured:true,status:'draft'}
];
export const getFeaturedProducts=()=>products.filter(p=>p.featured);
export const getProduct=(slug:string)=>products.find(p=>p.slug===slug);