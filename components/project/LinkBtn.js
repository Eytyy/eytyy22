import React from 'react';
import { CgGlobeAlt } from 'react-icons/cg';

export function LinkBtn({ link }) {
  return (
    <a href={link} rel="noreferrer" target="_blank">
      <CgGlobeAlt />
    </a>
  );
}
