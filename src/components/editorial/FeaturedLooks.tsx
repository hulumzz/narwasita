import { EditorialFrame } from '../ui/EditorialFrame';
import { MotionReveal } from '../ui/MotionReveal';
import type { Product } from '../../types';
export const FeaturedLooks=({products}:{products:Product[]})=>{
 if(!products.length)return null;
 return <section id="koleksi" className="looks-section" aria-labelledby="looks-title">
  <div className="looks-section__top"><MotionReveal><h2 id="looks-title">Pilihan Narwasita<span>.</span></h2></MotionReveal><p>Dua cara membawa karakter ke dalam keseharian.</p></div>
  <div className="looks-grid">{products.slice(0,2).map((p,i)=><article key={p.id} className={i===0?'look look--lead':'look look--offset'}>
   <a className="look__frame" href="/collections" aria-label={'Lihat pilihan '+p.title}>
    <EditorialFrame src={p.images[0].src} alt={p.images[0].alt} position={i===0?'50% 26%':'50% 35%'} direction={i===0?'left':'right'}/>
    <span className="look__view" aria-hidden="true">↗</span>
   </a>
   <div className="look__caption"><div><span>{String(i+1).padStart(2,'0')} / Pilihan</span><h3>{p.title}</h3></div><p>{p.description}</p></div>
  </article>)}</div>
  <div className="looks-section__ending"><a className="editorial-text-link" href="/collections">Lihat seluruh pilihan <span aria-hidden="true">↗</span></a></div>
 </section>;
};