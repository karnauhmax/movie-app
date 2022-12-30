//imports
import renderDataList from './renderDataList';
import { queryParam } from './pagination';
import { API, API_KEY } from './apikeys';

//films markdown vars
const body = document.body;
const tvsInner = document.querySelector('.tv__inner');
const filmsInner = document.querySelector('.films__inner');
const loader = document.querySelector('.loader');
const featuredInner = document.querySelector('.featured__inner');
const movieTopRated = document.querySelector('.top-movies__inner');
const tvTopRated = document.querySelector('.top-shows__inner');

async function fetchData(url) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

//fetching movies

if (body.dataset.page == 'home') {
  fetchData(API.movies_popular).then(data => {
    renderDataList(data, filmsInner);
  });

  //fetching tv shows list

  fetchData(API.tv_popular).then(data => {
    renderDataList(data, tvsInner);
  });

  fetchData(API.tv_topRated).then(data => {
    renderDataList(data, tvTopRated);
  });

  fetchData(API.movies_topRated).then(data => {
    renderDataList(data, movieTopRated);
  });
}

//search logic

const form = document.querySelector('.form');
const search = form.querySelector('.form__search');

console.log(search);

form.addEventListener('submit', e => {
  e.preventDefault();
  document.querySelector('.search').classList.add('active');
  const API_SEARCH_URL = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${search.value}&language=en-US&page=1&include_adult=false`;
  fetch(API_SEARCH_URL, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(data => {
      const siteWrapper = document.querySelector('.site-content');
      const searchInner = document.querySelector('.search__inner');
      const { results } = data;

      siteWrapper.innerHTML = '';
      searchInner.innerHTML = '';
      console.log(data);
      if (results.length >= 1) {
        renderDataList(data, searchInner);
      } else {
        searchInner.innerHTML =
          "<p class='form__error'>There is no results </p>";
      }
    });
});

//url and query params

let currentUrl = new URLSearchParams(window.location.search);

let mediaType = currentUrl.get('media');
let featured = currentUrl.get('featured');

const featuredUrl = `https://api.themoviedb.org/3/${mediaType}/${featured}?api_key=${API_KEY}&language=en-US&page=1`;

if (body.dataset.page == 'featured') {
  // if (!queryParam) {
  //   queryParam = 1;
  //   history.pushState(null, null, '?page=1');
  // }

  fetchData(featuredUrl).then(data => {
    renderDataList(data, featuredInner);

    const featured = document.querySelector('.featured');
    const title = featured.querySelector('.section-title');

    switch (mediaType) {
      case 'tv':
        title.innerText = 'Popular TV Shows';
        break;
      case 'movie':
        title.innerText = 'Popular Movies';
        break;
    }
  });
}
