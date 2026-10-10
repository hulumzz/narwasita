import { MotionReveal } from '../ui/MotionReveal';
import type { Product } from '../../types';

export const FeaturedLooks = ({ products }: { products: Product[] }) => {
  if (!products?.length) return null;
  return <section id="koleksi" className="looks-section">
    <div className="looks-section__top">
      <h2>Pilihan Narwasita<span>.</span></h2>
      <p>Dua interpretasi gaya dalam keseharian.</p>
    </div>
    <div className="looks-grid">
      {products.slice(0, 2).map((product, i) => <article className={i === 0 ? 'look look--lead' : 'look look--offset'} key={product.id}>
        <MotionReveal direction={i === 0 ? 'left' : 'right'} amount={0.1}>
          <a className="look__frame" href="/collections" aria-label={`Lihat informasi ${product.title}`}>
            <img src={product.images[0]?.src} alt={product.images[0]?.alt} width={product.images[0]?.width} height={product.images[0]?.height} loading="lazy" decoding="async" />
            <span className="look__view" aria-hidden="true">↗</span>
          </a>
        </MotionReveal>
        <div className="look__caption"><div><span>0{i+1}</span><h3>{product.title.replace(/ — /g,' / ')}</h3></div><p>{product.description}</p></div>
      </article>)}
    </div>
  </section>;
};