//imports
import renderDataList from './renderDataList';
import { queryParam } from './pagination';
import { API, API_KEY } from './apikeys';
import initPreloader from './preloader';
import renderFormDataList from './form/renderFormDataList';

//films markdown vars
const body = document.body;
const tvsInner = document.querySelector('.tv__inner');
const filmsInner = document.querySelector('.films__inner');
const loader = document.querySelector('.loader');
const featuredInner = document.querySelector('.featured__inner');
const movieTopRated = document.querySelector('.top-movies__inner');
const tvTopRated = document.querySelector('.top-shows__inner');
const searchResults = document.querySelector('.form__results');

async function fetchData(url) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

//fetching movies

if (body.dataset.page == 'home') {
  initPreloader();

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

form.addEventListener('keyup', async e => {
  const target = e.target;
  if (target.value.length >= 3) {
    const data = await fetchData(
      `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${target.value}&language=en-US&page=1&include_adult=false`
    );
    console.log(data.results);
    searchResults.innerHTML = '';
    renderFormDataList(data.results, searchResults);
  }
});

//url and query params

let currentUrl = new URLSearchParams(window.location.search);

let mediaType = currentUrl.get('media');
let featuredType = currentUrl.get('featured');

const featuredUrl = `https://api.themoviedb.org/3/${mediaType}/${featuredType}?api_key=${API_KEY}&language=en-US&page=1`;

if (body.dataset.page == 'featured') {
  // if (!queryParam) {
  //   queryParam = 1;
  //   history.pushState(null, null, '?page=1');
  // }

  fetchData(featuredUrl).then(data => {
    renderDataList(data, featuredInner);

    const featured = document.querySelector('.featured');
    const title = featured.querySelector('.section-title');

    //  REFACTOR THIS
    if (mediaType == 'tv' && featuredType == 'popular') {
      title.innerText = 'Popular TV  Shows';
    } else if (mediaType == 'tv' && featuredType == 'top_rated') {
      title.innerText = 'Best Rated TV Shows';
    } else if (mediaType == 'movie' && featuredType == 'popular') {
      title.innerText = 'Popular Movies';
    } else if (mediaType == 'movie' && featuredType == 'top_rated') {
      title.innerText = 'Best Rated Movies';
    }
  });
}
