import { ThemeProvider } from 'theme-ui';
import theme from '@lib/theme';
import GlobalStyles from '@lib/global.styles';
import Layout from '@components/Layout';
import { AnimatePresence } from 'framer-motion';
import PlausibleProvider from 'next-plausible';

function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeProvider theme={theme}>
      <PlausibleProvider domain="eytyy.com">
        <Layout>
          <GlobalStyles />
          <AnimatePresence
            mode="wait"
            onExitComplete={() => window.scrollTo(0, 0)}
          >
            <Component {...pageProps} key={router.asPath} />
          </AnimatePresence>
        </Layout>
      </PlausibleProvider>
    </ThemeProvider>
  );
}

export default MyApp;
