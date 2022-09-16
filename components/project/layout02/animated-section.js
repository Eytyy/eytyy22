/** @jsxImportSource theme-ui */
import { forwardRef } from 'react';
import { useInView } from 'react-intersection-observer';

import ImageModule from '@components/modules/image';
import MediaModule from '@components/modules/media';
import VideoModule from '@components/modules/video';
import useParallax from 'hooks/useParallax';
import GridBlocks from '@components/design/gridBlocks';

const log = true;

export default function AnimatedSection(props) {
  const { ref, inView, entry } = useInView({ threshold: 0.1 });
  const { percentage } = useParallax(inView, entry);
  const { behavior } = props.layout;

  const visibility = percentage < 0 ? 0 : percentage;
  return behavior === 'slide' ? (
    <div sx={{ position: 'relative', minHeight: '100vh' }} ref={ref}>
      <Content {...props} inView={inView} />
    </div>
  ) : (
    <div sx={{ position: 'relative', height: '120vh' }}>
      <FullScreenOverlay
        visibility={visibility}
        entry={entry}
        ref={ref}
      >
        <Content {...props} inView={inView} />
      </FullScreenOverlay>
    </div>
  );
}

const FullScreenOverlay = forwardRef(function OverlayWithRef(
  { children, visibility, entry },
  ref
) {
  return (
    <>
      <div
        sx={{
          position: 'sticky',
          top: 0,
          width: '100%',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2,
        }}
      >
        <div
          sx={{
            transition: 'opacity 100ms linear',
            opacity: `${visibility}%`,
          }}
        >
          {children}
        </div>
      </div>
      <div className="spacer" sx={{ height: '20vh' }} ref={ref} />
    </>
  );
});

function Content({ type, inView, ...props }) {
  switch (type) {
    case 'image':
      return <ImageModule image={props.image} />;
    case 'video':
      return <VideoModule {...props} big={true} inView={inView} />;
    case 'media':
      return <GridBlocks blocks={props.content} inView={inView} />;
    default:
      return <div>Unsupported Module</div>;
  }
}
