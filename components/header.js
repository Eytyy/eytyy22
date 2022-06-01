/** @jsxImportSource theme-ui */
import Link from 'next/link';
const Header = () => {
  return (
    <div sx={{position: 'sticky', width: '100%', top: '0', zIndex: 10}}>
      <div
        sx={{
          variant: 'wrapper.fixed',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: [6, 7, 8],
          py: [6],
        }}
      >
        <Link href='/' passHref>
          <a
            sx={{
              fontFamily: 'heading',
              textDecoration: 'none',
              color: 'accent',
            }}
          >
            eytyy
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Header;
