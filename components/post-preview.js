/** @jsxImportSource theme-ui */

import Link from 'next/link';
import MetaDates from './meta-dates';
import MetaTags from './meta-tags';

const PostPreview = ({
  slug,
  title,
  tags,
  _createdAt,
  _updatedAt,
}) => {
  return (
    <article className="quick-post" sx={{ mb: [9] }}>
      <header sx={{ mb: 6 }}>
        <div sx={{ variant: 'meta', mb: 4 }}>
          {_createdAt && (
            <MetaDates prefix="posted on" date={_createdAt} />
          )}
          {_updatedAt && (
            <MetaDates prefix="updated on" date={_updatedAt} />
          )}
        </div>
        <h2 sx={{ variant: 'text.previewTitle' }}>
          <Link href={`/posts/${slug}`} passHref>
            <a sx={{ variant: 'link' }}>{title}</a>
          </Link>
        </h2>
        <div sx={{ variant: 'meta', mt: 4 }}>
          {tags && <MetaTags tags={tags} />}
        </div>
      </header>
    </article>
  );
};

export default PostPreview;
