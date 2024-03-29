export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  groups: [{ name: 'seo', title: 'SEO' }],
  fields: [
    {
      name: 'status',
      type: 'string',
      title: 'Status',
      options: {
        list: [
          { title: 'Not Started', value: 'not-started' },
          { title: 'In Progress', value: 'in-progress' },
          { title: 'Finished', value: 'finished' },
        ],
      },
      initialValue: 'not-started',
    },
    { name: 'title', title: 'Title', type: 'string' },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
        timeStep: 15,
        calendarTodayLabel: 'Today',
      },
    },
    { name: 'body', title: 'Body', type: 'customBlockContent' },
    {
      name: 'blocks',
      type: 'array',
      title: 'Blocks',
      of: [{ type: 'imageModule' }],
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'tag' } }],
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seoModule',
      group: 'seo',
    },
  ],
  preview: {
    select: { title: 'title', publishedAt: 'publishedAt' },
    prepare(selection) {
      const { publishedAt } = selection;
      return Object.assign({}, selection, {
        subtitle: publishedAt && `published at: ${publishedAt}`,
      });
    },
  },
};
