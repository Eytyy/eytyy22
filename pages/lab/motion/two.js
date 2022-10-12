/** @jsxImportSource theme-ui */
import MotionLayout from '@components/motion/Layout';
import { motion } from 'framer-motion';
const items = [1, 2, 3];

export default function Two() {
  return (
    <MotionLayout>
      <h1>Two</h1>
      {items.map((item) => (
        <motion.div
          key={item}
          animate={{ x: 100 * item }}
          exit={{ x: 0 }}
          whileInView={{
            scale: 0.5,
            transition: { duration: 1 },
          }}
          viewport={{ amount: 'all' }}
          drag="x"
          dragConstraints={{ left: -100, right: 100 }}
          transition={{ ease: 'easeOut', duration: 1 }}
          sx={{
            width: '600px',
            height: '600px',
            bg: 'red',
            borderRadius: '50%',
            mb: 6,
          }}
        />
      ))}
    </MotionLayout>
  );
}
