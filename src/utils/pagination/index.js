export const isPagination = (url, params) => {
  if (params) {
    url = `${url}?page=${params.page}`;
  }
  return url;
};
