import {ThemeProvider} from 'theme-ui';
import theme from '@lib/theme';
import GlobalStyles from '@lib/global.styles';

function MyApp({Component, pageProps}) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
