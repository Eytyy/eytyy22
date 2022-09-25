/** @jsxImportSource theme-ui */

import { PortableText } from '@portabletext/react';

import myPortableTextComponents from '@lib/portablet-text-component';

import Block from './Block';
export default function Section({ content, body, link }) {
  return (
    <div sx={{ variant: 'projectSection' }}>
      <div sx={{ variant: 'projectSection.main' }}>
        {content?.length > 0 &&
          content.map((block) => (
            <Block link={link} key={block._key} block={block} />
          ))}
      </div>
      <div sx={{ variant: 'projectSection.body' }}>
        <PortableText
          value={body}
          components={myPortableTextComponents}
        />
      </div>
    </div>
  );
}
