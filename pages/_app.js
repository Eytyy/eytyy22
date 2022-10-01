import { ThemeProvider } from 'theme-ui';
import theme from '@lib/theme';
import GlobalStyles from '@lib/global.styles';
import Layout from '@components/Layout';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <GlobalStyles />
        <AnimatePresence
          exitBeforeEnter
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
