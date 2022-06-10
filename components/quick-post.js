/** @jsxImportSource theme-ui */

import { PortableText } from '@portabletext/react';

import myPortableTextComponents from '@lib/portablet-text-component';

import MetaDates from './meta-dates';
import MetaTags from './meta-tags';

const QuickPost = ({ _createdAt, tags, body, title }) => {
  return (
    <article className="quick-post" sx={{ mb: [9] }}>
      <header sx={{ mb: 6 }}>
        <div sx={{ variant: 'meta', mb: 4 }}>
          {_createdAt && <MetaDates prefix="" date={_createdAt} />}
        </div>
        <h2 sx={{ variant: 'text.previewTitle' }}>{title}</h2>
        <div sx={{ variant: 'meta', mt: 4 }}>
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
