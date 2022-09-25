/** @jsxImportSource theme-ui */
import { useProjectNavContext } from '@components/project/context';

export default function MenuToggle() {
  const { toggleMenu } = useProjectNavContext();
  return (
    <div
      onClick={toggleMenu}
      sx={{
        position: 'fixed',
        bottom: [7],
        left: 0,
        zIndex: 3,
        variant: 'superGrid',
        color: 'accent',
        cursor: 'pointer',
      }}
    >
      <div
        sx={{
          gridColumn: '2/4',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        menu
      </div>
    </div>
  );
}
