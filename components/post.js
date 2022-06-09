/** @jsxImportSource theme-ui */

import myPortableTextComponents from '@lib/portablet-text-component';
import { PortableText } from '@portabletext/react';

const PostDisplay = ({ slug, title, body }) => {
  return (
    <article id={slug} sx={{ pt: '100px' }}>
      <h2 sx={{ mb: 4, variant: 'text.postTitle' }}>{title}</h2>
      <div sx={{ variant: 'text.body' }}>
        <PortableText
          value={body}
          components={myPortableTextComponents}
        />
      </div>
    </article>
  );
};

export default PostDisplay;
