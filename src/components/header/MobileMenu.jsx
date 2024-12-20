import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import ToggleButton from './ToggleButton';
import MenuLinks from './MenuLinks';

const variants = {
  open: {
    clipPath: 'circle(1200px at 10px 10px)',
    transition: {
      type: 'spring',
      stiffness: 20,
    },
  },
  closed: {
    clipPath: 'circle(25px at 140px 50px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

function MobileMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!menuRef?.current?.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
  }, [menuRef]);

  return (
    <motion.div
      className="sidebar top-[25px] flex w-[200px] flex-col items-center justify-center bg-gradient-to-b from-gray-800 via-gray-700 to-gray-900 text-white shadow-lg lg:hidden"
      initial="closed"
      animate={open ? 'open' : 'closed'}
      ref={menuRef}
    >
      <motion.div
        className="bg fixed bottom-0 right-0 top-[-14px] z-50 w-[200px] bg-opacity-70 backdrop-blur-xl"
        variants={variants}
      >
        <MenuLinks setOpen={setOpen} />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
}

export default MobileMenu;
