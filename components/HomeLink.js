/** @jsxImportSource theme-ui */
import { CgClose } from 'react-icons/cg';
import Link from 'next/link';

export default function HomeLink() {
  return (
    <div
      sx={{
        position: 'fixed',
        top: 2,
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
          <a
            sx={{
              fontSize: 6,
              color: 'accent',
            }}
          >
            <CgClose />
          </a>
        </Link>
      </div>
    </div>
  );
}
