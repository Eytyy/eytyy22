/** @jsxImportSource theme-ui */
import Link from 'next/link';
import PostPreview from '@components/preview/post';
import useRouteInfo from 'hooks/useRouteInfo';

export default function PostsMenu({ posts }) {
  const { active, front, inner, slug } = useRouteInfo('posts');

  if ((!active && !front) || !posts) {
    return (
      <span>
        <Link href="/posts" passHref>
          <a sx={{ variant: 'menu.link' }}>BLOG</a>
        </Link>
        <span>, </span>
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
