/** @jsxImportSource theme-ui */
import ImageModule from '@components/modules/image';
import VideoModule from '@components/modules/video';

export default function MainMedia({ type, video, image }) {
  if (!type) return null;
  return type === 'video' ? (
    <VideoModule big={true} {...video} />
  ) : (
    <ImageModule {...image} />
  );
}
