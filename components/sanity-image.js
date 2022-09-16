import Img from 'next/image';
import React from 'react';
import { useNextSanityImage } from 'next-sanity-image';
import { sanityConfig } from '@lib/config';

const SanityImage = ({ image, format = 'default' }) => {
  switch (format) {
    case 'square':
      return <SqrdImage image={image} alt={image.alt} />;
    default:
      return <OriginalRatio image={image} alt={image.alt} />;
  }
};

function OriginalRatio({ image, alt }) {
  const props = useNextSanityImage(sanityConfig, image);
  if (!props) return null;
  return (
    <Img
      {...props}
      alt={alt}
      layout="responsive"
      sizes="(min-width: 66em) 20vw,
      (min-width: 44em) 50vw,
      50vw"
    />
  );
}

const sqrImageBldr = (imgBldr, opts) => {
  const w = opts.width;
  return imgBldr.width(w).height(w);
};

function SqrdImage({ image, alt }) {
  const props = useNextSanityImage(sanityConfig, image, {
    imageBuilder: sqrImageBldr,
  });
  if (!props) return null;

  return (
    <Img
      {...props}
      alt={alt}
      height={props.width}
      layout="responsive"
      sizes="(min-width: 66em) 20vw,
      (min-width: 44em) 50vw,
      50vw"
    />
  );
}

export default SanityImage;
