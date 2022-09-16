/** @jsxImportSource theme-ui */
import { useState, useEffect, useRef, useCallback } from 'react';
import { getRandomInt, getRandomArbitrary } from '@lib/helpers';
import Block from './block';
import { useInView } from 'react-intersection-observer';

export default function RandomBlocks({
  inView = true,
  blocks,
  ...props
}) {
  const [height, setHeight] = useState();
  const wrapper = useCallback((node) => {
    if (node) {
      setHeight(node.getBoundingClientRect().height);
    }
  }, []);

  return (
    <div sx={{ variant: 'superGrid' }}>
      <div
        ref={wrapper}
        sx={{
          position: 'relative',
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          alignItems: 'center',
          gap: 5,
          // height: height,
          gridColumn: '2/10',
        }}
      >
        {blocks &&
          blocks.map((block) => (
            <RandomBlock key={block._key} block={block} />
          ))}
      </div>
    </div>
  );
}

function RandomBlock({ block }) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    setScale(getRandomArbitrary(0.6, 0.9));
  }, []);

  const { ref, inView } = useInView({ threshold: 0.33 });
  return (
    <div
      ref={ref}
      sx={{
        position: 'relative',
        display: 'grid',
        opacity: inView ? 1 : 0,
        transform: `scale(${scale})`,
        // transformOrigin: 'center',
        transition: 'all 350ms ease-in-out',
        gridColumn:
          block._type === 'videoModule' ? '1/ span 2' : 'auto/span 1',
        ':hover': {
          opacity: 1,
        },
      }}
    >
      <Block {...block} />
    </div>
  );
}
