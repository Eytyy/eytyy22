/** @jsxImportSource theme-ui */
import { useCharShuffle } from 'hooks/useCharShuffle';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { forwardRef } from 'react';
import { BsArrowLeft, BsQuestion } from 'react-icons/bs';

const HomeLink = forwardRef(function WrappedHomeLink(props, ref) {
  const { pathname } = useRouter();
  function Icon() {
    if (pathname !== '/') return <BsArrowLeft />;
    return <BsQuestion />;
  }
  const title = 'EYTYY';
  const bg = 'blue';
  const color = 'white';
  const speed = 0.2;
  const sticky = true;
  const [char] = useCharShuffle(title, speed);

  return (
    <Link href={'/'} passHref>
      <a
        ref={ref}
        sx={{
          textDecoration: 'none',
          color: color,
          position: sticky ? 'sticky' : 'relative',
          bg: bg,
          top: 0,
          zIndex: sticky ? 10 : 3,
        }}
      >
        <div sx={{ fontSize: 9, fontFamily: 'heading', pt: '100%' }}>
          <div
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            {char}
          </div>
          {Icon && (
            <div
              sx={{
                color: 'red',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                svg: { display: 'block' },
              }}
            >
              <Icon />
            </div>
          )}
        </div>
      </a>
    </Link>
  );
});

export default HomeLink;
