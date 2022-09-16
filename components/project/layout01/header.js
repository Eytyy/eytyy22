import myPortableTextComponents from '@lib/portablet-text-component';
import { PortableText } from '@portabletext/react';
import useParallax from 'hooks/useParallax';
import { useInView } from 'react-intersection-observer';
import MainMedia from './main-media';

/** @jsxImportSource theme-ui */
const Header = ({
  title,
  body,
  year,
  showMainMedia,
  mainMedia,
  role,
}) => {
  const suspended = showMainMedia && mainMedia.style == 'parallax';
  const { ref, inView, entry } = useInView({ threshold: 0 });
  const { percentage } = useParallax(inView, entry);
  const halfWayThrought = percentage >= 50;
  return (
    <header
      sx={{
        position: suspended ? 'relative' : 'sticky',
        top: suspended ? 'auto' : '106px',
      }}
    >
      <div
        sx={{
          position: suspended ? 'fixed' : 'relative',
          top: suspended ? '106px' : 'auto',
          zIndex: halfWayThrought ? '0' : '2',
          variant: 'superGrid',
          height: suspended ? 'calc(100vh - 106px)' : 'auto',
        }}
      >
        <div sx={{ variant: 'nestedGrid', gridColumn: ['2/14'] }}>
          <header sx={{ gridColumn: ['1/9'], mb: 6, mb: 4 }}>
            <h1
              style={{
                color: `hsla(0deg 0% 0% / ${(
                  100 - percentage
                ).toFixed(1)}%)`,
              }}
              sx={{ variant: 'text.pageTitle' }}
            >
              {title}
            </h1>
            <div sx={{ variant: 'meta' }}>
              {year && <div>{year}</div>}
              {role && <div>{role}</div>}
            </div>
          </header>
          <div
            style={{
              color: `hsl(0deg 0% ${percentage}%)`,
            }}
            sx={{
              gridColumn: ['9/-1'],
              variant: 'text.body',
              pb: '106px',
            }}
          >
            <PortableText
              value={body}
              components={myPortableTextComponents}
            />
          </div>
        </div>
      </div>
      {showMainMedia && (
        <MainMedia
          inView={inView}
          percentage={percentage}
          {...mainMedia}
        />
      )}
      {showMainMedia && (
        <div
          ref={ref}
          className="spacer"
          sx={{ visibility: 'visible', height: '100vh', bg: '#000' }}
        />
      )}
    </header>
  );
};

export default Header;
