import { MotionReveal } from '../ui/MotionReveal';

export const CraftedDetails = () => <section className="craft-section">
  <div className="craft-section__headline"><MotionReveal><h2>Lebih dekat<br/><em>pada detail.</em></h2></MotionReveal><p>Perhatikan permukaan kain, bentuk cetakan, dan bagaimana setiap elemen bekerja saat dikenakan.</p></div>
  <div className="craft-section__images"><figure><img src="/images/detail-print.jpg" alt="Foto dekat permukaan grafis pada kain" loading="lazy" width="900" height="900"/><figcaption>Grafis dan permukaan</figcaption></figure><figure><img src="/images/detail-fabric.jpg" alt="Foto dekat tekstur material kain" loading="lazy" width="900" height="900"/><figcaption>Tekstur material</figcaption></figure></div>
</section>;