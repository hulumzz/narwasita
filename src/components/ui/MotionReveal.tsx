import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  direction?: 'up' | 'left' | 'right' | 'none';
  delay?: number;
  className?: string;
  duration?: number;
  amount?: number | 'some' | 'all';
};

export const MotionReveal = ({ 
  children, 
  direction = 'up', 
  delay = 0, 
  className = '',
  duration = 0.8,
  amount = 0.2
}: RevealProps) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const variants: any = {
    hidden: { 
      opacity: 0,
      y: direction === 'up' ? 24 : 0,
      x: direction === 'left' ? 24 : direction === 'right' ? -24 : 0
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      x: 0,
      transition: {
        duration,
        ease: "easeOut",
        delay
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};
