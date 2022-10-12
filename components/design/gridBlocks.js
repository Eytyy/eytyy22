/** @jsxImportSource theme-ui */
import Block from './block';

export default function GridBlocks({ blocks, inView = true }) {
  return (
    <div
      sx={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)' }}
    >
      {blocks?.map((block) => (
        <div
          key={block._key}
          sx={{
            position: 'relative',
            pt: '100%',
            gridColumn: 'auto',
          }}
        >
          <div
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
          >
            <Block
              format="square"
              width="400"
              height="400"
              {...block}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
