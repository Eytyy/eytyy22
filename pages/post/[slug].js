/** @jsxImportSource theme-ui */

import Head from 'next/head';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';

import { getClient } from '@lib/sanity.server';
import myPortableTextComponents from '@lib/portablet-text-component';

import CollectionPostsList from '@components/collection-posts-list';
import Header from '@components/header';
import MetaDates from '@components/meta-dates';
import MetaTags from '@components/meta-tags';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
const Post = ({ data }) => {
  if (!data) return null;

  const {
    _id,
    title,
    body,
    tags,
    _createdAt,
    _updatedAt,
    referencedIn,
  } = data;

  function getCollectionInfo(collection, postID) {
    if (collection?.allPosts && collection.allPosts < 1) return {};

    const { allPosts, ...rest } = collection;
    const currentPostIndex = allPosts.findIndex(
      (post) => post._id === postID
    );
    const isFirstPost = currentPostIndex === 0;
    const isLastPost = currentPostIndex === allPosts.length - 1;
    const nextPostIndex = isLastPost ? '0' : currentPostIndex + 1;
    const otherPosts = [...allPosts.slice(0, currentPostIndex)];
    allPosts.filter((post) => post._id !== postID);

    return {
      ...rest,
      isFirstPost,
      isLastPost,
      otherPosts,
      allPosts,
      currentPostIndex: currentPostIndex + 1,
      nextPostIndex: nextPostIndex + 1,
      nextPost: collection.allPosts[nextPostIndex],
    };
  }

  const collectionInfo =
    (referencedIn && getCollectionInfo(referencedIn, _id)) || null;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <article sx={{ variant: 'fullGrid' }}>
        <div sx={{ variant: 'fullGrid.contentCol' }}>
          <header sx={{ variant: 'page.header', mb: 6 }}>
            <h1 sx={{ mb: 4, variant: 'text.pageTitle' }}>{title}</h1>
            <div sx={{ variant: 'meta' }}>
              {_createdAt && (
                <MetaDates prefix="published on" date={_createdAt} />
              )}
              {_updatedAt && (
                <MetaDates prefix="updated on" date={_updatedAt} />
              )}
              {tags && <MetaTags tags={tags} />}
            </div>
          </header>
          {collectionInfo && !collectionInfo.isFirstPost && (
            <div
              sx={{
                variant: 'contextual.small',
                padding: '30px',
                boxShadow: '0px 3px 5px -1px #ddd',
              }}
            >
              <p>
                This is part {collectionInfo.currentPostIndex}{' '}
                {' of '}
                <Link href={`/guide/${collectionInfo.slug}`} passHref>
                  <a sx={{ variant: 'link' }}>
                    {collectionInfo.title}
                  </a>
                </Link>{' '}
                Guide.
                <br />
                Previous{' '}
                {collectionInfo?.otherPosts.length > 1
                  ? 'posts: '
                  : 'post: '}
                {
                  <CollectionPostsList
                    posts={collectionInfo.otherPosts.reverse()}
                  />
                }
              </p>
            </div>
          )}
          <div sx={{ variant: 'text.body' }}>
            <PortableText
              value={body}
              components={myPortableTextComponents}
            />
          </div>
          <aside sx={{ variant: 'contextual.big' }}>
            {collectionInfo &&
              !collectionInfo.isLastPost &&
              collectionInfo.nextPost && (
                <>
                  <div>
                    {`part ${collectionInfo.nextPostIndex}: `}
                    <Link
                      href={`/post/${collectionInfo.nextPost.slug}`}
                      passHref
                    >
                      <a sx={{ variant: 'link' }}>
                        {`${collectionInfo.nextPost.title}.`}
                      </a>
                    </Link>
                  </div>
                  {tags && (
                    <div>
                      {'posts in: '}
                      {tags.map((tag, index) => (
                        <span
                          sx={{ display: 'inline-block' }}
                          key={tag._id}
                        >
                          <Link href={`/tags/${tag.slug}`} passHref>
                            <a sx={{ variant: 'link' }}>
                              #{tag.title}
                            </a>
                          </Link>
                          {index === tags.length - 1 ? (
                            <span>.</span>
                          ) : (
                            <span sx={{ mr: '1ch' }}>,</span>
                          )}
                        </span>
                      ))}
                    </div>
                  )}
                </>
              )}
          </aside>
        </div>
      </article>
    </>
  );
};

export default Post;

export async function getStaticPaths() {
  const paths = await getClient().fetch(
    `*[_type == 'post' && defined(slug)][].slug.current`
  );
  return {
    paths: paths.map((slug) => ({
      params: {
        slug,
      },
    })),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const data = await getClient().fetch(
    `*[_type == 'post' && defined(slug) && slug.current == $slug][0] {
       ...,
      tags[]-> {
        ...,
        'slug': slug.current
      },
      "referencedIn": *[_type == 'collection' && references(^._id)][0] {
        "slug": slug.current,
        title,
        "type": type->.title,
        "allPosts": posts[]-> {
          ...,
          "slug": slug.current
        }
      }
    }`,
    {
      slug: params.slug,
    }
  );
  return {
    props: {
      data,
    },
  };
}
