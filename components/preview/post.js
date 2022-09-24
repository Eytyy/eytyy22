/** @jsxImportSource theme-ui */

import { useProjectNavContext } from '@components/project/context';
import Link from 'next/link';

export default function PostPreview({ last, slug, title }) {
  const { closeMenu } = useProjectNavContext();

  return (
    <div sx={{ variant: 'menu.item' }} onClick={closeMenu}>
      <Link href={`/posts/${slug}`} passHref>
        <a sx={{ variant: 'menu.postLink' }}>{title}</a>
      </Link>
      {
        <span sx={{ variant: 'menu.separator' }}>
          {last ? '.' : ', '}
        </span>
      }
    </div>
  );
}
