export default {
  name: 'seoSettings',
  title: 'Default SEO',
  type: 'document',
  __experimental_actions: ['update', 'publish', 'create', 'delete'],

  fields: [
    {
      name: 'meta_title',
      title: 'Title',
      type: 'string',
      initialValue: 'Site Name',
    },
    {
      name: 'meta_description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'meta_image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'meta_image',
    },
  },
};
