/** @jsxImportSource theme-ui */
import { useNavData, useTooltip } from '@lib/context';
import { useRouter } from 'next/router';
import HomeLink from './blocks/HomeLink';
import Preview from './preview';
import TitleTooltip from './TitleTooltip';

export default function SiteNavigation() {
  const { navData } = useNavData();
  const { tooltip, setTooltip } = useTooltip();

  function onMouseEnter(data) {
    if (tooltip?._id === data._id) {
      setTooltip(null);
      return true;
    }
    setTooltip({ ...data });
  }

  function onMouseLeave(data) {
    if (tooltip?._id === data._id) {
      setTooltip(null);
      return true;
    }
  }

  const { query } = useRouter();
  const showToolTip = !query?.slug;

  return (
    <nav
      sx={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        minHeight: '100vh',
        overflowX: 'scroll',
        bg: showToolTip ? 'blue' : 'white',
      }}
    >
      <TitleTooltip visible={showToolTip} data={tooltip} />
      <div
        sx={{
          position: 'relative',
          flexWrap: 'wrap',
          gridColumn: '1/-1',
          display: 'grid',
          gridTemplateColumns: [
            'repeat(2,1fr)',
            'repeat(4,1fr)',
            'repeat(6,1fr)',
          ],
          gap: 0,
        }}
      >
        <HomeLink />
        {navData &&
          navData.map((data) => (
            <Preview
              active={query?.slug === data.slug}
              onMouseEnter={() => onMouseEnter(data)}
              onMouseLeave={() => onMouseLeave(data)}
              key={data._id}
              slug={data.slug}
              _type={data._type}
              fill={'white'}
              inverse={'blue'}
              format={data.format}
              link={data.link}
            />
          ))}
      </div>
    </nav>
  );
}
