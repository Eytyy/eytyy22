import S from '@sanity/desk-tool/structure-builder';
const excluded = [];

export default () =>
  S.list()
    .title('Content')
    .items([
      ...S.documentTypeListItems().filter(
        (listItem) => !excluded.includes(listItem.getId())
      ),
    ]);
