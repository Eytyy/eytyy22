/** @jsxImportSource theme-ui */
import { DataProvider } from '@lib/context';

export default function Layout({ children }) {
  return (
    <DataProvider>
      <main>{children}</main>
    </DataProvider>
  );
}
