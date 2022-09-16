import Img from 'next/image';
import React from 'react';
import { useNextSanityImage } from 'next-sanity-image';
import { sanityConfig } from '@lib/config';

const BG = (props) => {
  const { asset, alt = '', fit = 'cover' } = props;
  const imageProps = useNextSanityImage(sanityConfig, asset);
  if (!imageProps) return null;
  return (
    <Img
      src={imageProps.src}
      loader={imageProps.loader}
      layout="fill"
      objectFit={fit}
      alt={alt}
    />
  );
};

export default BG;
