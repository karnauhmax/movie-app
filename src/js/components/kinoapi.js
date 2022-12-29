//imports
import { queryParam, params, paginationList } from './pagination';
import renderGenres from './renderGenres';
import renderDataList from './renderDataList';
import genres from './genres';
import { init } from 'aos';
console.log(document.querySelector('.filter__genres'));

//API vars

const API_KEY = '2a4ef3e851f23611964f06801ffefd8a';

//films markdown vars
const tvsInner = document.querySelector('.tv__inner');
const filmsInner = document.querySelector('.films__inner');
const loader = document.querySelector('.loader');

//img

const imgPath =
  '<img loading="lazy" src="https://image.tmdb.org/t/p/original/" class="skeleton-image" width="250" height="250"alt="">';

//fetching movies

const initMovieList = (page = 1) => {
  const API_POPULAR_MOVIES_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`;

  fetch(API_POPULAR_MOVIES_URL, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => {
      loader.classList.remove('active');
      renderDataList(data, filmsInner);
      return data;
    })
    .then(data => {
      const total = 100;
      const pages = Math.ceil(total / 10);
      for (let i = pages; i >= 1; i--) {
        paginationList.forEach(el => {
          el.insertAdjacentHTML(
            'afterbegin',
            `
          <li class="pagination__item ${i == queryParam ? 'active' : ''}">
              <a href="?page=${i}" class="pagination__btn">${i}</a>
            </li>
          `
          );
        });
      }
      return data;
    });
};

initMovieList(queryParam);

//fetching tv shows list

const initTVList = (page = 1) => {
  const API_POPULAR_TV_URL = `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=${page}`;

  fetch(API_POPULAR_TV_URL, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => {
      loader.classList.remove('active');
      renderDataList(data, tvsInner);
    });
};

initTVList(queryParam);

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
      const siteWrapper = document.querySelector('.site-wrapper');
      const searchInner = document.querySelector('.search__inner');
      console.log(data);
      const { results } = data;
      siteWrapper.innerHTML = '';
      searchInner.innerHTML = '';
      if (results.length >= 1) {
        renderDataList(data, document.querySelector('.search__inner'));
      } else {
        searchInner.innerHTML =
          "<p class='form__error'>There is no results </p>";
      }
      // infoTitle.innerHTML = `Results: ${results.length}`;
    });
});
