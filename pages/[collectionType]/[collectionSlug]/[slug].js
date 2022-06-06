import {useRouter} from 'next/router';
import React from 'react';

const CollectionItem = () => {
  const {query} = useRouter();
  return (
    <div>
      <h1>
        {query.collectionType}s/{query.collectionSlug}/{query.slug}
      </h1>
    </div>
  );
};

export default CollectionItem;
