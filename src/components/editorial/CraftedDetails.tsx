import { MotionReveal } from '../ui/MotionReveal';
import { EditorialFrame } from '../ui/EditorialFrame';
export const CraftedDetails=()=><section className="craft-section" aria-labelledby="craft-title">
 <div className="craft-section__headline"><MotionReveal><h2 id="craft-title">Lihat lebih<br/><em>dekat.</em></h2></MotionReveal><p>Tekstur, grafis, dan hal-hal kecil yang memberi sebuah pakaian karakternya sendiri.</p></div>
 <div className="craft-section__images">
  <figure className="craft-section__print"><EditorialFrame src="/images/detail-print.jpg" alt="Foto detail grafis pada permukaan kain" direction="left"/><figcaption><span>01</span> Permukaan grafis</figcaption></figure>
  <figure className="craft-section__fabric"><EditorialFrame src="/images/detail-fabric.jpg" alt="Foto detail tekstur material kain" direction="right"/><figcaption><span>02</span> Tekstur material</figcaption></figure>
 </div>
</section>;