/** @jsxImportSource theme-ui */
import PostPreview from '@components/preview/post';
import ProjectPreview from '@components/preview/project';
import { useNav } from '@lib/context';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import { useCallback } from 'react';

export default function MainMenu({ data }) {
  const { updateNavHeight } = useNav();
  const { projects, posts } = data;
  const router = useRouter();
  const { asPath } = router;
  const routeRef = useRef();

  const measuredHeight = useCallback(
    (node) => {
      if (node && routeRef.current !== asPath) {
        updateNavHeight(node.offsetHeight);
        routeRef.current = asPath;
      }
    },
    [updateNavHeight, asPath]
  );

  return (
    <nav
      ref={measuredHeight}
      sx={{ variant: 'menu', minHeight: '100vh' }}
    >
      <div sx={{ variant: 'menu.inner' }}>
        <div sx={{ variant: 'menu.divider' }} />
        <ProjectsMenu projects={projects} />
        <div sx={{ variant: 'menu.divider' }} />
        <PostsMenu posts={posts} />
        <div sx={{ variant: 'menu.divider' }} />
        <span>
          <Link href="/about" passHref>
            <a sx={{ variant: 'menu.link' }}> ABOUT</a>
          </Link>
          <span sx={{ variant: 'menu.separator' }}>.</span>
        </span>
      </div>
    </nav>
  );
}

const useRouteInfo = (page) => {
  const { pathname, query } = useRouter();
  const inner = typeof query.slug !== 'undefined';
  const front = pathname === '/';
  const active = front ? false : pathname.split('/')[1] === page;
  return {
    inner,
    front,
    active,
    slug: query.slug,
  };
};

function PostsMenu({ posts }) {
  const { active, front, inner, slug } = useRouteInfo('posts');

  if ((!active && !front) || !posts) {
    return (
      <span>
        <Link href="/posts" passHref>
          <a sx={{ variant: 'menu.link' }}>BLOG</a>
        </Link>
        <span sx={{ variant: 'menu.separator' }}>, </span>
      </span>
    );
  }

  if (inner && active) {
    const currentPageIndex = posts.findIndex(
      (post) => post.slug === slug
    );
    const nextPage = posts[currentPageIndex + 1];
    const prevPage = posts[currentPageIndex - 1];

    return (
      <>
        <h2 sx={{ display: 'inline', fontSize: '1em' }}>BLOG: </h2>
        <Link href="/posts" passHref>
          <a sx={{ variant: 'menu.link' }}>All, </a>
        </Link>
        {prevPage && <PostPreview last={false} {...prevPage} />}
        {nextPage && <PostPreview last={true} {...nextPage} />}
      </>
    );
  }

  return (
    <>
      <h2 sx={{ variant: 'menu.label' }}>BLOG: </h2>
      {posts.map((post, index) => (
        <PostPreview
          last={index === posts.length - 1}
          key={post._id}
          {...post}
        />
      ))}
    </>
  );
}

function ProjectsMenu({ projects }) {
  const { inner } = useRouteInfo('work');

  if (!projects) return null;

  return (
    <>
      <h2 sx={{ variant: 'menu.label' }}>
        {inner ? 'More Work: ' : 'WORK: '}{' '}
      </h2>
      {projects.map((project, index) => (
        <ProjectPreview
          last={index === projects.length - 1}
          key={project._id}
          {...project}
        />
      ))}
    </>
  );
}
