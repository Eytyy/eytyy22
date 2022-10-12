import { CgStack } from 'react-icons/cg';

export default {
  name: 'collection',
  title: 'Collection',
  type: 'document',
  icon: CgStack,
  groups: [{ name: 'seo', title: 'SEO' }],
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    {
      name: 'type',
      title: 'Type',
      type: 'reference',
      to: [{ type: 'collectionType' }],
    },
    {
      name: 'description',
      title: 'Description',
      type: 'customBlockContent',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
    },
    {
      name: 'posts',
      title: 'Posts',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'post' }] }],
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seoModule',
      group: 'seo',
    },
  ],
};
