/** @jsxImportSource theme-ui */

import {getFormatedDate} from '@lib/helpers';

const Tracker = ({items, visible}) => {
  function getProgressColor(progress) {
    switch (progress) {
      case 'done':
        return '#00d039';
      case 'pending':
        return 'accent';
      default:
        return 'red';
    }
  }

  return (
    <div
      sx={{
        position: ['fixed', 'sticky'],
        top: ['0', '100px'],
        height: '100vh',
        right: [0, 'auto'],
        left: [0, 'auto'],
        px: [6, 8],
        pt: ['100px', 0],
        background: '#FFF',
        overflow: 'scroll',
        transform: visible ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 350ms ease-in-out',
      }}
    >
      {items.map((item, index) => (
        <div
          sx={{
            display: 'grid',
            gridTemplateColumns: '20px 1fr',
            gap: [2],
            mb: 4,
            lineHeight: '20px',
          }}
          key={item._key}
        >
          <div
            sx={{
              width: '20px',
              height: '20px',
              borderRadius: '20px',
              backgroundColor: getProgressColor(item.progress),
            }}
          />
          <div>
            <date sx={{variant: 'text.meta'}}>
              {getFormatedDate(item.date)}
            </date>
            <div>{item.title}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tracker;
