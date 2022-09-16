/** @jsxImportSource theme-ui */
import ImageModule from '@components/modules/image';
import MediaModule from '@components/modules/media';
import VideoModule from '@components/modules/video';

export default function Section(props) {
  return (
    <div
      sx={{
        position: 'relative',
        zIndex: 2,
      }}
    >
      <Content {...props} />
    </div>
  );
}

function Content({ type, ...props }) {
  switch (type) {
    case 'image':
      return <ImageModule image={props.image} />;
    case 'video':
      return <VideoModule {...props} big={true} />;
    case 'media':
      return <MediaModule content={props.content} />;
    default:
      return <div>Unsupported Module</div>;
  }
}
