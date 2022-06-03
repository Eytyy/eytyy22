export function getFormatedDate(date) {
  const fd = new Date(date);
  return `${fd.getDate()}-${fd.getMonth()}-${fd.getFullYear()} ${fd.getHours()}:${fd.getMinutes()}`;
}
