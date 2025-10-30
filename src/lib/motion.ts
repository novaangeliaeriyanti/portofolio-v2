import { easeOut, easeIn, MotionProps } from 'framer-motion';

export const fadeInUp: MotionProps = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true },
  variants: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
  },
};

export const fadeIn: MotionProps = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true },
  variants: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, ease: easeOut } },
  },
};

export const fadeScale: MotionProps = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true },
  variants: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: easeOut },
    },
  },
};

export const staggerContainer: MotionProps = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true },
  variants: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  },
};

export const heroBackgroundVariants = {
  enter: { opacity: 0, scale: 0.95 },
  center: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: easeOut },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.2, ease: easeIn },
  },
};

export const heroContentVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
};
