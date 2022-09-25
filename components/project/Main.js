import myPortableTextComponents from '@lib/portablet-text-component';
import { PortableText } from '@portabletext/react';
import MainMedia from './main-media';

/** @jsxImportSource theme-ui */
export default function ProjectMain({ mainMedia, body }) {
  return (
    <div sx={{ variant: 'projectSection' }}>
      <div sx={{ variant: 'projectSection.main' }}>
        <div
          sx={{
            variant:
              mainMedia.format == 'square'
                ? 'projectSection.squareInner'
                : 'projectSection.defaultInner',
          }}
        >
          <div
            sx={{
              variant:
                mainMedia.format == 'square'
                  ? 'projectSection.squareInner.blockWrapper'
                  : 'projectSection.defaultInner.blockWrapper',
            }}
          >
            <div sx={{ variant: 'projectSection.block' }}>
              <MainMedia {...mainMedia} />
            </div>
          </div>
        </div>
      </div>
      <div sx={{ variant: 'projectSection.body' }}>
        {body && (
          <PortableText
            value={body}
            components={myPortableTextComponents}
          />
        )}
      </div>
    </div>
  );
}
