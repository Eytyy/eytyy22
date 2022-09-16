import myPortableTextComponents from '@lib/portablet-text-component';
import { PortableText } from '@portabletext/react';

/** @jsxImportSource theme-ui */
const Header = ({ title, body, year, role }) => {
  return (
    <header sx={{ position: 'relative' }}>
      <div
        sx={{
          position: 'relative',
          variant: 'superGrid',
        }}
      >
        <div sx={{ variant: 'nestedGrid', gridColumn: ['2/14'] }}>
          <header sx={{ gridColumn: ['1/9'], mb: 6, mb: 4 }}>
            <h1 sx={{ variant: 'text.pageTitle' }}>{title}</h1>
            <div sx={{ variant: 'meta' }}>
              {year && <div>{year}</div>}
              {role && <div>{role}</div>}
            </div>
          </header>
          <div
            sx={{
              gridColumn: ['9/-1'],
              variant: 'text.body',
              pb: '106px',
            }}
          >
            <PortableText
              value={body}
              components={myPortableTextComponents}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
