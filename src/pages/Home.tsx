import { SiteShell } from '../components/layout/SiteShell';
import { CampaignHero } from '../components/editorial/CampaignHero';
import { BrandPhilosophy } from '../components/editorial/BrandPhilosophy';
import { FeaturedLooks } from '../components/editorial/FeaturedLooks';
import { EditorialInterlude } from '../components/editorial/EditorialInterlude';
import { OfficialStoreLinks } from '../components/editorial/OfficialStoreLinks';
import { AuthenticityIntroduction } from '../components/editorial/AuthenticityIntroduction';
import { CraftedDetails } from '../components/editorial/CraftedDetails';
import { getSiteContent } from '../content/site';
import { getFeaturedProducts } from '../content/products';
import { MotionReveal } from '../components/ui/MotionReveal';
import { EditorialFrame } from '../components/ui/EditorialFrame';
export const Home=()=>{
 const content=getSiteContent();
 return <SiteShell>
  <CampaignHero content={content.campaign}/>
  <section className="editorial-statement" aria-labelledby="statement-heading">
   <div className="editorial-statement__grid">
    <div className="editorial-statement__side"><span className="editorial-statement__index">Narwasita / Cara pandang</span>
     <EditorialFrame src="/images/detail-fabric.jpg" alt="Tekstur kain dalam pencahayaan alami" direction="up"/></div>
    <MotionReveal className="editorial-statement__body">
     <h2 id="statement-heading">Cerita dari<br/>banyak tempat.<br/><em>Dibawa ke keseharian.</em></h2>
     <p>Ragam inspirasi dari Nusantara, ditafsirkan melalui bentuk yang terasa dekat dengan kehidupan hari ini.</p>
    </MotionReveal>
   </div>
  </section>
  <FeaturedLooks products={getFeaturedProducts()}/>
  <EditorialInterlude/>
  <BrandPhilosophy content={content.philosophy}/>
  <CraftedDetails/>
  <AuthenticityIntroduction url={content.verificationUrl}/>
  <OfficialStoreLinks stores={content.stores}/>
  {content.partnerContactUrl&&<section className="partner-invitation"><div className="partner-invitation__inner">
   <MotionReveal><h2>Sebuah cerita<br/><em>untuk dibagikan.</em></h2></MotionReveal>
   <div><p>Ingin menjalin kerja sama dengan Narwasita?</p><a href={content.partnerContactUrl}>Hubungi Narwasita <span aria-hidden="true">↗</span></a></div>
  </div></section>}
 </SiteShell>;
};