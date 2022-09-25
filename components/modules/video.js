/** @jsxImportSource theme-ui */
import { CgPlayButtonO } from 'react-icons/cg';
import { useState, useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function VideoModule({
  url,
  big,
  caption,
  loop,
  autoPlay = false,
}) {
  const video = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [interacted, setInteracted] = useState(false);
  const { ref, inView } = useInView({ threshold: 1 });
  const shouldAutoPlay = autoPlay && inView;

  const play = () => {
    setInteracted(true);
    video.current.play();
  };

  const stop = () => {
    setInteracted(true);
    video.current.pause();
  };

  function onPause() {
    setIsPlaying(false);
  }

  function onPlay() {
    setIsPlaying(true);
  }

  useEffect(() => {
    if (!isPlaying && shouldAutoPlay && !interacted) {
      video.current.play();
    }
    if (isPlaying && !shouldAutoPlay) {
      video.current.pause();
    }
  }, [shouldAutoPlay, isPlaying, interacted, caption]);

  return (
    <div ref={ref} sx={{ height: '100%', overflow: 'hidden' }}>
      {!big && (
        <div
          sx={{
            variant: 'video.playBox',
            opacity: isPlaying ? '0' : '1',
          }}
          onClick={() => (isPlaying ? stop() : play())}
        >
          <CgPlayButtonO />
        </div>
      )}
      <video
        onClick={() => setInteracted(true)}
        autoPlay={shouldAutoPlay}
        muted={shouldAutoPlay}
        onPlay={onPlay}
        onPause={onPause}
        ref={video}
        sx={{ variant: 'video.default' }}
        src={url}
        loop={loop}
      />
    </div>
  );
}
