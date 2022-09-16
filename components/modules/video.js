/** @jsxImportSource theme-ui */
import { MdPlayArrow } from 'react-icons/md';
import { useState, useRef, useEffect, useCallback } from 'react';

export default function VideoModule({
  url,
  big,
  caption,
  alt,
  loop,
  autoPlay = false,
  inView,
}) {
  const video = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [interacted, setInteracted] = useState(false);

  const shouldAutoPlay = autoPlay && inView;

  const play = () => {
    setInteracted(true);
    video.current.play();
    if (!big) {
      video.current.requestFullscreen();
    }
  };

  function onPause() {
    setIsPlaying(false);
  }
  function onPlay() {
    setIsPlaying(true);
  }
  const stop = () => {
    setInteracted(true);
    video.current.pause();
  };

  useEffect(() => {
    if (!isPlaying && shouldAutoPlay && !interacted) {
      video.current.play();
    }
    if (isPlaying && !shouldAutoPlay) {
      video.current.pause();
    }
  }, [shouldAutoPlay, isPlaying, interacted, caption]);

  return (
    <div sx={{ height: '100%', overflow: 'hidden' }}>
      <div
        sx={{
          variant: 'video.playBox',
          opacity: isPlaying ? '0' : '1',
        }}
        onClick={() => (isPlaying ? stop() : play())}
      >
        <MdPlayArrow />
      </div>
      <video
        autoPlay={shouldAutoPlay}
        loop={loop}
        muted={shouldAutoPlay}
        onPlay={onPlay}
        onPause={onPause}
        ref={video}
        sx={{ variant: 'video.default' }}
        src={url}
      />
    </div>
  );
}
