/** @jsxImportSource theme-ui */

import { useProjectNavContext } from '@components/project/context';
import Link from 'next/link';
import { BsArrowUpRight } from 'react-icons/bs';

export default function ProjectPreview({
  format,
  link,
  slug,
  title,
  last,
  active = false,
}) {
  const { closeMenu } = useProjectNavContext();
  return (
    <div sx={{ variant: 'menu.item' }} onClick={closeMenu}>
      {active ? (
        <span>{title}</span>
      ) : format === 'link' ? (
        <a
          sx={{ variant: 'menu.workLink' }}
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          {title}
          <BsArrowUpRight />
        </a>
      ) : (
        <Link href={`/work/${slug}`} passHref>
          <a sx={{ variant: 'menu.workLink' }}>{title}</a>
        </Link>
      )}
      <span sx={{ variant: 'menu.separator' }}>
        {last ? '.' : ', '}
      </span>
    </div>
  );
}
