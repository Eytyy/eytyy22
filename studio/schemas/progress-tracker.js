export default {
  name: 'progressTracker',
  title: 'Progress Tracker',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Tracker',
    },
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [{type: 'progressItem'}],
    },
  ],
};
