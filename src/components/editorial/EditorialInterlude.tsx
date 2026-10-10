import { motion, useReducedMotion } from 'framer-motion';
import { EditorialFrame } from '../ui/EditorialFrame';
import { MotionReveal } from '../ui/MotionReveal';
export function EditorialInterlude() {
 const reduced=useReducedMotion();
 return <section className="interlude" aria-labelledby="interlude-title">
  <div className="interlude__stage">
   <EditorialFrame src="/images/look-02.jpg" alt="Model mengenakan kaos bernuansa bumi dalam cahaya alami" position="52% 35%" direction="right" frameClassName="interlude__photograph"/>
   <div className="interlude__shade" aria-hidden="true"/>
   <div className="interlude__content">
    <MotionReveal direction="left"><h2 id="interlude-title">Berbeda rupa.<br/><em>Satu cerita.</em></h2></MotionReveal>
    <motion.p initial={reduced?false:{opacity:0,y:22}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.4}} transition={{duration:.8}}>
     Mengambil inspirasi dari tempat kita berpijak, tanpa berhenti di masa lalu.
    </motion.p>
   </div>
  </div>
 </section>;
}