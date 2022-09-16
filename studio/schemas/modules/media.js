import { MdOutlinePermMedia } from 'react-icons/md';
export default {
  name: 'mediaModule',
  title: 'Media',
  type: 'object',
  fields: [
    {
      name: 'layout',
      type: 'string',
      title: 'Layout',
      options: {
        list: [
          { title: 'Grid', value: 'grid' },
          { title: 'Random Sized Blocks', value: 'rnd' },
        ],
      },
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [{ type: 'imageModule' }, { type: 'videoModule' }],
      options: { editModal: 'fullscreen' },
    },
  ],
  preview: {
    select: {
      media: 'content',
    },
    prepare: ({ media }) => {
      return {
        media: media[0].image || media[0].file || MdOutlinePermMedia,
        title: `Media (${media.length})`,
      };
    },
  },
};
