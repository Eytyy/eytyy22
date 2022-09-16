import imageUrlBuilder from '@sanity/image-url';
import { useMemo } from 'react';

const DEFAULT_FALLBACK_IMAGE_QUALITY = 75;
const imageBuilder = (imageUrlBuilder, options) => {
  const result = imageUrlBuilder
    .quality(options.quality || DEFAULT_FALLBACK_IMAGE_QUALITY)
    .fit('clip');
  if (options.width !== null) {
    return result.width(options.width);
  }
  return result;
};

function getSanityRefId(image) {
  if (typeof image === 'string') {
    return image;
  }
  const obj = image;
  const ref = image;
  const img = image;
  if (typeof image === 'string') {
    return image;
  }
  if (obj.asset) {
    return obj.asset._ref || obj.asset._id;
  }
  return ref._ref || img._id || '';
}
function getImageDimensions(id) {
  const dimensions = id.split('-')[2];
  const [width, height] = dimensions
    .split('x')
    .map((num) => parseInt(num, 10));
  const aspectRatio = width / height;
  return { width, height, aspectRatio };
}
function getCroppedDimensions(image, baseDimensions) {
  const crop = image.crop;
  if (!crop) {
    return baseDimensions;
  }
  const { width, height } = baseDimensions;
  const croppedWidth = width * (1 - (crop.left + crop.right));
  const croppedHeight = height * (1 - (crop.top + crop.bottom));
  return {
    width: croppedWidth,
    height: croppedHeight,
    aspectRatio: croppedWidth / croppedHeight,
  };
}
const useSanityImage = (sanityConfig, image, options = {}) => {
  return useMemo(() => {
    if (!image) {
      return null;
    }
    const id = image ? getSanityRefId(image) : null;
    if (!id) {
      return null;
    }
    const originalImageDimensions = getImageDimensions(id);
    const croppedImageDimensions = getCroppedDimensions(
      image,
      originalImageDimensions
    );
    const baseImgBuilderInstance = imageBuilder(
      imageUrlBuilder(sanityConfig).image(image).auto('format'),
      {
        width: null,
        originalImageDimensions,
        croppedImageDimensions,
        quality: null,
      }
    );
    const width =
      baseImgBuilderInstance.options.width ||
      (baseImgBuilderInstance.options.maxWidth
        ? Math.min(
            baseImgBuilderInstance.options.maxWidth,
            croppedImageDimensions.width
          )
        : croppedImageDimensions.width);
    const height =
      baseImgBuilderInstance.options.height ||
      (baseImgBuilderInstance.options.maxHeight
        ? Math.min(
            baseImgBuilderInstance.options.maxHeight,
            croppedImageDimensions.height
          )
        : Math.round(width / croppedImageDimensions.aspectRatio));
    const props = {
      src: baseImgBuilderInstance.url(),
      width,
      height,
    };
    return { ...props };
  }, [image, sanityConfig]);
};

export default useSanityImage;
