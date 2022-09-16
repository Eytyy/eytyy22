// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// We import object and document schemas
import quickPost from './documents/quick-post';
import post from './documents/post';
import collection from './documents/collection';
import tag from './documents/tag';
import collectionType from './documents/collectionType';
import progressTracker from './progress-tracker';

import blockContent from './blockContent';
import customBlockContent from './customBlockContent';
import progressItem from './progress-item';
import extraImage from './objects/extra-image';
import project from './documents/project';
import projectType from './documents/project-type';
import status from './documents/status';

import pageSection from './objects/page-section';
import {
  mediaModule,
  imageModule,
  videoModule,
  contentModule,
} from './modules';
import person from './objects/person';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    quickPost,
    post,
    collection,
    tag,
    collectionType,
    progressTracker,
    extraImage,

    project,
    projectType,
    status,
    person,

    pageSection,
    mediaModule,
    videoModule,
    imageModule,
    contentModule,

    blockContent,
    customBlockContent,
    progressItem,
  ]),
});
