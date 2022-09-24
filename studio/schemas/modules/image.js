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
    {
      name: 'format',
      title: 'Format',
      type: 'string',
      options: {
        list: [
          { title: 'square', value: 'square' },
          { title: 'landscape', value: 'landscape' },
        ],
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
