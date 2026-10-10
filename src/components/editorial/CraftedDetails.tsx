import { MotionReveal } from '../ui/MotionReveal';

export const CraftedDetails = () => {
  return (
    <section className="py-24 md:py-32 bg-(--color-ink) text-(--color-white)">
      <div className="container mx-auto px-6 md:px-12 max-w-[1440px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          {/* Text Area */}
          <div className="md:col-span-4 md:col-start-2">
            <MotionReveal direction="up" amount={0.3}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display tracking-tight mb-8">
                Tegas dalam rupa, halus pada kulit.
              </h2>
              <div className="space-y-6 text-(--color-white)/70 leading-relaxed">
                <p>
                  Menggunakan bahan Heavyweight Cotton 235gsm pilihan yang sejuk dan memiliki daya tahan luar biasa, menjaga struktur pakaian meskipun dikenakan setiap hari.
                </p>
                <p>
                  Penerapan grafis dengan teknik sablon kualitas premium, menghasilkan tekstur visual yang menyatu dengan serat kain dan tahan luntur.
                </p>
              </div>
            </MotionReveal>
          </div>

          {/* Image Grid Area */}
          <div className="md:col-span-6 md:col-start-7 grid grid-cols-2 gap-4 md:gap-8">
            <MotionReveal direction="up" delay={0.2} amount={0.2}>
              <div className="aspect-[4/5] bg-(--color-canvas)/10 overflow-hidden mt-12 md:mt-24">
                <img 
                  src="/images/detail-fabric.jpg" 
                  alt="Detail tekstur kain katun premium" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </MotionReveal>
            <MotionReveal direction="up" delay={0.4} amount={0.2}>
              <div className="aspect-[4/5] bg-(--color-canvas)/10 overflow-hidden">
                <img 
                  src="/images/detail-print.jpg" 
                  alt="Detail teknik sablon Narwasita" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </MotionReveal>
          </div>

        </div>
      </div>
    </section>
  );
};
