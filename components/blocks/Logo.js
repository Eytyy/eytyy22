/** @jsxImportSource theme-ui */
import { useCharShuffle } from 'hooks/useCharShuffle';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BsArrowLeft, BsQuestion } from 'react-icons/bs';

const Logo = (props) => {
  const { pathname } = useRouter();
  function Icon() {
    if (pathname !== '/') return <BsArrowLeft />;
    return <BsQuestion />;
  }
  const title = 'EYASTAYYEM';
  const speed = 0.2;
  const [char] = useCharShuffle(title, speed);

  return (
    <Link href={'/'} passHref>
      <a
        sx={{
          variant: 'menu.link',
          width: '1ch',
          display: 'inline-block',
          mr: '0.5ch',
        }}
      >
        <div
          sx={{
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
          }}
        >
          {char}
        </div>
      </a>
    </Link>
  );
};

export default Logo;
