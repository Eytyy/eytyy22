export default {
  name: 'pageSection',
  title: 'Section',
  type: 'object',
  fieldsets: [
    {
      name: 'mainmedia',
      title: 'Main Media',
    },
  ],
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'hasBody',
      title: 'Has body?',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      hidden: ({ parent }) => !parent.hasBody,
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        { type: 'imageModule', Title: 'Image' },
        { type: 'videoModule', Title: 'Video' },
        { type: 'blockContent', Title: 'Text' },
      ],
    },
  ],
};
