import { MotionReveal } from '../ui/MotionReveal';
import { SiteContent } from '../../types';

export const BrandPhilosophy = ({ content }: { content: SiteContent['philosophy'] }) => {
  return (
    <section id="cerita" className="py-24 md:py-32 bg-(--color-canvas) border-t border-(--color-stone)/20">
      <div className="container mx-auto px-6 md:px-12 max-w-[1440px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* Typographic Anchor */}
          <div className="md:col-span-5 md:col-start-2">
            <MotionReveal direction="up" amount={0.3}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display leading-[1.1] tracking-tight text-(--color-ink) max-w-lg">
                {content.heading}
              </h2>
            </MotionReveal>
          </div>

          {/* Narrative */}
          <div className="md:col-span-5 md:col-start-8">
            <div className="space-y-8">
              {content.paragraphs.map((paragraph, idx) => (
                <MotionReveal key={idx} direction="up" delay={idx * 0.15} amount={0.5}>
                  <p className="text-lg text-(--color-ink)/80 leading-relaxed">
                    {paragraph}
                  </p>
                </MotionReveal>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
