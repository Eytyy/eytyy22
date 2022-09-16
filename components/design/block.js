/** @jsxImportSource theme-ui */
import AudioModule from '@components/modules/audio';
import ContentModule from '@components/modules/content';
import VideoModule from '@components/modules/video';
import SanityImage from '@components/sanity-image';
import { useInView } from 'react-intersection-observer';

function BlockContent({ _type, ...props }) {
  switch (_type) {
    case 'imageModule':
      return <SanityImage {...props} />;
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

export default function Block({ visible, index, ...props }) {
  const { ref, inView } = useInView({ threshold: 1 });
  return (
    <div
      ref={ref}
      sx={{ position: 'relative', pt: '100%', gridColumn: 'auto' }}
    >
      <div
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'blue',
          zIndex: 1,
          opacity: visible ? 1 : 0,
          visibility: visible ? 'visible' : 'hidden',
          transition: `all 200ms ${100 * index}ms linear`,
        }}
      ></div>
      <div
        sx={{
          visibility: visible ? 'hidden' : 'visible',
          opacity: visible ? 0 : 1,
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      >
        <BlockContent inView={inView} {...props} />
      </div>
    </div>
  );
}
