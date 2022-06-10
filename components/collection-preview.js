/** @jsxImportSource theme-ui */

import { getChildPostsUniqueTags } from '@lib/helpers';
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
  allPostsTags,
}) => {
  const tags = getChildPostsUniqueTags(allPostsTags);

  return (
    <article sx={{ mb: [9] }}>
      <header sx={{ mb: 0 }}>
        <div sx={{ variant: 'meta', mb: 2 }}>
          {_createdAt && (
            <MetaDates prefix="posted on" date={_createdAt} />
          )}
          {_lastUpdatedAt && (
            <MetaDates prefix="updated on" date={_lastUpdatedAt} />
          )}
        </div>
        <h2 sx={{ variant: 'text.previewTitle' }}>
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
