/** @jsxImportSource theme-ui */
import VideoModule from '@components/modules/video';
import SanityImage from '@components/sanity-image';

export default function MainMedia({ type, video, image }) {
  if (!type) return null;
  return type === 'video' ? (
    <VideoModule big={true} {...video} />
  ) : (
    <SanityImage {...image} />
  );
}
