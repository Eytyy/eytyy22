/** @jsxImportSource theme-ui */

import Link from 'next/link';
import CollectionPostsList from './collection-posts-list';
import MetaDates from './meta-dates';

const CollectionPreview = ({
  type,
  title,
  slug,
  posts,
  _createdAt,
  _lastUpdatedAt,
}) => {
  const isDraft = posts
    .map((post) => post.status)
    .some((status) => status !== 'finished');

  return (
    <article sx={{ mb: [9] }}>
      <header sx={{ mb: 0 }}>
        <div sx={{ variant: 'meta', mt: 0, mb: 2 }}>
          {_createdAt && (
            <MetaDates prefix="posted on" date={_createdAt} />
          )}
          {_lastUpdatedAt && (
            <MetaDates prefix="updated on" date={_lastUpdatedAt} />
          )}
        </div>
        <h2
          sx={{ variant: 'text.previewTitle', position: 'relative' }}
        >
          {isDraft && (
            <i
              sx={{
                display: 'block',
                bg: 'red',
                width: '10px',
                height: '10px',
                borderRadius: '10px',
                position: 'absolute',
                left: '-20px',
                top: '15px',
              }}
            ></i>
          )}
          <Link href={`/${type.slug}/${slug}`} passHref>
            <a sx={{ variant: 'link' }}>
              {type && type.title}: {title}
            </a>
          </Link>
        </h2>
      </header>
      {posts && (
        <div sx={{ fontSize: 2, fontFamily: 'heading', mt: 2 }}>
          <CollectionPostsList posts={posts} />
        </div>
      )}
    </article>
  );
};

export default CollectionPreview;
