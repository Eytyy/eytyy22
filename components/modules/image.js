import Img from 'next/image';
import React from 'react';
import { useNextSanityImage } from 'next-sanity-image';
import { sanityConfig } from '@lib/config';

const ImageModule = ({ image, format = 'default' }) => {
  switch (format) {
    case 'square':
      return <SqrdImage image={image} alt={image.alt} />;
    // case 'landscape':
    //   return <LandScape image={image} alt={image.alt} />;
    default:
      return <OriginalRatio image={image} alt={image.alt} />;
  }
};

const ratio = (w) => Math.floor(w * 0.5625);

function OriginalRatio({ image, alt }) {
  const props = useNextSanityImage(sanityConfig, image);
  if (!props) return null;

  return (
    <Img
      {...props}
      alt={alt}
      layout="responsive"
      sizes="(min-width: 66em) 33vw,
      (min-width: 44em) 50vw,
      100vw"
    />
  );
}

const landscapeBldr = (imgBldr, opts) => {
  const w = opts.width;
  const h = ratio(w);
  return imgBldr.width(w).height(h);
};

function LandScape({ image, alt }) {
  const props = useNextSanityImage(sanityConfig, image, {
    imageBuilder: landscapeBldr,
  });
  if (!props) return null;

  return (
    <Img
      {...props}
      alt={alt}
      height={ratio(props.width)}
      layout="responsive"
      sizes="(min-width: 66em) 33vw,
      (min-width: 44em) 50vw,
      100vw"
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
      sizes="(min-width: 66em) 33vw,
      (min-width: 44em) 33vw,
      50vw"
    />
  );
}

export default ImageModule;
