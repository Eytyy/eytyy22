export default {
  name: 'pageSection',
  title: 'Section',
  type: 'object',
  groups: [
    {
      name: 'main',
      title: 'Main',
    },
    {
      name: 'layout',
      title: 'Layout',
    },
  ],
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      group: 'main',
    },
    {
      name: 'hasBody',
      title: 'Has body?',
      type: 'boolean',
      initialValue: false,
      group: 'main',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      hidden: ({ parent }) => !parent.hasBody,
      group: 'main',
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      initialValue: 'image',
      options: {
        list: [
          { title: 'Image', value: 'image' },
          { title: 'Video', value: 'video' },
          { title: 'Media', value: 'media' },
          { title: 'Text', value: 'text' },
        ],
      },
      group: 'main',
    },
    {
      type: 'mediaModule',
      title: 'Media',
      name: 'mediaModule',
      hidden: ({ parent }) => parent.type !== 'media',
      group: 'main',
    },
    {
      type: 'imageModule',
      title: 'Image',
      name: 'imageModule',
      hidden: ({ parent }) => parent.type !== 'image',
      group: 'main',
    },
    {
      type: 'videoModule',
      title: 'Video',
      name: 'videoModule',
      hidden: ({ parent }) => parent.type !== 'video',
      group: 'main',
    },
    {
      type: 'blockContent',
      title: 'Text',
      name: 'textModule',
      hidden: ({ parent }) => parent.type !== 'text',
      group: 'main',
    },
    {
      name: 'parallax',
      type: 'boolean',
      title: 'Use parallax effect?',
      intitalValue: 'false',
      group: 'layout',
    },
    {
      name: 'behavior',
      type: 'string',
      title: 'Behavior',
      options: {
        list: [
          { title: 'Slide', value: 'slide' },
          { title: 'Fade', value: 'fade' },
        ],
      },
      hidden: ({ parent }) => !parent.parallax,
      defaultValue: 'slide',
      group: 'layout',
    },
  ],
};
