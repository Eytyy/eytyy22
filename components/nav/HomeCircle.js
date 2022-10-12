/** @jsxImportSource theme-ui */
import { motion } from 'framer-motion';

const variants = {
  initial: { scale: 0, x: '-50%', y: '-50%' },
  animate: {
    scale: 1,
    x: '-50%',
    y: '-50%',
    backgroundColor: [
      'rgb(255,0,255)',
      'rgb(0,255,255)',
      'rgb(255,255,255)',
    ],
    transition: {
      duration: 1,
      backgroundColor: {
        duration: 5,
        repeat: Infinity,
        repeatType: 'reverse',
      },
    },
  },
  exit: {
    scale: 20,
    transition: {
      duration: 1,
    },
  },
};

export default function HomeCircle() {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{}}
      sx={{
        width: '0vh',
        height: '0vh',
        position: 'absolute',
        top: '50%',
        left: '50%',
        bg: 'white',
        width: '33.33vh',
        height: '33.33vh',
        borderRadius: '100%',
        transformOrigin: 'center',
      }}
    />
  );
}
