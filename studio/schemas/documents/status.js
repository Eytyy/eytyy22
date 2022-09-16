export default {
  name: 'status',
  type: 'document',
  title: 'Status',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'weight',
      type: 'number',
      title: 'Weight',
    },
  ],
};
