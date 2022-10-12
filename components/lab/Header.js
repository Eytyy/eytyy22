/** @jsxImportSource theme-ui */
import Link from 'next/link';

export default function LabHeader() {
  return (
    <nav sx={{ variant: 'lab.nav' }}>
      <Link href="/lab" passHref>
        <a>Lab</a>
      </Link>
      <Link href="/lab/motion" passHref>
        <a>Motion</a>
      </Link>
    </nav>
  );
}
