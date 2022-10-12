/** @jsxImportSource theme-ui */
import { motion } from 'framer-motion';

import { useProjectNavContext } from '@components/project/context';

import List from './List';
import InfoLink from './InfoLink';
import LandingLink from './LandingLink';
import CloseBtn from './CloseBtn';

const navigation = {
  visible: {
    opacity: 1,
    zIndex: 11,
    transition: {
      when: 'beforeChildren',
    },
  },
  hidden: {
    opacity: 0,
    zIndex: -1,
    transition: {
      when: 'afterChildren',
    },
  },
};

const circles = {
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
  hidden: {
    transition: {
      staggerChildren: 0.3,
      staggerDirection: -1,
      delayChildren: 1,
    },
  },
};

const bigCircle = {
  visible: {
    scale: 6,
    x: '-50%',
    y: '-50%',
    transition: { duration: 1 },
  },
  hidden: {
    scale: 0,
    x: '-50%',
    y: '-50%',
    transition: { duration: 0.5 },
  },
};

const smallCircle = {
  visible: {
    scale: 1,
    x: '-50%',
    y: '-50%',
    transition: { duration: 1 },
  },
  hidden: {
    scale: 0,
    x: '-50%',
    y: '-50%',
    transition: {
      duration: 0.5,
    },
  },
};

export default function MainMenu({ data }) {
  const { projects } = data;
  const { menuVisible: visible, closeMenu } = useProjectNavContext();

  return (
    <motion.nav
      sx={{ variant: 'mainMenuFixed' }}
      variants={navigation}
      initial={false}
      animate={visible ? 'visible' : 'hidden'}
    >
      <motion.div sx={{ variant: 'menu.inner' }}>
        <List projects={projects} />
        <motion.div variants={circles}>
          <motion.div
            variants={bigCircle}
            sx={{ variant: 'menu.circle', bg: 'blue' }}
          />
          <motion.div
            variants={smallCircle}
            sx={{ variant: 'menu.circle', bg: 'white' }}
          />
        </motion.div>
        <CloseBtn onClick={closeMenu} />
        <LandingLink />
        <InfoLink />
      </motion.div>
    </motion.nav>
  );
}
