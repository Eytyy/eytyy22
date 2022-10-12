import S from '@sanity/desk-tool/structure-builder';
import {
  CgStack,
  CgFilters,
  CgNotes,
  CgTag,
  CgPen,
} from 'react-icons/cg';

const Collections = S.listItem()
  .title('Collections')
  .icon(CgStack)
  .child(
    S.documentTypeList('collection')
      .title('Collections')
      .child((documentId) =>
        S.document().documentId(documentId).schemaType('collection')
      )
      .canHandleIntent(
        (intent, { type }) =>
          ['create', 'edit'].includes(intent) && type === 'collection'
      )
  );

const CollectionTypes = S.listItem()
  .title('Collection Types')
  .icon(CgFilters)
  .child(
    S.documentTypeList('collectionType')
      .title('Collection Types')
      .child((documentId) =>
        S.document()
          .documentId(documentId)
          .schemaType('collectionType')
      )
      .canHandleIntent(
        (intent, { type }) =>
          ['create', 'edit'].includes(intent) &&
          type === 'collectionType'
      )
  );

const Posts = S.listItem()
  .title('Posts')
  .icon(CgNotes)
  .child(
    S.documentTypeList('post')
      .title('Posts')
      .child((documentId) =>
        S.document().documentId(documentId).schemaType('post')
      )
      .canHandleIntent(
        (intent, { type }) =>
          ['create', 'edit'].includes(intent) && type === 'post'
      )
  );

const QuickPosts = S.listItem()
  .title('Quick Posts')
  .icon(CgNotes)
  .child(
    S.documentTypeList('quickPost')
      .title('Quick Posts')
      .child((documentId) =>
        S.document().documentId(documentId).schemaType('quickPost')
      )
      .canHandleIntent(
        (intent, { type }) =>
          ['create', 'edit'].includes(intent) && type === 'quickPost'
      )
  );

const Tags = S.listItem()
  .title('Tags')
  .icon(CgTag)
  .child(
    S.documentTypeList('tag')
      .title('Tags')
      .child((documentId) =>
        S.document().documentId(documentId).schemaType('tag')
      )
      .canHandleIntent(
        (intent, { type }) =>
          ['create', 'edit'].includes(intent) && type === 'tag'
      )
  );

const Blog = S.listItem()
  .title('Blog')
  .icon(CgPen)
  .child(
    S.list()
      .title('Blog')
      .items([Collections, CollectionTypes, Posts, QuickPosts, Tags])
  );

export default Blog;
