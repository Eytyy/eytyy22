export default {
  type: 'object',
  title: 'Video',
  name: 'videoModule',
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
      name: 'file',
      title: 'File',
      type: 'file',
    },
    {
      name: 'autoPlay',
      title: 'Auto Play',
      type: 'boolean',
    },
    {
      name: 'loop',
      title: 'Loop',
      type: 'boolean',
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
};
