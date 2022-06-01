import Img from 'next/image';
import React from 'react';
import {useNextSanityImage} from 'next-sanity-image';
import {sanityConfig} from '@lib/config';

const SanityImage = (props) => {
  const {asset, alt = ''} = props;
  const imageProps = useNextSanityImage(sanityConfig, asset);
  if (!imageProps) return null;
  return (
    <Img
      alt={alt}
      {...imageProps}
      layout='responsive'
      sizes='(max-width: 800px) 100vw, 800px'
    />
  );
};

export default SanityImage;
