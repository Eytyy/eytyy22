/** @jsxImportSource theme-ui */
import { useCharShuffle } from 'hooks/useCharShuffle';
import Link from 'next/link';

/** @jsxImportSource theme-ui */
export default function LinkBlock({
  title,
  color = 'black',
  bg = 'white',
  iconColor = 'red',
  sticky = false,
  freeze,
  type = 'main',
  link,
  speed = 0.2,
  Icon,
}) {
  const [char] = useCharShuffle(title, speed, freeze);

  return (
    <Link href={link} passHref>
      <a
        sx={{
          textDecoration: 'none',
          color: freeze && type === 'section' ? 'blue' : color,
          position: sticky ? 'sticky' : 'relative',
          bg: freeze && type === 'section' ? 'blue' : bg,
          top: 0,
          zIndex: sticky ? 10 : 3,
        }}
      >
        <div sx={{ fontSize: 9, fontFamily: 'heading', pt: '100%' }}>
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
      </a>
    </Link>
  );
}
