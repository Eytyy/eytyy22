/** @jsxImportSource theme-ui */
import Contact from './Contact';
import ProjectsMenu from './ProjectsMenu';

export default function InnerBottomMenu({ data }) {
  return (
    <nav sx={{ variant: 'superGrid', height: '100vh' }}>
      <div sx={{ variant: 'menu.inner', position: 'relative' }}>
        <ProjectsMenu projects={data} />
        {/* <div
          sx={{
            position: 'absolute',
            bottom: 7,
            left: 0,
            display: 'grid',
            gap: 9,
          }}
        >
          <div>
            <Link href="/posts" passHref>
              <a
                sx={{
                  variant: 'menu.link',
                  display: 'block',
                }}
              >
                blog &rarr;
              </a>
            </Link>
          </div>
        </div> */}
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
        <Contact />
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
