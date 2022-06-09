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
