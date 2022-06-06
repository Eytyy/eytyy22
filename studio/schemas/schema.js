// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// We import object and document schemas
import quickPost from './quick-post';
import post from './post';
import collection from './collection';
import tag from './tag';
import collectionType from './collectionType';
import progressTracker from './progress-tracker';

import blockContent from './blockContent';
import customBlockContent from './customBlockContent';
import progressItem from './progress-item';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    quickPost,
    post,
    collection,
    tag,
    collectionType,
    progressTracker,

    blockContent,
    customBlockContent,
    progressItem,
  ]),
});
