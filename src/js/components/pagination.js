//determining query param

const paginationList = document.querySelectorAll(".pagination");

const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

let queryParam = params.page;

if (!queryParam) {
  queryParam = 1;
  history.pushState(null, null, "?page=1");
}

export { params, queryParam, paginationList };
