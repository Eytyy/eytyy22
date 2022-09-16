/** @jsxImportSource theme-ui */
import { keyframes } from '@emotion/react';
import Link from 'next/link';

const Header = () => {
  const flip = keyframes({
    '0%': { color: 'blue' },
    '50%': { color: 'red' },
    '100%': { color: 'orange' },
  });
  return (
    <div
      sx={{ position: 'fixed', width: '100%', top: '0', zIndex: 30 }}
    >
      <div sx={{ variant: 'superGrid' }}>
        <div
          sx={{
            variant: 'superGrid.fullWidthNoBleedCol',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            py: [6],
          }}
        />
      </div>
    </div>
  );
};

export default Header;
