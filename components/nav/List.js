/** @jsxImportSource theme-ui */

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useProjectNavContext } from '@components/project/context';

const list = {
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 1,
    },
  },
  hidden: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
};

const item = {
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.2, y: { duration: 1 } },
  },
  hidden: {
    y: 20,
    opacity: 0,
    transition: { duration: 0.2, y: { duration: 1 } },
  },
};

export default function List({ projects, type = 'home' }) {
  const { closeMenu } = useProjectNavContext();

  if (!projects) return null;

  return (
    <div sx={{ position: 'absolute', top: 7, left: 0, zIndex: 2 }}>
      <motion.div variants={list} sx={{ maxWidth: '400px' }}>
        {projects.map(
          ({
            title,
            _id,
            slug,
            year,
            status,
            launchDate,
            format,
            link,
          }) => (
            <motion.div variants={item} key={_id} sx={{ mb: 1 }}>
              <div onClick={closeMenu}>
                {format === 'link' ? (
                  <a
                    sx={{ variant: 'menu.listLink' }}
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {year} {title}
                  </a>
                ) : (
                  <Link href={`/work/${slug}`} passHref>
                    <a sx={{ variant: 'menu.listLink' }}>
                      {status === 'in-progress' ? launchDate : year}{' '}
                      {title}
                    </a>
                  </Link>
                )}
              </div>
            </motion.div>
          )
        )}
      </motion.div>
    </div>
  );
}
