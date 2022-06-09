/** @jsxImportSource theme-ui */

import Link from 'next/link';

const CollectionPostsList = ({ posts }) => {
  return posts.map((post, index) => (
    <span key={post._id}>
      <Link href={`/post/${post.slug}`} passHref>
        <a sx={{ variant: 'link' }}>{post.title}</a>
      </Link>
      {index === posts.length - 1 ? (
        <span>.</span>
      ) : (
        <span sx={{ mr: '1ch' }}>,</span>
      )}
    </span>
  ));
};

export default CollectionPostsList;
