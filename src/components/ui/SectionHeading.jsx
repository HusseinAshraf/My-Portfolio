
/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';

const headingVariants = {
  hidden: { opacity: 0, y: 100, x: -150 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.4, ease: 'easeInOut' },
  },
};

function SectionHeading({ children }) {
  return (
    <motion.h1
      className="mb-9 text-center font-new-mono text-[28px] tracking-wider md:text-start md:text-4xl lg:text-5xl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={headingVariants}
    >
      {children}
    </motion.h1>
  );
}

export default SectionHeading;
