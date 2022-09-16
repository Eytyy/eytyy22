/** @jsxImportSource theme-ui */
import Header from '@components/header';
import SiteNavigation from '@components/SiteNavigation';
import { DataProvider } from '@lib/context';

export default function Layout({ children }) {
  return (
    <DataProvider>
      <Header />
      <SiteNavigation />
      <main sx={{ position: 'relative', zIndex: '20' }}>
        {children}
      </main>
    </DataProvider>
  );
}
