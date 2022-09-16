export default {
  title: 'Extra Image',
  type: 'object',
  name: 'extraImage',
  fields: [
    {
      name: 'type',
      title: 'Render type',
      type: 'string',
      options: {
        list: [
          {
            value: 'combo',
            title: 'Sanity Cropping + Next.js Image',
          },
          { value: 'sanity', title: 'Sanity Default' },
          { value: 'next', title: 'Next.js Default' },
        ],
      },
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
      name: 'caption',
      title: 'Caption',
      type: 'string',
    },
  ],
};
