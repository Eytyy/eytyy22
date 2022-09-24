/** @jsxImportSource theme-ui */
import { CgMoreAlt } from 'react-icons/cg';
import { useProjectNavContext } from './project/context';

export default function MenuToggle() {
  const { toggleMenu } = useProjectNavContext();
  return (
    <div
      onClick={toggleMenu}
      sx={{
        position: 'fixed',
        bottom: [2, 4],
        left: 0,
        variant: 'superGrid',
        zIndex: 3,
        fontSize: 6,
        color: 'accent',
        cursor: 'pointer',
      }}
    >
      <div sx={{ gridColumn: '2/3' }}>
        <CgMoreAlt />
      </div>
    </div>
  );
}
