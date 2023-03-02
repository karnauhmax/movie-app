//search logic
import { API, API_KEY } from '../apikeys';
import clearHTML from '../clear/clearHTML';
import fetchData from '../data/fetchData';
import removeClassFromElement from '../removeClassFromElement';
import renderDataList from '../renderDataList';
import renderFormDataList from './renderFormDataList';

const search = document.querySelector('.search');
const form = document.querySelector('.form');
const searchInner = search.querySelector('.search__inner');
const searchResults = form.querySelector('.form__results');
const siteContent = document.querySelector('.site-content');
const tooltip = document.querySelector('.form__tooltip');
const input = form.querySelector('.form__search');

//input logic
form.addEventListener('keyup', async e => {
  const target = e.target;

  const data = await fetchData(
    `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${target.value}&language=en-US&page=1&include_adult=false`
  );

  clearHTML(searchResults);

  if (data.results.length) {
    renderFormDataList(data.results, searchResults);

    removeClassFromElement(searchResults, 'not-found');
  } else {
    searchResults.classList.add('not-found');
    searchResults.innerHTML =
      '<p class="not-found__text">Nothing was found</p>';
  }

  removeClassFromElement(tooltip, 'active');

  if (!target.value) {
    searchResults.classList.remove('active');
  }
});

//submit logic
form.addEventListener('submit', async e => {
  e.preventDefault();
  if (input.value && input.value !== '') {
    const data = await fetchData(
      `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${input.value}&language=en-US&page=1&include_adult=false`
    );

    if (data.results.length) {
      clearHTML(siteContent);
      search.classList.add('active');

      siteContent.classList.add('hide');

      console.log(data);

      renderDataList(data, searchInner, 'search__item');
    }
  } else {
    tooltip.classList.add('active');
  }
});

document.addEventListener('click', e => {
  const target = e.target;

  if (!target.closest('.form') && searchResults.classList.contains('active')) {
    removeClassFromElement(searchResults, 'active');
  }

  if (
    target.closest('.form') &&
    !search.classList.contains('active') &&
    input.value
  ) {
    searchResults.classList.add('active');
  }
});
