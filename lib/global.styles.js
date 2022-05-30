import {Global} from '@emotion/react';
import React from 'react';

const GlobalStyles = () => {
  return (
    <Global
      styles={(theme) => [
        {
          '@font-face': {
            fontFamily: 'Plex',
            src: "url('/fonts/IBMPlexMono-Regular.woff2') format('woff2')",
            fontWeight: 'normal',
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'PlexB',
            src: "url('/fonts/IBMPlexMono-Bold.woff2') format('woff2')",
            fontWeight: 'normal',
            fontStyle: 'normal',
          },
          '*, *::before, *::after': {
            boxSizing: 'border-box',
          },
          'body,h1,h2,h3,h4,h5, p,figure,picture': {
            margin: 0,
          },
          img: {
            width: '100%',
          },
        },
      ]}
    />
  );
};

export default GlobalStyles;
