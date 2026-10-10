import { MotionReveal } from '../ui/MotionReveal';
import { SiteContent } from '../../types';
import { ScanLine } from 'lucide-react';

export const AuthenticityIntroduction = ({ url }: { url: SiteContent['verificationUrl'] }) => {
  return (
    <section className="py-24 md:py-32 bg-(--color-ink) text-(--color-white)">
      <div className="container mx-auto px-6 md:px-12 max-w-[1440px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="order-2 md:order-1">
            <MotionReveal direction="right" amount={0.3}>
              {/* Abstract representation of scanning/authenticity instead of literal generic QR */}
              <div className="aspect-square max-w-sm mx-auto md:ml-0 bg-(--color-canvas)/10 border border-(--color-white)/20 flex items-center justify-center p-12">
                <div className="relative w-full h-full border border-(--color-white)/30 flex items-center justify-center">
                   <ScanLine size={64} className="text-(--color-white)/50" strokeWidth={1} />
                   {/* Scanning line animation */}
                   <div className="absolute top-0 left-0 w-full h-[2px] bg-(--color-copper)/80 blur-sm animate-[pulse_3s_ease-in-out_infinite]"></div>
                </div>
              </div>
            </MotionReveal>
          </div>

          <div className="order-1 md:order-2">
            <MotionReveal direction="up">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display tracking-tight mb-6">
                Verifikasi Keaslian
              </h2>
              <p className="text-(--color-white)/70 leading-relaxed mb-8 text-lg max-w-md">
                Setiap produk asli Narwasita dilengkapi dengan kode QR unik pada label. Pindai kode tersebut untuk memastikan produk yang Anda miliki adalah resmi dan mempelajari perjalanan pembuatannya.
              </p>
              
              {url ? (
                <a 
                  href={url}
                  className="inline-flex items-center text-sm font-medium tracking-wider text-(--color-white) hover:text-(--color-copper) transition-colors pb-1 border-b border-(--color-white) hover:border-(--color-copper)"
                >
                  Periksa Kode Produk
                </a>
              ) : (
                <p className="text-sm font-medium tracking-wider text-(--color-copper)">
                  Layanan verifikasi sedang dipersiapkan.
                </p>
              )}
            </MotionReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
