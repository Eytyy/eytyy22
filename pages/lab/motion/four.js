/** @jsxImportSource theme-ui */
import MotionLayout from '@components/motion/Layout';
import { motion } from 'framer-motion';
import { useState } from 'react';

const item = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export default function Three() {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen((o) => !o);
  }

  return (
    <MotionLayout>
      <h1>Four</h1>
      <motion.nav
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        className="menu"
      >
        <motion.div
          onClick={toggle}
          sx={{
            bg: 'blue',
            color: 'white',
            width: '100px',
            p: 2,
            borderRadius: '5px',
            textAlign: 'center',
            textTransform: 'uppercase',
            fontFamily: 'heading',
            cursor: 'button',
          }}
          initial={{ scale: 1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          menu
        </motion.div>
        <motion.ul
          variants={{ open: { opacity: 1 }, closed: { opacity: 0 } }}
          transition={{
            delayChildren: 0.3,
            duration: 0.3,
            staggerChildren: 0.05,
          }}
          sx={{
            listStyle: 'none',
            background: 'blue',
            width: '200px',
            p: 2,
            color: '#FFF',
            borderRadius: '5px',
          }}
        >
          <motion.li sx={{ mb: 2 }} variants={item}>
            Work
          </motion.li>
          <motion.li sx={{ mb: 2 }} variants={item}>
            About
          </motion.li>
          <motion.li sx={{ mb: 2 }} variants={item}>
            Contact
          </motion.li>
        </motion.ul>
      </motion.nav>
    </MotionLayout>
  );
}
