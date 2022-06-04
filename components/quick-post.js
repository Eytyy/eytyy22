/** @jsxImportSource theme-ui */

import myPortableTextComponents from '@lib/portablet-text-component';
import {getFormatedDate} from '@lib/helpers';

import {PortableText} from '@portabletext/react';

const QuickPost = ({publishedAt, tags, body, title, finished}) => {
  return (
    <div sx={{mb: [9]}}>
      <div sx={{mb: 6, variant: 'text.meta'}}>
        {typeof finished !== 'undefined' && !finished && (
          <div>
            <span
              sx={{
                background: 'red',
                color: '#fff',
                mb: 4,
                display: 'inline-block',
                padding: 2,
                fontFamily: 'heading',
                letterSpacing: 1,
              }}
            >
              {' '}
              {`Draft`}
            </span>
          </div>
        )}
        <h2
          sx={{
            variant: 'text.postTitle',
          }}
        >
          {title}
        </h2>
        {publishedAt && (
          <time sx={{}} dateTime={publishedAt}>
            {getFormatedDate(publishedAt)}
          </time>
        )}
        {tags && (
          <span sx={{ml: 4}}>
            tags:{' '}
            {tags.map((tag) => (
              <span
                sx={{mr: 3, borderBottom: '1px solid'}}
                key={tag._id}
              >{`#${tag.title}`}</span>
            ))}
          </span>
        )}
      </div>
      {body && (
        <div sx={{variant: 'text.body'}}>
          <PortableText value={body} components={myPortableTextComponents} />
        </div>
      )}
    </div>
  );
};

export default QuickPost;
