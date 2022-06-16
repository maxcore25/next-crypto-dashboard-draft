export const fallVariants = {
  hidden: { y: '-100%' },
  visible: {
    y: 0,
    // transition: {
    //   duration: 0.5,
    // },
  },
};

export const scaleAnimationVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

export const listVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: i => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.3,
    },
  }),
};

export const listContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.3,
    },
  },
};
