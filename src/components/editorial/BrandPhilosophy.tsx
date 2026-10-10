import { MotionReveal } from '../ui/MotionReveal';
import { EditorialFrame } from '../ui/EditorialFrame';
import type { SiteContent } from '../../types';
export const BrandPhilosophy=({content}:{content:SiteContent['philosophy']})=><section id="cerita" className="philosophy">
 <div className="philosophy__inner">
  <div className="philosophy__aside">
   <div className="philosophy__photo"><EditorialFrame src="/images/detail-print.jpg" alt="Detail grafis pada permukaan kaos" direction="left"/></div>
   <span className="philosophy__caption">Tentang bentuk dan cerita</span>
  </div>
  <div className="philosophy__story">
   <MotionReveal><h2>Kami percaya,<br/><em>cerita bisa</em><br/>ikut dikenakan.</h2></MotionReveal>
   <div className="philosophy__paragraphs">{content.paragraphs.map((p,i)=><MotionReveal key={i} delay={i*.12}><p>{p}</p></MotionReveal>)}</div>
   <a className="editorial-text-link" href="#koleksi">Lihat wujud ceritanya <span aria-hidden="true">↗</span></a>
  </div>
 </div>
</section>;