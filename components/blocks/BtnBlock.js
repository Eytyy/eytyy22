import { useCharShuffle } from 'hooks/useCharShuffle';

/** @jsxImportSource theme-ui */
export default function BtnBlock({
  title,
  color = 'blue',
  bg = 'white',
  sticky = false,
  freeze,
  type = 'main',
  onClick,
  speed = 0.2,
  iconSize = 1,
  Icon,
  iconColor = 'red',
}) {
  const [char] = useCharShuffle(title, speed, freeze);
  return (
    <div
      onClick={onClick}
      sx={{
        cursor: 'pointer',
        bg: freeze && type === 'section' ? 'blue' : bg,
        fontSize: 9,
        color: freeze && type === 'section' ? 'blue' : color,
        fontFamily: 'heading',
        position: sticky ? 'sticky' : 'relative',
        top: 0,
        zIndex: sticky ? 10 : 3,
      }}
    >
      <div sx={{ position: 'relative', pt: '100%' }}>
        <div
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          {char}
        </div>
        {Icon && (
          <div
            sx={{
              fontSize: `${iconSize}em`,
              color: iconColor,
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              svg: { display: 'block' },
            }}
          >
            <Icon />
          </div>
        )}
      </div>
    </div>
  );
}
