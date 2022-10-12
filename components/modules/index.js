import React from 'react';
import ContentModule from './content';
import ImageModule from './image';
import VideoModule from './video';

export default function Module({ image, _type, inView, ...props }) {
  switch (_type) {
    case 'imageModule':
      return <ImageModule image={image} />;
    case 'videoModule':
      return <VideoModule {...props} inView={inView} />;
    case 'contentModule':
      return <ContentModule {...props} inView={inView} />;
    default:
      return <div>Unsupported Module</div>;
  }
}
