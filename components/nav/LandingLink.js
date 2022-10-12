/** @jsxImportSource theme-ui */
import Link from 'next/link';
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

export default function LandingLink() {
  return (
    <motion.div
      sx={{ position: 'absolute', top: 7, right: 0, zIndex: 2 }}
      variants={variants}
    >
      <Link href="/blog" passHref>
        <a sx={{ variant: 'menu.link' }}>blog &rarr;</a>
      </Link>
    </motion.div>
  );
}
