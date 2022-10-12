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

import project from './documents/project';
import projectType from './documents/project-type';
import status from './documents/status';

import {
  imageModule,
  videoModule,
  contentModule,
  seoModule,
} from './modules';

import blockContent from './blockContent';
import customBlockContent from './customBlockContent';
import pageSection from './objects/page-section';
import person from './objects/person';
import seo from './documents/settings/seo';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    // Docs
    quickPost,
    post,
    collection,
    tag,
    collectionType,

    project,
    projectType,
    status,

    // .. settings
    seo,

    // Objects
    pageSection,
    person,

    // .. modules
    videoModule,
    imageModule,
    contentModule,
    seoModule,

    // .. block content
    blockContent,
    customBlockContent,
  ]),
});
