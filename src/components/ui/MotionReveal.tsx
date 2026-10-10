import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
type Props={children:ReactNode;direction?:'up'|'left'|'right'|'none';delay?:number;className?:string;duration?:number;amount?:number|'some'|'all'};
export const MotionReveal=({children,direction='up',delay=0,className='',duration=.8,amount=.15}:Props)=>{
 const reduced=useReducedMotion();
 const x=direction==='left'?28:direction==='right'?-28:0;
 const y=direction==='up'?24:0;
 if(reduced)return <div className={className}>{children}</div>;
 return <motion.div className={className} initial={{opacity:0,x,y}} whileInView={{opacity:1,x:0,y:0}} viewport={{once:true,amount}} transition={{duration,delay,ease:[.2,.7,.2,1]}}>{children}</motion.div>;
};