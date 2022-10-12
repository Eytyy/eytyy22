/** @jsxImportSource theme-ui */
import Link from 'next/link';
import List from './List';
import InfoLink from './InfoLink';
import HomeCircle from './HomeCircle';

export default function HomeMenu({ data }) {
  const { projects } = data;

  return (
    <nav sx={{ variant: 'mainMenu' }}>
      <div sx={{ variant: 'menu.inner', position: 'relative' }}>
        <List projects={projects} />
        <div
          sx={{
            display: ['none', null, 'block'],
            position: 'absolute',
            bottom: 7,
            left: 0,
          }}
        >
          <div>beta version</div>
          <div>next update &rarr; 26 Sep 22</div>
        </div>
        <BlogLink />
        <InfoLink />
        <HomeCircle />
      </div>
    </nav>
  );
}

function BlogLink() {
  return (
    <div sx={{ position: 'absolute', top: 7, right: 0 }}>
      <div>
        <Link href="/blog" passHref>
          <a
            sx={{
              color: 'white',
              textDecoration: 'none',
              display: 'block',
            }}
          >
            blog &rarr;
          </a>
        </Link>
      </div>
    </div>
  );
}
