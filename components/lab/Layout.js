/** @jsxImportSource theme-ui */
import LabHeader from './Header';

export default function LabLayout({ children }) {
  return (
    <div sx={{ variant: 'superGrid' }}>
      <div sx={{ gridColumn: ['2/8', '2/14'] }}>
        <LabHeader />
        {children}
      </div>
    </div>
  );
}
