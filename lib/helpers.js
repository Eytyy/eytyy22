import { useRouter } from 'next/router';
import { useCallback, useEffect, useRef, useState } from 'react';

export function getFormatedDate(date) {
  const fd = new Date(date);
  return `${fd.getDate()}-${fd.getMonth()}-${fd.getFullYear()} ${fd.getHours()}:${fd.getMinutes()}`;
}

export function getChildPostsUniqueTags(tags) {
  if (!tags) return [];

  // Reduce allTags to an object to remove duplicates
  const uniqueTags = tags.reduce((prev, current) => {
    return prev.slug === current.slug
      ? prev
      : { ...prev, [current.slug]: { ...current } };
  }, {});

  // return Object.values array so we are able to map through the items
  const tagsList = Object.values(uniqueTags);
  return tagsList;
}

export function useParams() {
  const router = useRouter();
  const currentParams = useRef([]);

  const hasQuery = Object.keys(router.query).length;
  if (hasQuery) {
    currentParams.current = router.query.filter.split(',');
  }

  function setParams(param) {
    // if an empty param is passed, then clear all
    if (!param) {
      currentParams.current = [];
      return router.push(`/`, undefined, {
        shallow: true,
      });
    }

    const p = currentParams.current;
    const index = p.indexOf(param);
    const newParams = (p =
      index === -1
        ? [...p, param]
        : [...p.slice(0, index), ...p.slice(index + 1, p.length)]);
    const qs = newParams.join(',');

    router.push(qs ? `/?filter=${qs}` : `/`, undefined, {
      shallow: true,
    });
    currentParams.current = newParams;
  }

  return [currentParams.current, setParams];
}

export function filterPosts(posts, filters) {
  const filtered = posts.filter((post) => {
    const postFilters = post.tags?.map((tag) => tag.slug);
    const hasFilter = filters?.some((filter) =>
      postFilters?.includes(filter)
    );
    return hasFilter;
  });
  return filtered;
}

export function useWindowSize() {
  const [size, setWH] = useState({ w: 900, h: 900 });

  function updateSize() {
    setWH({
      w: window?.innerWidth,
      h: window?.innerHeight,
    });
  }

  useEffect(() => {
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => {
      window.removeEventListener('resize', updateSize);
    };
  }, []);

  return [{ w: size.w, h: size.h }];
}

export function useData(url) {
  const [data, setData] = useState(null);

  const fetchData = useCallback(async (url) => {
    const data = await fetch(url);
    return data;
  }, []);

  useEffect(() => {
    const response = fetchData(url);
    response.then((d) => {
      setData(d);
    });
  }, [fetchData, url]);

  return data;
}

export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

export function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
