/** @jsxImportSource theme-ui */
import { DataProvider } from '@lib/context';

export default function Layout({ children }) {
  return <DataProvider>{children}</DataProvider>;
}
