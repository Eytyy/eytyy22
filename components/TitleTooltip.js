/** @jsxImportSource theme-ui */

export default function TitleToolTip({ data, visible }) {
  return (
    <div
      sx={{
        position: 'fixed',
        opacity: data && visible ? '1' : '0',
        visibility: data && visible ? 'visible' : 'hidden',
        left: 0,
        top: '55px',
        height: '100%',
        transition: 'opacity 200ms linear',
        overflow: 'scroll',
        zIndex: '11',
        pointerEvents: 'none',
      }}
    >
      <div sx={{ variant: 'superGrid' }}>
        <div
          sx={{
            gridColumn: '2/14',
            fontSize: [7, 9],
            fontFamily: 'heading',
            lineHeight: '1',
            wordBreak: 'break-word',
          }}
        >
          <span sx={{ pl: '2.5ch' }} />
          {data?.title}
        </div>
      </div>
    </div>
  );
}
