/** @jsxImportSource theme-ui */
import { useRef } from 'react';
import RandomBlocks from '@components/design/randomBlocks';
import GridBlocks from '@components/design/gridBlocks';

export default function MediaModule({
  content,
  inView,
  layout = 'randomBlocks',
}) {
  const visited = useRef(false);
  const animate = !visited.current;

  if (inView && !visited.current) {
    visited.current = true;
  }

  return layout === 'randomBlocks' ? (
    <RandomBlocks blocks={content} inView={inView} />
  ) : (
    <GridBlocks blocks={content} inView={inView} />
  );
}
