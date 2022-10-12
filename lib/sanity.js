import { sanityConfig } from '@lib/config';
import createImageUrlBuilder from '@sanity/image-url';

// Handy builder to access the rich selection of processing
// options available in the Sanity image pipeline.
const imageBuilder = createImageUrlBuilder(sanityConfig);

export const urlFor = (source) =>
  imageBuilder.image(source).width(1080).url();

/**
 * Usage:
 *
 * Get url based on specified img width and height:
 * const img = urlFor(source)
 * img.width().height.url()
 *
 * The url function needs to be last in order to output
 * the url string
 *
 * Useful options
 * img.width() // specify width
 * img.height() // specify height
 * img.format() // Specify the image format: jpg, pjpg, png, webp
 * img.auto('format') // format - Automatically uses WebP if supported
 *
 * Cropping and other relalted art direction options
 * are better to be handled from the studio
 */
