export default {
  type: 'object',
  title: 'Image',
  name: 'imageModule',
  fields: [
    {
      name: 'caption',
      title: 'Caption',
      type: 'string',
    },
    {
      name: 'alt',
      title: 'Alt',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      media: 'image',
      title: 'alt',
    },
  },
};
