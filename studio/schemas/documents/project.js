export default {
  title: 'Project',
  name: 'project',
  type: 'document',
  groups: [
    {
      name: 'header',
      title: 'Header',
    },
    {
      name: 'main',
      title: 'Main',
    },
    {
      name: 'meta',
      title: 'Meta',
    },
  ],
  fieldsets: [
    {
      name: 'mainmedia',
      title: 'Main Media',
    },
  ],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'header',
    },
    {
      name: 'format',
      title: 'Format',
      type: 'string',
      options: {
        list: [
          { value: 'detailed', title: 'Detailed' },
          { value: 'link', title: 'Link' },
        ],
      },
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
      group: 'main',
      hidden: ({ parent }) => parent.format !== 'link',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      group: 'header',
      hidden: ({ parent }) => parent.format === 'link',
    },
    {
      name: 'mainMediaType',
      title: 'Type',
      type: 'string',
      fieldset: 'mainmedia',
      group: 'header',
      options: {
        list: [
          { title: 'Video', value: 'video' },
          { title: 'Image', value: 'image' },
        ],
      },
    },
    {
      name: 'mainVideo',
      title: 'Video',
      type: 'videoModule',
      fieldset: 'mainmedia',
      group: 'header',
      hidden: ({ parent }) => parent.mainMediaType !== 'video',
    },
    {
      name: 'mainImage',
      title: 'Image',
      type: 'imageModule',
      fieldset: 'mainmedia',
      group: 'header',
      hidden: ({ parent }) => parent.mainMediaType !== 'image',
    },
    {
      name: 'sections',
      type: 'array',
      title: 'Sections',
      of: [{ type: 'pageSection', title: 'Section' }],
      group: 'main',
      hidden: ({ parent }) => parent.format === 'link',
    },
    {
      name: 'year',
      title: 'Year',
      type: 'number',
      group: 'meta',
      hidden: ({ parent }) => parent.format === 'link',
    },
    {
      name: 'status',
      type: 'reference',
      to: [{ type: 'status' }],
      title: 'Status',
      group: 'meta',
    },
    {
      name: 'launchDate',
      type: 'string',
      title: 'Launch Date',
      group: 'meta',
    },
    {
      name: 'type',
      title: 'Type',
      type: 'reference',
      to: [{ type: 'projectType' }],
      group: 'meta',
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
      group: 'meta',
      hidden: ({ parent }) => parent.format === 'link',
    },
    {
      name: 'team',
      type: 'array',
      title: 'Team',
      of: [{ type: 'person' }],
      group: 'meta',
      hidden: ({ parent }) => parent.format === 'link',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      group: 'main',
      hidden: ({ parent }) => parent.format === 'link',
    },
  ],
};
