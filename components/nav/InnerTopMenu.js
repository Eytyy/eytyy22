/** @jsxImportSource theme-ui */
import { useProjectNavContext } from '@components/project/context';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PostsMenu from './PostsMenu';
import ProjectsMenu from './ProjectsMenu';

export default function InnerTopMenu({ data }) {
  const { menuVisible: visible } = useProjectNavContext();

  const { projects, posts } = data;
  const router = useRouter();

  return (
    <nav
      sx={{
        variant: 'innerTopMenu',
        transform: visible ? 'translateY(0%)' : 'translateY(-100%)',
      }}
    >
      <div sx={{ variant: 'menu.inner' }}>
        <ProjectsMenu projects={projects} />
        <br />
        <PostsMenu posts={posts} />
        <span>
          <Link href="/about" passHref>
            <a sx={{ variant: 'menu.link' }}> ABOUT</a>
          </Link>
          <span>.</span>
        </span>
      </div>
    </nav>
  );
}
