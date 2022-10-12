/** @jsxImportSource theme-ui */
import { useProjectNavContext } from '@components/project/context';
import { motion } from 'framer-motion';

export default function MenuToggle() {
  const { toggleMenu } = useProjectNavContext();
  return (
    <div
      onClick={toggleMenu}
      sx={{
        position: 'fixed',
        bottom: [7],
        left: 0,
        zIndex: 3,
        variant: 'superGrid',

        cursor: 'pointer',
      }}
    >
      <motion.div
        sx={{
          gridColumn: '2/4',
          display: 'flex',
          alignItems: 'center',
          bg: 'accent',
          width: '32px',
          height: '32px',
          borderRadius: '50%',
        }}
        initial={{ backgroundColor: 'rgb(0,0,255)' }}
        whileTap={{
          backgroundColor: [
            'rgb(0,0,255)',
            'rgb(255,0,0)',
            'rgb(255,0,255)',
            'rgb(0,0,255)',
          ],
          scale: [1, 1.1, 1],
          transition: {
            repeat: Infinity,
          },
        }}
      ></motion.div>
    </div>
  );
}
