export const pageWipeVariants = {
  initial: {
    clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
  },
  animate: {
    clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    clipPath: "polygon(0 0%, 100% 0%, 100% 0%, 0 0%)",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};

export const fadeUpVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
