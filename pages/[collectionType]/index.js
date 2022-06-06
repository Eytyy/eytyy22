/** @jsxImportSource theme-ui */
import {getClient} from '@lib/sanity.server';
import Link from 'next/link';

const CollectionsLanding = ({data, collectionType}) => {
  return (
    <div sx={{variant: 'wrapper.fixed'}}>
      {data && (
        <ol>
          {data.map((post) => (
            <li key={post._id}>
              <Link href={`/${collectionType}/${post.slug.current}`}>
                <a>{post.title}</a>
              </Link>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default CollectionsLanding;

export async function getStaticPaths() {
  const paths = await getClient().fetch(
    `*[ _type == "collection" && defined(type->.slug)][].type->.slug.current`
  );
  return {
    paths: paths.map((collectionType) => ({params: {collectionType}})),
    fallback: true,
  };
}

export async function getStaticProps({params}) {
  const data = await getClient().fetch(
    `*[_type == "collection" && type->.slug.current == $collectionType]`,
    {collectionType: params.collectionType}
  );
  return {
    props: {
      data,
      collectionType: params.collectionType,
    },
  };
}
