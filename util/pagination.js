export function getMaxPage(totalItems, maxPerPage) {
  return Math.ceil(totalItems / maxPerPage);
}