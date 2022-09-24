/** @jsxImportSource theme-ui */
import ProjectPreview from '@components/preview/project';
import useRouteInfo from 'hooks/useRouteInfo';

export default function ProjectsMenu({ projects }) {
  const { slug } = useRouteInfo('work');
  if (!projects) return null;

  // /page
  return (
    <>
      <h2 sx={{ variant: 'menu.label' }}>WORK: </h2>
      {projects.map((project, index) => (
        <ProjectPreview
          active={slug === project.slug}
          last={index === projects.length - 1}
          key={project._id}
          {...project}
        />
      ))}
    </>
  );
}
