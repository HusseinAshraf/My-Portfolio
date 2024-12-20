import { motion } from 'framer-motion';

const circleVariants = {
  animate01: {
    scale: [1, 1.2, 1],
    x: [0, 150, 0],
    y: [0, 70, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
  animate02: {
    scale: [1, 1.3, 1],
    x: [0, -120, 0],
    y: [0, 100, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
  animate03: {
    scale: [1, 1.4, 1],
    x: [0, 200, 0],
    y: [0, -90, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

function BackGround() {
  return (
    <div className="pointer-events-none fixed left-0 top-0 z-10 flex h-full w-full items-center justify-center overflow-hidden opacity-60 blur-[100px] filter">
      <motion.div
        className="absolute h-[280px] w-[380px] rounded-full bg-gradient-to-r from-[#7309E2] to-[#4C00D4]"
        variants={circleVariants}
        animate="animate01"
      ></motion.div>
      <motion.div
        className="absolute h-[300px] w-[400px] rounded-full bg-gradient-to-r from-[#2D4B88] to-[#7309E2]"
        variants={circleVariants}
        animate="animate02"
      ></motion.div>
      <motion.div
        className="absolute h-[320px] w-[420px] rounded-full bg-gradient-to-r from-[#3D92C1] to-[#7309E2]"
        variants={circleVariants}
        animate="animate03"
      ></motion.div>
    </div>
  );
}

export default BackGround;
