const theme = {
  baseFontSize: [16, 18, 20],
  fontSizes: [
    '0.75rem',
    '1rem',
    '1.333rem',
    '1.777rem',
    '2.359rem',
    '3.157rem',
    '4.209rem',
    '5.61rem',
    '7.478rem',
    '9.969rem',
  ],
  fonts: {
    body: 'Plex, system-ui, sans-serif',
    heading: 'PlexB, system-ui, sans-serif',
  },
  space: [0, 4, 8, 16, 20, 24, 32, 48, 60, 72, 92, 100],
  breakpoints: ['760px', '1280px', '1440px', '1600px'],
  colors: {
    text: '#000',
    background: '#FFF',
    primary: '#000',
    secondary: '#000',
    accent: '#0000FF',
    muted: '#999',
  },
  circle: {
    height: '10px',
    width: '10px',
    bg: 'accent',
    display: 'inline-block',
    borderRadius: '100%',
    mr: '10px',
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

  superGrid: {
    display: 'grid',
    columnGap: [3, 5, 7], // 16, 24 ,48
    gridTemplateColumns: [
      // col-size = (maxContentWidth - (13 * gap + sideColsWidth * 2)) / numberOfCols
      // colSize = (1728 - (7 * 16) + (32 *2)) / 6 = 82
      'minmax(32px, 1fr) repeat(6, minmax(auto, 258.666666666666667px)) minmax(32px, 1fr)',
      // colSize = (1728 - (7 * 24) + (48 *2)) / 6 = 82
      'minmax(48px, 1fr) repeat(6, minmax(auto, 244px)) minmax(48px, 1fr)',
      // colSize = (1728 - (13 * 48) + (60 *2)) / 12 = 82
      'minmax(60px, 1fr) repeat(12, minmax(auto, 82px)) minmax(60px, 1fr)',
    ],
    fullWidth: {
      gridColumn: ['2 / 14'],
    },
    fullWidthNoBleedCol: {
      gridColumn: ['2 / span 6', null, '2 / span 12'],
    },
    contentCol: {
      gridColumn: ['2 / span 6', null, '2 / span 8'],
    },
  },

  nestedGrid: {
    display: 'grid',
    columnGap: [3, 5, 7],
    gridTemplateColumns: [
      'repeat(6, 1fr)',
      'repeat(6, 1fr)',
      'repeat(12, 1fr)',
      'repeat(12, 1fr)',
    ],
  },

  projectSection: {
    variant: 'superGrid',
    gridTemplateRows: 'auto min-content',
    position: 'relative',
    minHeight: ['auto', 'autp', '100vh'],
    mb: [5, 7],
    main: {
      variant: 'superGrid',
      position: 'relative',
      gridColumn: '1/-1',
      mt: 9,
    },

    squareInner: {
      gridColumn: ['2/8', '3/7', '6/10'],
      mb: [8],
      blockWrapper: {
        pt: '100%',
        position: 'relative',
      },
    },

    defaultInner: {
      gridColumn: ['2/8', '2/8', '4/12'],
      mb: [8],
      blockWrapper: {
        pt: '56.25%',
        position: 'relative',
      },
    },

    block: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
    },

    body: {
      variant: 'text.body',
      zIndex: 2,
      gridColumn: ['2/8', '4/8', '7/14'],
      position: ['relative', null, 'sticky'],
      bottom: [0, 0, 5],
      color: 'accent',
    },

    floatingBtn: {
      default: {
        position: 'absolute',
        top: '0',
        right: '0',
        transformOrigin: 'left',
        zIndex: 10,
        color: 'blue',
        cursor: 'pointer',
        display: 'block',
      },
      link: {
        variant: 'projectSection.floatingBtn.default',
        fontSize: 6,
        top: '50%',
        transform: 'translate(-35%, -50%)',
        a: {
          color: 'accent',
        },
      },
      resize: {
        variant: 'projectSection.floatingBtn.default',
        fontSize: 5,
      },
    },
  },

  meta: {
    fontFamily: 'body',
    lineHeight: '1em',
    fontSize: 1,
    display: ['grid', 'grid', 'flex'],
    gap: [2, 2, 6],
    mt: 3,
    time: {
      display: 'block',
    },
  },

  contextual: {
    small: {
      my: [8],
      fontFamily: 'heading',
      fontSize: [2],
      textTransform: 'lowercase',
    },
    big: {
      my: [8],
      fontFamily: 'heading',
      fontSize: [3, 4],
      textTransform: 'lowercase',
    },
  },

  video: {
    playBox: {
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 2,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      fontSize: 6,
      color: 'accent',
      cursor: 'pointer',
    },
    default: {
      width: 'auto',
      height: '100%',
      display: 'block',
      margin: '0 auto',
    },
  },

  menu: {
    variant: 'superGrid',
    fontFamily: 'heading',
    fontSize: [3, 3, 6],
    zIndex: 2,
    py: 6,

    label: {
      display: ['inline'],
      fontSize: '1em',
    },

    link: {
      color: 'accent',
      textDecoration: 'none',
    },

    listLink: {
      variant: 'menu.link',
      textDecoration: 'underline',
      '&:hover': {
        textDecoration: 'none',
      },
    },

    inner: {
      gridColumn: ['2/8', '2/8', '2/14'],
    },
  },

  mainMenu: {
    variant: 'menu',
  },

  innerTopMenu: {
    variant: 'menu',
    minHeight: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    bg: 'white',
    zIndex: 3,
  },

  innerBottomMenu: {
    variant: 'menu',
    minHeight: '100vh',
  },

  text: {
    pageTitle: {
      fontFamily: 'heading',
      lineHeight: '1em',
      fontSize: [3, 4],
      m: 0,
    },
    postTitle: {
      fontFamily: 'heading',
      lineHeight: '1.3em',
      fontSize: 5,
    },
    previewTitle: {
      fontFamily: 'heading',
      lineHeight: '1.1em',
      fontSize: 4,
    },
    subHeadline: {
      fontFamily: 'heading',
      lineHeight: '1.3em',
      fontSize: 4,
    },
    sectionTitle: {
      fontFamily: 'heading',
      lineHeight: '1.3em',
      fontSize: [4, 5, 6],
    },
    body: {
      fontFamily: 'body',
      lineHeight: '1.5em',
      fontWeight: 'normal',
      fontSize: 1,
      p: {
        mb: '1.35em',
        maxWidth: '80ch',
      },
      h2: {
        fontSize: 4,
        fontFamily: 'heading',
        lineHeight: 1.3,
        mb: 1,
        mt: 8,
      },
      h3: {
        fontSize: 3,
        fontFamily: 'heading',
        lineHeight: 1.3,
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
      fontSize: [16, null, 18, 18],
      fontFamily: 'body',
    },
  },
};

export default theme;
