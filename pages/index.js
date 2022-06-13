/** @jsxImportSource theme-ui */

import { useRef, useEffect, useCallback } from 'react';
import Head from 'next/head';

import { getClient } from '@lib/sanity.server';

import Header from '@components/header';
import CollectionPreview from '@components/collection-preview';
import QuickPost from '@components/quick-post';
import PostPreview from '@components/post-preview';
import { filterPosts, useParams } from '@lib/helpers';
import Filters from '@components/filters';

export default function Home({ data }) {
  const { posts, tags } = data;
  const [params, setParams] = useParams();

  // filter out posts that are already referenced somewhere else
  const unReferencedPosts = posts.filter((post) => {
    return (
      (post._type === 'post' && !post.referenced) ||
      post._type !== 'post'
    );
  });

  function renderContent({ _type, _id, ...rest }) {
    switch (_type) {
      case 'collection':
        return <CollectionPreview key={_id} {...rest} />;
      case 'quickPost':
        return <QuickPost key={_id} {...rest} />;
      case 'post':
        return <PostPreview key={_id} {...rest} />;
      default:
        return null;
    }
  }

  function updateParams(filter) {
    const param = filter?.slug;
    setParams(param);
  }

  const filteredPosts =
    params.length > 0
      ? filterPosts(unReferencedPosts, params)
      : unReferencedPosts;

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        toggleProgress={() => {
          setShowProgress((p) => !p);
        }}
      />
      <div sx={{ variant: 'fullGrid' }}>
        <main sx={{ variant: 'fullGrid.contentCol' }}>
          <header
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px 24px',
              py: 6,
            }}
          >
            <Filters
              activeFilters={params}
              onClick={updateParams}
              filters={tags}
            />
          </header>
          {filteredPosts && filteredPosts.map(renderContent)}
        </main>
      </div>

      <footer></footer>
    </div>
  );
}

export async function getStaticProps() {
  const allPostsQuery = `
    {
      "tags": *[_type == 'tag']{..., "slug": slug.current},
      "posts": *[_type in ["post", "collection", "quickPost"]] | order(_createdAt asc) {
        ...,
        _type == 'post' || _type == 'collection' => {
          "slug": slug.current,
        },
        _type == "quickPost" => {
          tags[]-> {
            ...,
            "slug": slug.current
          },
        },
        // flag posts that are already referenced in a collection so we can filter them out
        // on the front-end
        _type == 'post' => {
          "referenced": count(*[_type == "collection" && references(^._id)]) > 0,
           tags[]-> {
            ...,
            "slug": slug.current
          },
        },
        _type == 'collection' => {
          type-> {
            ...,
            "slug": slug.current
          },
            posts[]-> {
            ...,
            "slug": slug.current
          },
          'tags': posts[]->.tags[]->{"slug": slug.current, title, _id},
          "_lastUpdatedAt": posts[]-> | order(_updatedAt desc)[0]._updatedAt
        },
      }
    }
  `;
  const data = await getClient().fetch(allPostsQuery);
  return {
    props: {
      data,
    },
  };
}
