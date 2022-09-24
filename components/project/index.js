/** @jsxImportSource theme-ui */

import { useInView } from 'react-intersection-observer';
import { PortableText } from '@portabletext/react';

import myPortableTextComponents from '@lib/portablet-text-component';

import Section from './section';
import MainMedia from './main-media';
import InnerBottomMenu from '@components/nav/InnerBottomMenu';
import InnerTopMenu from '@components/nav/InnerTopMenu';

import TeamMember from '@components/TeamMember';
import MenuToggle from '@components/MenuToggle';
import HomeLink from '@components/HomeLink';
import { ProjectContextProvider } from './context';
import ProjectMain from './Main';

export default function ProjectContainer({ data }) {
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

  const { ref, inView } = useInView();

  return (
    <ProjectContextProvider>
      <article>
        <InnerTopMenu data={data.navData} sticky={false} />
        <HomeLink />
        <ProjectMain
          title={title}
          year={year}
          role={role}
          mainMedia={mainMedia}
          body={body}
          status={status}
          launchDate={launchDate}
        />
        <ProjectContent team={team} sections={sections} />
        <div ref={ref} />

        <InnerBottomMenu
          data={data.navData.projects}
          type="projects"
          sticky={false}
        />
        {!inView && <MenuToggle />}
      </article>
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
      {team && (
        <section sx={{ variant: 'menu', position: 'relative' }}>
          <div sx={{ gridColumn: '2/14' }}>
            <span>Team: </span>
            {team.map((m, i) => (
              <TeamMember
                last={team.length - 1 === i}
                key={m._key}
                {...m}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
