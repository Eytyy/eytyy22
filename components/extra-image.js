/** @jsxImportSource theme-ui */
import Image from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';
import { sanityConfig } from '@lib/config';
import useSanityImage from 'hooks/useSanityImage';

export default function ExtraImage({ image, type, caption }) {
  const imageProps = useNextSanityImage(sanityConfig, image);
  const ip = useSanityImage(sanityConfig, image);

  switch (type) {
    case 'next':
      return (
        <>
          <Image alt={image.caption} layout="responsive" {...ip} />
          <Image
            alt={image.caption}
            {...imageProps}
            layout="responsive"
          />
        </>
      );
  }
}
