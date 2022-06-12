import { useRouter } from 'next/router';
import { useRef } from 'react';

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
