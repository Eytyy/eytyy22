/** @jsxImportSource theme-ui */

import { PortableText } from '@portabletext/react';

import myPortableTextComponents from '@lib/portablet-text-component';

import MetaDates from './meta-dates';
import MetaTags from './meta-tags';

const QuickPost = ({ publishedAt, tags, body, title, finished }) => {
  return (
    <article className="quick-post" sx={{ mb: [9] }}>
      <header sx={{ mb: 6 }}>
        <h2 sx={{ variant: 'text.postTitle' }}>{title}</h2>
        <div sx={{ variant: 'meta', mt: 2 }}>
          {publishedAt && (
            <MetaDates prefix="posted on" date={publishedAt} />
          )}
          {tags && <MetaTags tags={tags} />}
        </div>
      </header>
      {body && (
        <div sx={{ variant: 'text.body' }}>
          <PortableText
            value={body}
            components={myPortableTextComponents}
          />
        </div>
      )}
    </article>
  );
};

export default QuickPost;
