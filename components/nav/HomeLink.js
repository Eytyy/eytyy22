/** @jsxImportSource theme-ui */
import { CgClose } from 'react-icons/cg';
import Link from 'next/link';

export default function HomeLink() {
  return (
    <div
      sx={{
        position: 'fixed',
        top: 7,
        right: 0,
        variant: 'superGrid',
        zIndex: 10,
      }}
    >
      <div
        sx={{
          gridColumn: ['7/8', '7/8', '13/14'],
          justifySelf: 'self-end',
        }}
      >
        <Link href="/" passHref>
          <a sx={{ textDecoration: 'none', color: 'accent' }}>
            &larr; home
          </a>
        </Link>
      </div>
    </div>
  );
}
