import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

export function useCharShuffle(title, speed = 0.2, freeze = false) {
  const titleMarque = title.split('');
  const [charIndex, setCharIndex] = useState(0);
  const interval = useRef(null);

  useEffect(() => {
    function shuffle() {
      setCharIndex((i) =>
        i == titleMarque.length - 1 ? 0 : (i += 1)
      );
    }
    if (!interval.current && !freeze) {
      interval.current = setInterval(shuffle, 1000 * speed);
    }
    return () => {
      clearInterval(interval.current);
      setCharIndex(0);
      interval.current = null;
    };
  }, [titleMarque.length, freeze, speed]);

  const char = titleMarque[charIndex];
  return [char];
}
