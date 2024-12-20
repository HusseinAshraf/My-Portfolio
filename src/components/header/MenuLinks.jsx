/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { MENULINKS } from '../../assets/constants';
import LIghtModeBtn from '../ui/LIghtModeBtn';
const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 70,
    opacity: 0,
  },
};
function MenuLinks({ setOpen }) {
  return (
    <motion.div
      className="links absolute flex h-full w-full flex-col items-center justify-center gap-6 md:gap-8 md:text-2xl"
      variants={variants}
    >
      {MENULINKS.map((item, index) => (
        <motion.a
          href={item.href}
          key={index}
          variants={itemVariants}
          whileHover={{ scale: 1.3, color: '#7309E2' }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className='text-[#7309E2]'>&lt;</span>{item.label}<span className='text-[#7309E2]'>/&gt;</span>
        </motion.a>
      ))}
      <LIghtModeBtn />
    </motion.div>
  );
}

export default MenuLinks;
