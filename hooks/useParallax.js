import { useEffect, useReducer, useRef } from 'react';

function getInitialVisibility(top, height) {
  const window_h = window.innerHeight;
  if (top >= 0) {
    return height > window_h - top ? window_h - top : height;
  }
  return height >= Math.abs(top) + window_h
    ? Math.abs(top) + window_h
    : height - Math.abs(top);
}

export default function useParallax(inView, entry) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const ssp = useRef(0); // starting scroll position
  const lsp = useRef(0); // last scroll position

  const waf = useRef(null);
  const ticking = useRef(null);

  const { el, visible } = state;

  // Initialize
  useEffect(() => {
    if (inView && typeof window !== 'undefined') {
      const { height, top } = entry.target.getBoundingClientRect();
      ssp.current = lsp.current = window.scrollY;

      const initialVisiblity = getInitialVisibility(top, height);

      dispatch({
        type: 'INIT',
        payload: {
          el: { top, height, node: entry.target },
          visible: initialVisiblity,
          leftToScroll: height - initialVisiblity,
        },
      });
    }
  }, [entry, inView]);

  // Update on Scroll
  useEffect(() => {
    const { el, leftToScroll } = state;

    if (inView && typeof window !== 'undefined') {
      window.addEventListener('scroll', cb);
    }

    function cb() {
      if (ticking.current) return;
      waf.current = window.requestAnimationFrame(onSroll);
      ticking.current = true;
    }

    function onSroll() {
      const current = window.scrollY;
      const dir = current > lsp.current ? 'down' : 'up';
      const delta = Math.abs(current - lsp.current);

      let lts = 0;

      if (
        (dir == 'down' && el.top > 0) ||
        (dir == 'up' && el.top < 0)
      ) {
        lts = leftToScroll - delta;
      } else {
        lts = leftToScroll + delta;
      }
      dispatch({
        type: 'SET_SCROLL_STATE',
        payload: {
          visible: el.height - Math.abs(lts),
          leftToScroll: lts,
        },
      });

      lsp.current = window.scrollY;
      ticking.current = false;
    }

    return () => {
      window.removeEventListener('scroll', cb);
      window.cancelAnimationFrame(waf.current);
      ticking.current = false;
      waf.current = null;
    };
  }, [inView, entry, state]);

  function didSectionReachTop(offset = 0) {
    if (typeof window === 'undefined') {
      return false;
    }
    return visible >= window.innerHeight - offset;
  }

  return {
    didSectionReachTop: didSectionReachTop,
    el: state.el,
    exiting: state.leftToScroll < 0,
    visible: visible,
    percentage:
      inView && visible > 0
        ? Math.round((visible / el.height) * 100)
        : 0,
  };
}

function reducer(state, { type, payload }) {
  const { visible, leftToScroll } = payload;
  switch (type) {
    case 'INIT':
      return {
        ...state,
        ...payload,
      };
    case 'SET_SCROLL_STATE':
      return {
        ...state,
        visible: visible,
        leftToScroll: leftToScroll,
      };
    default:
      return state;
  }
}

const initialState = {
  el: { node: null, height: 0, top: 0 },
  visible: 0,
  leftToScroll: 0,
};
