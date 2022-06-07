/** @jsxImportSource theme-ui */

import myPortableTextComponents from '@lib/portablet-text-component';
import {PortableText} from '@portabletext/react';
import Link from 'next/link';

const CollectionPreview = ({type, description, title, slug, posts}) => {
  return (
    <div sx={{mb: [9]}}>
      <h2 sx={{variant: 'text.postTitle'}}>
        <Link href={`/${type.slug.current}/${slug.current}`}>
          <a>
            {type && type.title}: {title}
          </a>
        </Link>
      </h2>
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
    </div>
  );
};

export default CollectionPreview;
