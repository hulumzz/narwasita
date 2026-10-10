import type { Product } from '../types';
// Editorial previews only. Do not infer stock, materials or SKU from campaign photographs.
export const products: Product[] = [
 { id:'nws-001', slug:'rupa-pesisir-tee-charcoal', title:'Rupa Pesisir / Charcoal', description:'Grafis gelap dengan karakter yang tegas.', images:[{src:'/images/look-01.jpg',alt:'Model mengenakan kaos grafis charcoal',width:896,height:1200}], variants:[], featured:true,status:'draft' },
 { id:'nws-002', slug:'akar-bumi-tee-moss', title:'Akar Bumi / Earth', description:'Warna hangat untuk gaya sehari-hari.', images:[{src:'/images/look-02.jpg',alt:'Model mengenakan kaos bernuansa bumi',width:896,height:1200}], variants:[], featured:true,status:'draft' }
];
export const getFeaturedProducts = () => products.filter(p=>p.featured);
export const getProduct = (slug:string) => products.find(p=>p.slug===slug);