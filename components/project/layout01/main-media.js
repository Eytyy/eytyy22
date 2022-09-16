/** @jsxImportSource theme-ui */
import BG from '@components/BG';
import VideoModule from '@components/modules/video';

export default function MainMedia({
  style,
  type,
  percentage,
  inView,
  ...media
}) {
  return (
    <div sx={{ position: 'sticky', top: 0, mixBlendMode: 'lighten' }}>
      {style == 'bg' ? (
        <div></div>
      ) : (
        <div
          style={{ opacity: inView ? `${percentage}%` : '0' }}
          sx={{
            transition: 'opacity 350ms ease-in-out',
            position: 'sticky',
            left: 0,
            top: 0,
            width: '100%',
            height: '100vh',
          }}
        >
          {type === 'video' ? (
            <VideoModule
              inView={inView}
              big={true}
              {...media.video}
            />
          ) : (
            <BG {...media.image} />
          )}
        </div>
      )}
    </div>
  );
}
