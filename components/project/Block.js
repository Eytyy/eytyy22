/** @jsxImportSource theme-ui */
import { useInView } from 'react-intersection-observer';
import SanityImage from '@components/sanity-image';
import VideoModule from '@components/modules/video';
import AudioModule from '@components/modules/audio';
import ContentModule from '@components/modules/content';
import { LinkBtn } from './LinkBtn';
import ResizeBtn from './ResizeBtn';

export default function Block({ block, layout, link }) {
  const { ref, inView } = useInView({ threshold: 1 });
  return (
    <div
      sx={{
        variant:
          block.format == 'square'
            ? 'projectSection.squareInner'
            : 'projectSection.defaultInner',
      }}
    >
      <div
        ref={ref}
        sx={{
          variant:
            block.format == 'square'
              ? 'projectSection.squareInner.blockWrapper'
              : 'projectSection.defaultInner.blockWrapper',
        }}
      >
        <div sx={{ variant: 'projectSection.block' }}>
          <div
            sx={{
              position: 'relative',
              height: '100%',
              opacity: [inView ? 1 : 0],
              transition: 'all 350ms ease-in-out',
            }}
          >
            <div
              sx={{
                variant: link
                  ? 'projectSection.floatingBtn.link'
                  : 'projectSection.floatingBtn.resize',
                opacity: inView ? '1' : 0,
              }}
            >
              {link ? <LinkBtn link={link} /> : <ResizeBtn />}
            </div>
            <BlockContent
              layout={layout}
              inView={inView}
              {...block}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function BlockContent({ _type, format, ...props }) {
  switch (_type) {
    case 'imageModule':
      return <SanityImage format={format} {...props} />;
    case 'videoModule':
      return <VideoModule {...props} />;
    case 'audioModule':
      return <AudioModule {...props} />;
    case 'contentBlock':
      return <ContentModule {...props} />;
    default:
      return null;
  }
}
