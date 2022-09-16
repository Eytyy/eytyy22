import { ThemeProvider } from 'theme-ui';
import theme from '@lib/theme';
import GlobalStyles from '@lib/global.styles';
import Layout from '@components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <GlobalStyles />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
