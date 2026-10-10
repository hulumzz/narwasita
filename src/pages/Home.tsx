import { SiteShell } from '../components/layout/SiteShell';
import { CampaignHero } from '../components/editorial/CampaignHero';
import { BrandPhilosophy } from '../components/editorial/BrandPhilosophy';
import { FeaturedLooks } from '../components/editorial/FeaturedLooks';
import { OfficialStoreLinks } from '../components/editorial/OfficialStoreLinks';
import { AuthenticityIntroduction } from '../components/editorial/AuthenticityIntroduction';
import { getSiteContent } from '../content/site';
import { getFeaturedProducts } from '../content/products';

import { CraftedDetails } from '../components/editorial/CraftedDetails';

export const Home = () => {
  const content = getSiteContent();
  const featuredProducts = getFeaturedProducts();

  return (
    <SiteShell>
      <CampaignHero content={content.campaign} />
      
      {/* Editorial Statement (Merged here for simplicity) */}
      <section className="py-24 md:py-32 bg-(--color-paper)">
        <div className="container mx-auto px-6 md:px-12 max-w-[1440px]">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-medium leading-snug tracking-tight text-(--color-ink) max-w-3xl ml-auto md:mr-12 border-l-2 border-(--color-copper) pl-6 md:pl-12">
            Cerita dari banyak tempat. Dibawa ke keseharian.
          </h2>
        </div>
      </section>

      <FeaturedLooks products={featuredProducts} />
      <CraftedDetails />
      <BrandPhilosophy content={content.philosophy} />
      
      <AuthenticityIntroduction url={content.verificationUrl} />
      <OfficialStoreLinks stores={content.stores} />
      
      {/* Partner Invitation (Merged here) */}
      <section className="py-24 bg-(--color-canvas) text-center border-t border-(--color-stone)/20">
        <div className="container mx-auto px-6 max-w-2xl">
          <h2 className="text-3xl font-display tracking-tight mb-6">Tumbuh Bersama Narwasita</h2>
          <p className="text-(--color-stone) mb-8">
            Buka peluang usaha dengan menjadi mitra dan distributor resmi kami di kota Anda.
          </p>
          <a 
            href={content.partnerContactUrl}
            className="inline-block px-8 py-3 bg-transparent border border-(--color-ink) text-(--color-ink) hover:bg-(--color-ink) hover:text-(--color-white) transition-colors"
          >
            Ajukan Kemitraan
          </a>
        </div>
      </section>
    </SiteShell>
  );
};
