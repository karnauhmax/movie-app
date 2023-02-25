//imports
import renderDataList from './components/renderDataList';
import { queryParam } from './components/pagination';
import { API, API_KEY } from './components/apikeys';
import initPreloader from './components/preloader';
import renderFormDataList from './components/form/renderFormDataList';
import removeLoader from './components/loader/removeLoader';
import createDynamicLinks from './components/links/createDynamicLinks';
import renderParamsLinks from './components/links/renderParamsLinks';
import fetchData from './components/data/fetchData';
import './components/form/form';

renderParamsLinks();

//films markdown vars
const body = document.body;
const tvsInner = document.querySelector('.tv__inner');
const filmsInner = document.querySelector('.films__inner');
const loaders = document.querySelectorAll('.loader');
const featuredInner = document.querySelector('.featured__inner');
const movieTopRated = document.querySelector('.top-movies__inner');
const tvTopRated = document.querySelector('.top-shows__inner');
const searchResults = document.querySelector('.form__results');

//fetching movies

if (body.dataset.page == 'home') {
  initPreloader();

  const { movies_popular, tv_popular, tv_topRated, movies_topRated } = API;

  const renderArr = [
    { url: movies_popular, location: filmsInner },
    { url: tv_popular, location: tvsInner },
    { url: tv_topRated, location: tvTopRated },
    { url: movies_topRated, location: movieTopRated }
  ];

  renderArr.forEach(dataObject => {
    const { url, location } = dataObject;

    fetchData(url).then(data => {
      renderDataList(data, location);
      removeLoader(loaders);
    });
  });
}

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
