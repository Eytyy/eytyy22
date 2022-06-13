/** @jsxImportSource theme-ui */
import Link from 'next/link';
import { MdOutlineHistoryToggleOff } from 'react-icons/md';

const Header = ({ toggleProgress }) => {
  return (
    <div
      sx={{ position: 'sticky', width: '100%', top: '0', zIndex: 10 }}
    >
      <div sx={{ variant: 'fullGrid' }}>
        <div
          sx={{
            variant: 'fullGrid.fullWidthNoBleedCol',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            py: [6],
          }}
        >
          <Link href="/" passHref>
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
    </div>
  );
};

export default Header;
