export const fallVariants = {
  hidden: { y: '-100%' },
  visible: {
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const scaleAnimationVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 0.5,
    },
  },
};
