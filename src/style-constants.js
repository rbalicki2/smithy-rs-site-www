export const breakpointInfo = {
  DESKTOP: {
    minWidth: 1200,
    containerWidth: 1008,
    containerPadding: 0,
    mediaQuery: '@media only screen and (min-width: 1200px)',
  },
  MOBILE: {
    containerWidth: 'calc(100% - 40px)',
    containerPadding: 20,
    mediaQuery: '@media only screen and (max-width: 1199px)',
  },
};

export const colors = {
  WHITE: '#FFF',
  BLACK: '#000',
  ALMOST_BLACK: '#282c34',

  HIGHLIGHT: '#61dafb',
  HIGHLIGHT_SOFT: '#41B7D8',

  OFF_WHITE: '#E6E6E6',
  ALMOST_WHITE: '#F0F0F0',
  CLOSE_TO_WHITE: '#FAFAFA',
};

export const fonts = {
  FONT_FAMILY: '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif',
};

export const visibilityBreak = 800;
