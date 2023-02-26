//determining query param

const paginationList = document.querySelectorAll('.pagination');

const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop)
});

let queryParam = params.page;
let page = 1;

paginationList.forEach(pagination => {});

export { params, queryParam, paginationList };
