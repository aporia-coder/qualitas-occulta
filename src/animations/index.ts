import { Variants } from 'framer-motion'

export const fadeOut = (delay: number): Variants => {
  return {
    hidden: {
      opacity: 0,
      transition: {
        delay,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        ease: 'easeOut',
      },
    },
  }
}

export const reveal: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      ease: 'easeIn',
      delay: 0.3,
      duration: 2,
    },
  },
}

export const characterAnimation: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.2, 0.65, 0.3, 0.9],
      stagger: 1,
    },
  },
}

export const wordAnim: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.025,
      delayChildren: 0,
    },
  },
}

export const pageOut: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      y: 0,
    },
  },
  exit: { opacity: 0, transition: { duration: 1 } },
}
