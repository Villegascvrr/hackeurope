import { motion, useInView, useReducedMotion, Variants } from "framer-motion";
import { useRef, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.25, 0.1, 0.25, 1.0],
      delay: i * 0.1,
    },
  }),
};

const ScrollReveal = ({ children, className = "", delay = 0 }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1.0], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* Container that staggers its children */
interface StaggerProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
}

const staggerContainer: Variants = {
  hidden: {},
  visible: (stagger: number) => ({
    transition: { staggerChildren: stagger, delayChildren: 0.05 },
  }),
};

export const StaggerReveal = ({ children, className = "", stagger = 0.1 }: StaggerProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={staggerContainer}
      custom={stagger}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
};

/* Individual stagger child */
export const StaggerItem = ({ children, className = "", index = 0 }: { children: ReactNode; className?: string; index?: number }) => (
  <motion.div className={className} variants={item} custom={index}>
    {children}
  </motion.div>
);

export default ScrollReveal;
