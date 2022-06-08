/** @jsxImportSource theme-ui */

import {getChildPostsUniqueTags, getFormatedDate} from '@lib/helpers';
import myPortableTextComponents from '@lib/portablet-text-component';
import {PortableText} from '@portabletext/react';
import Link from 'next/link';

const CollectionPreview = ({
  type,
  description,
  title,
  slug,
  posts,
  _createdAt,
  allPostsTags,
}) => {
  const tags = getChildPostsUniqueTags(allPostsTags);

  return (
    <article sx={{mb: [9]}}>
      <header sx={{mb: 4}}>
        {_createdAt && (
          <time sx={{variant: 'text.meta'}} dateTime={_createdAt}>
            {getFormatedDate(_createdAt)}
          </time>
        )}
        <h2 sx={{variant: 'text.postTitle'}}>
          <Link href={`/${type.slug.current}/${slug.current}`}>
            <a>
              {type && type.title}: {title}
            </a>
          </Link>
        </h2>
        {tags && (
          <div sx={{variant: 'text.meta', display: 'flex', gap: 4}}>
            {tags.map((tag) => (
              <span key={tag._id}>#{tag.slug}</span>
            ))}
          </div>
        )}
      </header>

      {description && (
        <div sx={{variant: 'text.body'}}>
          <PortableText
            value={description}
            components={myPortableTextComponents}
          />
        </div>
      )}
      {posts && (
        <div sx={{}}>
          {posts.map((post, index) => (
            <span
              sx={{variant: 'text.subHeadline', fontFamily: 'heading', mb: 2}}
              key={post._id}
            >
              <Link
                passHref
                href={`/${type.slug.current}/${slug.current}/#${post.slug.current}`}
              >
                <a>{post.title}</a>
              </Link>
              {index === posts.length - 1 ? (
                <span>.</span>
              ) : (
                <span sx={{mr: '1ch'}}>,</span>
              )}
            </span>
          ))}
        </div>
      )}
    </article>
  );
};

export default CollectionPreview;
