/** @jsxImportSource theme-ui */
import { useProjectNavContext } from '@components/project/context';
import Link from 'next/link';
import Contact from './Contact';

export default function InnerTopMenu({ data }) {
  const { projects } = data;
  const {
    menuVisible: visible,
    toggleMenu,
    closeMenu,
  } = useProjectNavContext();

  return (
    <nav
      sx={{
        variant: 'superGrid',
        bg: '#FFF',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 12,
        transform: visible ? 'translateY(0%)' : 'translateY(-100%)',
      }}
    >
      <div sx={{ variant: 'menu.inner', position: 'relative' }}>
        <Projects projects={projects} onClick={closeMenu} />
        <div
          sx={{
            position: 'absolute',
            top: 7,
            right: 0,
          }}
        >
          <div>beta</div>
        </div>
        {/* <div
          sx={{
            position: 'absolute',
            top: 7,
            right: 0,
            display: 'grid',
            gap: 9,
          }}
        >
          <div>
            <Link href="/posts" passHref>
              <a
                sx={{
                  color: 'accent',
                  textDecoration: 'none',
                  display: 'block',
                }}
              >
                blog &rarr;
              </a>
            </Link>
          </div>
        </div> */}

        <div
          onClick={toggleMenu}
          sx={{
            position: 'absolute',
            bottom: [7],
            left: 0,
            color: 'accent',
            cursor: 'pointer',
          }}
        >
          x close
        </div>
        <Contact />
        <MidSection />
      </div>
    </nav>
  );
}

function Projects({ projects, onClick }) {
  return (
    <div
      sx={{
        position: 'absolute',
        top: 7,
        left: 0,
        display: 'grid',
        gap: 9,
      }}
    >
      <div sx={{ maxWidth: '400px' }}>
        {projects.map(({ title, _id, slug, year }, index) => (
          <div
            onClick={() => {
              console.log('close');
              onClick();
            }}
            key={_id}
          >
            <Link href={`/work/${slug}`} passHref>
              <a sx={{ color: 'blue' }}>
                {year} {title}
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
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
