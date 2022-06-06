const theme = {
  baseFontSize: [16, 18],
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
      lineHeight: '1.1em',
      fontSize: 5,
      textTransform: 'capitalize',
      mb: 4,
    },
    postTitle: {
      fontFamily: 'heading',
      lineHeight: '1.3em',
      fontSize: 4,
      textTransform: 'lowercase',
    },
    subHeadline: {
      fontFamily: 'body',
      lineHeight: '1.3em',
      fontSize: 3,
      textTransform: 'lowercase',
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
        maxWidth: '80ch',
      },
      h2: {
        fontSize: 3,
        fontFamily: 'heading',
        lineHeight: 1.3,
        textTransform: 'lowercase',
        mb: 1,
        mt: 6,
      },
      h3: {
        fontSize: 2,
        fontFamily: 'heading',
        lineHeight: 1.3,
        textTransform: 'lowercase',
        mb: 4,
        mt: 6,
      },
      '.inlineImg': {
        my: 6,
        display: 'block',
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
      fontSize: [16],
      fontFamily: 'body',
    },
  },
};

export default theme;
