import { MotionReveal } from '../ui/MotionReveal';
import { Product } from '../../types';

export const FeaturedLooks = ({ products }: { products: Product[] }) => {
  if (!products || products.length === 0) return null;

  return (
    <section className="py-24 md:py-32 bg-(--color-paper)">
      <div className="container mx-auto px-6 md:px-12 max-w-[1440px]">
        <MotionReveal direction="up">
          <h2 className="text-3xl font-display tracking-tight mb-16">Pilihan Editor</h2>
        </MotionReveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-24 md:gap-x-12 lg:gap-x-16">
          {products.map((product, idx) => {
            const isEven = idx % 2 === 0;
            const primaryImage = product.images[0];
            const secondaryImage = product.images[1];

            return (
              <div key={product.id} className="md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
                {/* Image Area */}
                <div className={`md:col-span-7 ${isEven ? 'md:order-1' : 'md:order-2 md:col-start-6'}`}>
                  <MotionReveal direction={isEven ? 'left' : 'right'} amount={0.2}>
                    <div className="relative aspect-[3/4] md:aspect-[4/5] bg-(--color-canvas) overflow-hidden group">
                      <img 
                        src={primaryImage?.src} 
                        alt={primaryImage?.alt} 
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  </MotionReveal>
                </div>

                {/* Text and Secondary Detail Area */}
                <div className={`md:col-span-4 ${isEven ? 'md:order-2 md:col-start-9' : 'md:order-1 md:col-start-2'}`}>
                  <div className="flex flex-col h-full justify-center">
                    <MotionReveal direction="up" delay={0.2}>
                      <h3 className="text-2xl font-display tracking-tight mb-4">{product.title}</h3>
                      <p className="text-(--color-stone) mb-8 leading-relaxed">
                        {product.description}
                      </p>
                      <a 
                        href={`/products/${product.slug}`} 
                        className="inline-flex items-center text-sm font-medium uppercase tracking-wider text-(--color-ink) hover:text-(--color-copper) transition-colors pb-1 border-b border-(--color-ink) hover:border-(--color-copper) self-start"
                      >
                        Lihat {product.collectionSlug?.replace('-', ' ') || 'Produk'}
                      </a>
                    </MotionReveal>

                    {/* Secondary Editorial Image (Hidden on small mobile if needed, but PRD says no hidden content) */}
                    {secondaryImage && (
                      <MotionReveal direction="up" delay={0.4} className="mt-16 hidden md:block">
                        <div className="aspect-square bg-(--color-canvas) overflow-hidden w-2/3 md:w-full ml-auto">
                           <img 
                            src={secondaryImage.src} 
                            alt={secondaryImage.alt} 
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      </MotionReveal>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
