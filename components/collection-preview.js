/** @jsxImportSource theme-ui */

import { getChildPostsUniqueTags } from '@lib/helpers';
import Link from 'next/link';
import CollectionPostsList from './collection-posts-list';
import MetaDates from './meta-dates';
import MetaTags from './meta-tags';

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
      <header sx={{ mb: 6 }}>
        <div sx={{ variant: 'meta' }}></div>
        <h2 sx={{ variant: 'text.postTitle' }}>
          <Link href={`/${type.slug}/${slug}`} passHref>
            <a sx={{ variant: 'link' }}>
              {type && type.title}: {title}
            </a>
          </Link>
        </h2>
        <div sx={{ variant: 'meta', mt: 2 }}>
          {_createdAt && (
            <MetaDates prefix="posted on" date={_createdAt} />
          )}
          {_lastUpdatedAt && (
            <MetaDates prefix="updated on" date={_lastUpdatedAt} />
          )}
          <MetaTags tags={tags} />
        </div>
      </header>
      {posts && (
        <div sx={{ fontSize: 3, fontFamily: 'heading' }}>
          <CollectionPostsList posts={posts} />
        </div>
      )}
    </article>
  );
};

export default CollectionPreview;
