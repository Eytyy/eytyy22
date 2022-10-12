/** @jsxImportSource theme-ui */
import Link from 'next/link';

export default function MotionHeader() {
  return (
    <nav sx={{ variant: 'lab.nav' }}>
      <Link href="/lab/motion/one" passHref>
        <a>One</a>
      </Link>
      <Link href="/lab/motion/two" passHref>
        <a>Two</a>
      </Link>
      <Link href="/lab/motion/three" passHref>
        <a>Three</a>
      </Link>
      <Link href="/lab/motion/four" passHref>
        <a>Four</a>
      </Link>
    </nav>
  );
}
