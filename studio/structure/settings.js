import S from '@sanity/desk-tool/structure-builder';
import { CgBolt, CgEye } from 'react-icons/cg';

const seoSettings = S.documentListItem()
  .schemaType('seoSettings')
  .title('Default SEO')
  .icon(CgEye)
  .child(
    S.document()
      .schemaType('seoSettings')
      .documentId('defaultSeo')
      .views([S.view.form()])
  );

export const Settings = S.listItem()
  .title('Settings')
  .icon(CgBolt)
  .child(S.list().title('Settings').items([seoSettings]));
