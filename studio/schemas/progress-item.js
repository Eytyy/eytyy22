import React from 'react';
import {MdDone, MdClose, MdOutlinePending} from 'react-icons/md';

export default {
  name: 'progressItem',
  title: 'Progress Item',
  type: 'object',
  fields: [
    {
      name: 'progress',
      type: 'string',
      title: 'Progress',
      options: {
        list: [
          {value: 'pending', title: 'Pending'},
          {value: 'done', title: 'Done'},
          {value: 'inqueue', title: 'Not Started'},
        ],
      },
      initialValue: 'inqueue',
    },
    {
      name: 'date',
      type: 'datetime',
      title: 'Date',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Discription',
      type: 'text',
    },
  ],
  preview: {
    select: {
      title: 'title',
      progress: 'progress',
    },
    prepare(selection) {
      const {progress} = selection;
      return Object.assign({}, selection, {
        media:
          progress === 'done' ? (
            <MdDone />
          ) : progress === 'pending' ? (
            <MdOutlinePending />
          ) : (
            <MdClose />
          ),
      });
    },
  },
};
