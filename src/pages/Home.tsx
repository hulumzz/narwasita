import { SiteShell } from '../components/layout/SiteShell';
import { CampaignHero } from '../components/editorial/CampaignHero';
import { BrandPhilosophy } from '../components/editorial/BrandPhilosophy';
import { FeaturedLooks } from '../components/editorial/FeaturedLooks';
import { OfficialStoreLinks } from '../components/editorial/OfficialStoreLinks';
import { AuthenticityIntroduction } from '../components/editorial/AuthenticityIntroduction';
import { CraftedDetails } from '../components/editorial/CraftedDetails';
import { getSiteContent } from '../content/site';
import { getFeaturedProducts } from '../content/products';
import { MotionReveal } from '../components/ui/MotionReveal';

export const Home = () => {
  const content = getSiteContent();
  return <SiteShell>
    <CampaignHero content={content.campaign} />
    <section className="editorial-statement">
      <div className="editorial-statement__grid">
        <span className="editorial-statement__index">Narwasita / Sebuah cara pandang</span>
        <MotionReveal className="editorial-statement__body">
          <h2>Cerita dari banyak tempat.<br/><em>Dibawa ke keseharian.</em></h2>
          <p>Kami melihat Nusantara sebagai sumber cerita yang terus bergerak. Narwasita membawanya ke dalam pakaian untuk hari ini.</p>
        </MotionReveal>
      </div>
    </section>
    <FeaturedLooks products={getFeaturedProducts()} />
    <BrandPhilosophy content={content.philosophy} />
    <CraftedDetails />
    <AuthenticityIntroduction url={content.verificationUrl} />
    <OfficialStoreLinks stores={content.stores} />
    {content.partnerContactUrl && <section className="partner-invitation">
      <div className="partner-invitation__inner">
        <MotionReveal><h2>Sebuah cerita<br/><em>untuk dibagikan.</em></h2></MotionReveal>
        <div><p>Ingin menjalin kerja sama dengan Narwasita?</p><a href={content.partnerContactUrl}>Hubungi Narwasita <span aria-hidden="true">↗</span></a></div>
      </div>
    </section>}
  </SiteShell>;
};