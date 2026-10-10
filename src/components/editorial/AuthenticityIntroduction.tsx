import type { SiteContent } from '../../types';
import { MotionReveal } from '../ui/MotionReveal';

export const AuthenticityIntroduction = ({ url }: { url: SiteContent['verificationUrl'] }) => <section id="keaslian" className="auth-section">
  <div className="auth-section__index">Mengenal produk</div>
  <MotionReveal><h2>Kenali apa<br/>yang kamu <em>kenakan.</em></h2></MotionReveal>
  <div className="auth-section__bottom"><p>Informasi mengenai identitas dan kode produk dapat diperiksa melalui kanal verifikasi Narwasita ketika layanan resminya tersedia. Pemindaian QR bukan jaminan bahwa kode tidak dapat disalin.</p>{url && <a href={url} target="_blank" rel="noopener noreferrer">Periksa kode produk ↗</a>}</div>
</section>;