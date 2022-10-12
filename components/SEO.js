import { urlFor } from '@lib/sanity';
import Head from 'next/head';
import React from 'react';

export default function SEO({
  seo,
  title = 'eytyy',
  description = 'Freelance Web Developer, based in Jordan, Amman.',
  url = 'https://www.eytyy.com',
}) {
  const pageTitle = seo?.title || title;
  const image = seo?.image && urlFor(seo.image);
  const desc = seo?.description || description;
  const type = seo?.type || 'website';
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content={pageTitle} />
        <meta property="og:title" content={pageTitle} />
        {desc && <meta name="description" content={desc} />}
        {desc && <meta property="og:description" content={desc} />}
        {type && <meta property="og:type" content={type} />}
        {url && <meta property="og:url" content={url} />}
        {image && <meta property="og:image" content={image} />}
      </Head>
    </>
  );
}
