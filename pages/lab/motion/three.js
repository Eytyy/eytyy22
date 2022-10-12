/** @jsxImportSource theme-ui */
import MotionLayout from '@components/motion/Layout';
import { motion } from 'framer-motion';
import { useState } from 'react';

const parent = {
  initial: {
    backgroundColor: 'rgb(0,0,255)',
    width: '600px',
    height: '600px',
    borderRadius: '50%',
    x: '20%',
  },
  visible: {
    backgroundColor: 'rgb(255,0,0)',
    x: '50%',
    transition: {
      duration: 2,
      delayChildren: 2,
      staggerChildren: 1,
    },
  },
  exit: {
    x: '20%',
    transition: {
      duration: 2,
      afterChildren: 4,
    },
  },
};

const child = {
  initial: {
    x: '0%',
    width: '0px',
    height: '0px',
    borderRadius: '50%',
    backgroundColor: 'rgb(0,255,255)',
  },
  visible: (i) => ({
    width: '100px',
    height: '100px',
    x: `${i}`,
    transition: {
      duration: 1,
    },
  }),
  exit: {
    width: '0px',
    height: '0px',
    transition: {
      duration: 2,
    },
  },
};

export default function Three() {
  return (
    <MotionLayout>
      <h1>Three</h1>
      <motion.div
        custom={'-100%'}
        sx={{ variant: 'lab.motion.three.parent' }}
        initial="initial"
        animate="visible"
        exit="exit"
        variants={parent}
      >
        <motion.div variants={child} custom={'-50%'} />
        <motion.div variants={child} custom={'50%'} />
      </motion.div>
    </MotionLayout>
  );
}
