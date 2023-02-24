//determining query param

const paginationList = document.querySelectorAll('.pagination');

const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop)
});

let queryParam = params.page;

const total = 100;
const pages = Math.ceil(total / 10);
for (let i = pages; i >= 1; i--) {
  paginationList.forEach(el => {
    el.insertAdjacentHTML(
      'afterbegin',
      `
    <li class="pagination__item ${i == queryParam ? 'active' : ''}">
        <a href="featured.html?featured=popular&page=1" class="pagination__btn">${i}</a>
      </li>
    `
    );
  });
}

export { params, queryParam, paginationList };
