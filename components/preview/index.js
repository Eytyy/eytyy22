/** @jsxImportSource theme-ui */

import Link from 'next/link';
import { BsArrowUpRight } from 'react-icons/bs';

export default function Preview({ _type, ...props }) {
  return <Block _type={_type} {...props} />;
}

function Block({ format, _type, slug, link, title }) {
  switch (format) {
    case 'link':
      return (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          sx={{
            width: '100%',
            height: '100%',
            fontSize: 3,
            color: 'transparent',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {title}
          <BsArrowUpRight />
        </a>
      );
    default:
      return (
        <Link href={getPageLink(_type, slug)} passHref>
          <a sx={{}}>{title}</a>
        </Link>
      );
  }
}

function getPageLink(type, slug) {
  switch (type) {
    case 'project':
      return `/work/${slug}`;
    case 'post':
      return `/posts/${slug}`;
    default:
      return slug;
  }
}
