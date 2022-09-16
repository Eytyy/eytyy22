/** @jsxImportSource theme-ui */

import Link from 'next/link';
import { BsArrowUpRight } from 'react-icons/bs';
export default function Preview({
  onMouseEnter,
  onMouseLeave,
  fill = 'blue',
  inverse = 'red',
  _type,
  active,
  ...props
}) {
  return (
    <div
      sx={{
        position: 'relative',
        pt: '100%',
        cursor: 'pointer',
        bg: fill,
        ':hover': {
          bg: inverse,
          a: { bg: active ? inverse : inverse },
        },
      }}
      onMouseEnter={(e) => onMouseEnter(e.currentTarget)}
      onMouseLeave={onMouseLeave}
    >
      <Block _type={_type} {...props} />
    </div>
  );
}

function Block({ format, _type, slug, link }) {
  switch (format) {
    case 'link':
      return (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          sx={{
            position: 'absolute',
            display: 'flex',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            fontSize: 9,
            color: 'transparent',
            alignItems: 'center',
            justifyContent: 'center',
            ':hover': { color: 'white' },
          }}
        >
          <BsArrowUpRight />
        </a>
      );
    default:
      return (
        <Link href={getPageLink(_type, slug)} passHref>
          <a
            sx={{
              position: 'absolute',
              display: 'block',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
          ></a>
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
