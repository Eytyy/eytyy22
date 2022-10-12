/** @jsxImportSource theme-ui */
import { motion } from 'framer-motion';

const variants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 1, duration: 0.2, y: { duration: 1 } },
  },
  hidden: {
    y: 20,
    opacity: 0,
    transition: { duration: 0.2, y: { duration: 1 } },
  },
};

export default function CloseBtn({ onClick }) {
  return (
    <motion.div
      variants={variants}
      sx={{
        variant: 'menu.link',
        position: 'absolute',
        bottom: 7,
        left: 0,
        cursor: 'pointer',
        zIndex: 2,
      }}
      onClick={onClick}
    >
      x close
    </motion.div>
  );
}
