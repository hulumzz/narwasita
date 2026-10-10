import { MotionReveal } from '../ui/MotionReveal';
import { SiteContent } from '../../types';
import { ShoppingBag } from 'lucide-react';

export const OfficialStoreLinks = ({ stores }: { stores: SiteContent['stores'] }) => {
  const availableStores = Object.entries(stores).filter(([_, config]) => config.enabled);

  if (availableStores.length === 0) return null;

  return (
    <section id="toko-resmi" className="py-24 bg-(--color-paper)">
      <div className="container mx-auto px-6 md:px-12 max-w-[1440px]">
        <MotionReveal direction="up" className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display tracking-tight mb-4">
            Temukan Narwasita di toko resmi.
          </h2>
          <p className="text-(--color-stone)">
            Dapatkan koleksi asli kami melalui mitra marketplace terpercaya.
          </p>
        </MotionReveal>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          {availableStores.map(([platform, config], idx) => (
            <MotionReveal key={platform} direction="up" delay={idx * 0.1}>
              <a
                href={config.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 bg-(--color-ink) text-(--color-white) hover:bg-(--color-copper) transition-colors min-w-[200px] justify-center group"
                aria-label={`Buka toko resmi di ${platform}`}
              >
                <ShoppingBag size={18} className="group-hover:-translate-y-0.5 transition-transform" />
                <span className="font-medium tracking-wide capitalize">
                  {platform}
                </span>
              </a>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
