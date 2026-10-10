import { motion, useReducedMotion } from 'framer-motion';
import type { SiteContent } from '../../types';

export const CampaignHero = ({ content }: { content: SiteContent['campaign'] }) => {
  const reduced = useReducedMotion();
  return (
    <section className="campaign-hero" aria-labelledby="campaign-heading">
      <div className="campaign-hero__image" aria-hidden="true">
        <picture>
          <source media="(max-width: 767px)" srcSet={content.mobileImage} />
          <img src={content.image} alt="" width={1600} height={900} fetchPriority="high" decoding="async" />
        </picture>
      </div>
      <div className="campaign-hero__veil" />
      <div className="campaign-hero__inner">
        <motion.div className="campaign-hero__copy" initial={reduced ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .85, ease: [.2,.7,.2,1] }}>
          <h1 id="campaign-heading">Nusantara,<br/><em>dipakai</em> dengan<br/>cara baru.</h1>
          <p>{content.body}</p>
          <a className="campaign-hero__link" href="#koleksi">Lihat pilihan Narwasita <span aria-hidden="true">↗</span></a>
        </motion.div>
        <div className="campaign-hero__index" aria-hidden="true"><span>01 / Narwasita</span><span>Scroll untuk melihat koleksi ↓</span></div>
      </div>
    </section>
  );
};