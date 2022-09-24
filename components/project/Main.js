import myPortableTextComponents from '@lib/portablet-text-component';
import { PortableText } from '@portabletext/react';
import MainMedia from './main-media';

/** @jsxImportSource theme-ui */
export default function ProjectMain({
  title,
  year,
  role,
  mainMedia,
  body,
  status,
  launchDate,
}) {
  return (
    <div sx={{ variant: 'projectSection' }}>
      <header sx={{ variant: 'projectSection.header' }}>
        <h1 sx={{ variant: 'text.pageTitle' }}>{title}</h1>
        <div sx={{ variant: 'meta' }}>
          {status === 'in-progress' ? (
            <span
              sx={{ display: 'flex', gap: 2, alignItems: 'center' }}
            >
              <span
                sx={{
                  display: 'inline-block',
                  height: '18px',
                  width: '18px',
                  borderRadius: '100%',
                  bg: 'red',
                }}
              />
              Launch date: {launchDate}
            </span>
          ) : (
            year
          )}
          {` ${role}`}
        </div>
      </header>
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
