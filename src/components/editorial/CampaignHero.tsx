import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import type { SiteContent } from '../../types';
export const CampaignHero=({content}:{content:SiteContent['campaign']})=>{
 const hero=useRef<HTMLElement>(null);const reduced=useReducedMotion();
 const {scrollYProgress}=useScroll({target:hero,offset:['start start','end start']});
 const photoY=useTransform(scrollYProgress,[0,1],['0%','12%']);
 const titleY=useTransform(scrollYProgress,[0,1],['0%','-14%']);
 return <section ref={hero} className="campaign-hero" aria-labelledby="campaign-heading">
  <div className="campaign-hero__image" aria-hidden="true">
   <motion.div className="campaign-hero__photo" style={{y:reduced?'0%':photoY}}>
    <picture>{content.mobileImage&&<source media="(max-width: 767px)" srcSet={content.mobileImage}/>}
    <img src={content.image} alt="" fetchPriority="high" decoding="async"/></picture>
   </motion.div>
  </div>
  <div className="campaign-hero__veil" aria-hidden="true"/>
  <div className="campaign-hero__inner">
   <motion.div className="campaign-hero__copy" style={{y:reduced?'0%':titleY}}>
    <motion.h1 id="campaign-heading" initial={reduced?false:{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:.95,ease:[.19,1,.22,1]}}>
     Nusantara,<br/><em>dipakai</em> dengan<br/>cara baru.
    </motion.h1>
    <motion.div className="campaign-hero__bottom" initial={reduced?false:{opacity:0,y:22}} animate={{opacity:1,y:0}} transition={{duration:.8,delay:.24,ease:[.19,1,.22,1]}}>
     <p>{content.body}</p>
     <a className="campaign-hero__link" href="#koleksi">Lihat pilihan Narwasita <span aria-hidden="true">↗</span></a>
    </motion.div>
   </motion.div>
   <div className="campaign-hero__index" aria-hidden="true"><span>NARWASITA / CAMPAIGN</span><span>GULIR UNTUK MELIHAT ↓</span></div>
  </div>
 </section>;
};