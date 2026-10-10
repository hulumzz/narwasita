import { motion, useReducedMotion } from 'framer-motion';
import { SiteContent } from '../../types';

export const CampaignHero = ({ content }: { content: SiteContent['campaign'] }) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative w-full h-[90vh] min-h-[600px] flex items-end md:items-center overflow-hidden bg-(--color-canvas)">
      {/* Background Image Container */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: prefersReducedMotion ? 1 : 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <picture>
          <source media="(max-width: 767px)" srcSet={content.mobileImage} />
          <img 
            src={content.image} 
            alt="Narwasita Campaign" 
            className="w-full h-full object-cover object-[65%_30%] md:object-[65%_30%]"
            fetchPriority="high"
          />
        </picture>
        {/* Subtle scrim for text readability if needed */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 md:bg-gradient-to-r md:from-black/40 md:to-transparent"></div>
      </motion.div>

      {/* Content Overlay */}
      <div className="container mx-auto px-6 md:px-12 pb-24 md:pb-0 relative z-10 max-w-[1440px]">
        <div className="max-w-xl text-white">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-display leading-[1.05] tracking-tight mb-6"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            {content.heading}
          </motion.h1>
          
          {content.body && (
            <motion.p 
              className="text-lg md:text-xl text-white/90 mb-8 max-w-md leading-relaxed"
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              {content.body}
            </motion.p>
          )}

          {content.ctaLabel && content.ctaLink && (
            <motion.div
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <a 
                href={content.ctaLink}
                className="inline-block bg-(--color-white) text-(--color-ink) px-8 py-4 font-medium tracking-wide hover:bg-(--color-paper) transition-colors rounded-sm"
              >
                {content.ctaLabel}
              </a>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};
