export default {
  type: 'object',
  title: 'SEO',
  name: 'seoModule',
  fields: [
    { name: 'meta_title', title: 'Title', type: 'string' },
    {
      name: 'meta_description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'meta_image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    },
  ],
};
