/** @jsxImportSource theme-ui */

import Link from 'next/link';
import InfoLink from './InfoLink';
import List from './List';

export default function FooterMenu({ data }) {
  return (
    <nav sx={{ variant: 'footerMenu' }}>
      <div sx={{ variant: 'menu.inner', position: 'relative' }}>
        <List projects={data} />
        <div
          sx={{
            position: 'absolute',
            bottom: 7,
            left: 0,
            display: 'grid',
            gap: 9,
          }}
        >
          <Link href="/posts" passHref>
            <a sx={{ variant: 'menu.link' }}>blog &rarr;</a>
          </Link>
        </div>
        <InfoLink />
        <MidSection />
      </div>
    </nav>
  );
}

function MidSection() {
  return (
    <div
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        bg: 'blue',
        width: '33.33vh',
        height: '33.33vh',
        borderRadius: '100%',
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
}
