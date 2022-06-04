/** @jsxImportSource theme-ui */

import myPortableTextComponents from '@lib/portablet-text-component';
import {PortableText} from '@portabletext/react';

const CollectionPreview = ({category, description, title, posts, ...rest}) => {
  console.log(posts);
  return (
    <div sx={{mb: [9]}}>
      {category && (
        <span
          sx={{
            p: 1,
            mb: 1,
            display: 'inline-block',
            variant: 'text.meta',
            border: '1px solid black',
          }}
        >
          {category.title}
        </span>
      )}
      <h2 sx={{variant: 'text.postTitle'}}>{title}</h2>
      {description && (
        <div sx={{variant: 'text.body'}}>
          <PortableText
            value={description}
            components={myPortableTextComponents}
          />
        </div>
      )}
      {posts &&
        posts.map((post) => (
          <div key={post._key}>
            <h3>{post.title}</h3>
          </div>
        ))}
    </div>
  );
};

export default CollectionPreview;
