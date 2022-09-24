/** @jsxImportSource theme-ui */

import { PortableText } from '@portabletext/react';

import myPortableTextComponents from '@lib/portablet-text-component';

import Block from './Block';
export default function Section({ content, body, name, link }) {
  return (
    <div sx={{ variant: 'projectSection' }}>
      {name && (
        <header sx={{ variant: 'projectSection.header' }}>
          <h2 sx={{ variant: 'text.pageTitle' }}>{name}</h2>
        </header>
      )}
      <div
        sx={{ variant: 'projectSection.main', position: 'relative' }}
      >
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
