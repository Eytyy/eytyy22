const theme = {
  baseFontSize: [16, 20],
  fontSizes: [
    '0.75rem',
    '1rem',
    '1.333rem',
    '1.777rem',
    '2.359rem',
    '3.157rem',
  ],
  fonts: {
    body: 'Plex, system-ui, sans-serif',
    heading: 'PlexB, system-ui, sans-serif',
  },
  space: [0, 4, 8, 16, 20, 24, 32, 48, 60, 72],
  breakpoints: ['760px', '1280px', '1440px'],
  colors: {
    text: '#000',
    background: '#FFF',
    primary: '#000',
    secondary: '#000',
    accent: '#0000FF',
    muted: '#999',
  },
  link: {
    color: 'accent',
    textDecoration: 'none',
    fontFamily: 'heading',
    '&:hover': {
      textDecoration: 'underline',
    },
    '&:focus, &:active': {
      color: 'primary',
    },
  },
  wrapper: {
    fixed: {
      width: '100%',
      maxWidth: '1440px',
      m: 0,
      mx: 'auto',
      px: [6, 7, 8],
    },
    full: {
      width: '100%',
      m: 0,
      mx: 'auto',
      px: [6, 7, 8],
    },
  },
  fullGrid: {
    display: 'grid',
    columnGap: [3, 5, 5],
    gridTemplateColumns: [
      'minmax(calc(32px - 16px), 1fr) repeat(6, minmax(0, 1fr)) minmax(calc(32px - 16px), 1fr)',
      'calc(40px - 24px) repeat(6, minmax(0, 1fr)) calc(40px - 24px)',
      'minmax(calc(60px - 24px), 1fr) repeat(12, minmax(0, 98px)) minmax(calc(60px - 24px), 1fr)',
      'minmax(calc(60px - 24px), 1fr) repeat(12, minmax(0, 98px)) minmax(calc(60px - 24px), 1fr)',
    ],
  },
  nestedGrid: {
    display: 'grid',
    columnGap: [3, 5, 5],
    gridTemplateColumns: [
      'repeat(6, 1fr)',
      'repeat(6, 1fr)',
      'repeat(12, 1fr)',
      'repeat(12, 1fr)',
    ],
  },
  text: {
    pageTitle: {
      fontFamily: 'heading',
      lineHeight: '1em',
      fontSize: 5,
      textTransform: 'uppercase',
    },
    sectionTitle: {
      fontFamily: 'heading',
      lineHeight: '1em',
      fontSize: 3,
      textTransform: 'uppercase',
    },
    moduleTitle: {
      fontFamily: 'heading',
      lineHeight: '1em',
      fontSize: 2,
      textTransform: 'uppercase',
      mb: [6],
      mt: [8],
    },
    meta: {
      fontFamily: 'body',
      lineHeight: '1em',
      fontSize: 0,
    },
    body: {
      fontFamily: 'body',
      lineHeight: '1.3em',
      fontWeight: 'normal',
      fontSize: 1,
      p: {
        mb: '1.35em',
      },
    },
    highlighted: {
      fontFamily: 'heading',
      fontSize: 6,
      lineHeight: '1.2em',
      fontWeight: 'normal',
    },
  },
  styles: {
    root: {
      fontSize: [16, 20],
    },
  },
};

export default theme;
