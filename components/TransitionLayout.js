/** @jsxImportSource theme-ui */
import { motion } from 'framer-motion';

const variants = {
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function TransitionLayout({ children }) {
  return (
    <motion.main
      sx={{ opacity: 0 }}
      variants={variants}
      initial="false"
      animate="enter"
      exit="exit"
      transition={{ duration: 1 }}
    >
      {children}
    </motion.main>
  );
}
