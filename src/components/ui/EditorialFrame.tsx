import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';

type Props = { src:string; alt:string; frameClassName?:string; position?:string; direction?:'left'|'right'|'up'; loading?:'eager'|'lazy' };
export function EditorialFrame({src,alt,frameClassName='',position='center',direction='up',loading='lazy'}:Props) {
 const ref=useRef<HTMLDivElement>(null);
 const reduced=useReducedMotion();
 const {scrollYProgress}=useScroll({target:ref,offset:['start end','end start']});
 const y=useTransform(scrollYProgress,[0,1],['-6%','6%']);
 const start=direction==='left'?'inset(0 100% 0 0)':direction==='right'?'inset(0 0 0 100%)':'inset(100% 0 0 0)';
 return <div ref={ref} className={'editorial-frame '+frameClassName}>
  <motion.div className="editorial-frame__reveal"
   initial={reduced?false:{clipPath:start}}
   whileInView={reduced?undefined:{clipPath:'inset(0 0 0 0)'}}
   viewport={{once:true,amount:.14}}
   transition={{duration:1.05,ease:[.16,1,.3,1]}}>
   <motion.img src={src} alt={alt} loading={loading} decoding="async"
    style={{objectPosition:position,y:reduced?'0%':y}}/>
  </motion.div>
 </div>
}