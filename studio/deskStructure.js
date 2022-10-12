import S from '@sanity/desk-tool/structure-builder';
import Blog from './structure/blog';
import { Settings } from './structure/settings';
import Work from './structure/work';

const excluded = [
  'seoSettings',
  'media.tag',
  'post',
  'quickPost',
  'tag',
  'collection',
  'collectionType',
  'project',
  'projectType',
  'status',
];

export default () =>
  S.list()
    .title('Content')
    .items([
      Work,
      Blog,
      Settings,
      ...S.documentTypeListItems().filter(
        (listItem) => !excluded.includes(listItem.getId())
      ),
    ]);
