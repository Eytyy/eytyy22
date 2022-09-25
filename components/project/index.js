/** @jsxImportSource theme-ui */

import { useInView } from 'react-intersection-observer';

import Section from './section';
import InnerBottomMenu from '@components/nav/InnerBottomMenu';
import InnerTopMenu from '@components/nav/InnerTopMenu';

import TeamMember from '@components/TeamMember';
import { ProjectContextProvider } from './context';
import ProjectMain from './Main';
import HomeLink from '@components/nav/HomeLink';
import MenuToggle from '@components/nav/MenuToggle';

export default function ProjectContainer({ data }) {
  const { ref, inView } = useInView();
  const {
    title,
    year,
    team,
    body,
    role,
    sections,
    mainMedia,
    status,
    launchDate,
  } = data.project;
  return (
    <ProjectContextProvider>
      <article>
        <InnerTopMenu data={data.navData} />
        <HomeLink />
        <div
          sx={{
            variant: 'superGrid',
            position: 'sticky',
            top: 7,
            zIndex: 2,
          }}
        >
          <header sx={{ gridColumn: ['2/5', '2/5', '2/7'] }}>
            <h1 sx={{ variant: 'text.pageTitle' }}>{title}</h1>
            <div sx={{ variant: 'meta' }}>
              {status === 'in-progress' ? (
                <span
                  sx={{
                    display: ['grid'],
                    gridTemplateColumns: 'auto 1fr',
                    alignItems: 'center',
                    gap: 2,
                  }}
                >
                  <span
                    sx={{
                      display: 'inline-block',
                      height: '18px',
                      width: '18px',
                      borderRadius: '100%',
                      bg: 'red',
                    }}
                  />
                  {launchDate}
                </span>
              ) : (
                year
              )}
              {` ${role}`}
            </div>
          </header>
        </div>
        <ProjectMain
          mainMedia={mainMedia}
          body={body}
          status={status}
        />
        <ProjectContent team={team} sections={sections} />

        {!inView && (
          <div
            sx={{
              position: 'fixed',
              bottom: [7],
              left: 0,
              zIndex: 3,
            }}
          >
            <MenuToggle />
          </div>
        )}
      </article>
      <div ref={ref}>
        <InnerBottomMenu data={data.navData.projects} />
      </div>
    </ProjectContextProvider>
  );
}

function ProjectContent({ sections, team }) {
  return (
    <div className="content">
      {sections && (
        <div sx={{ position: 'relative' }}>
          {sections.map((section, index) => (
            <Section key={section._key} {...section} />
          ))}
        </div>
      )}
      {/* {team && (
        <section sx={{ variant: 'menu', position: 'relative' }}>
          <div sx={{ gridColumn: '2/14' }}>
            <span>Partners: </span>
            {team.map((m, i) => (
              <TeamMember
                last={team.length - 1 === i}
                key={m._key}
                {...m}
              />
            ))}
          </div>
        </section>
      )} */}
    </div>
  );
}
