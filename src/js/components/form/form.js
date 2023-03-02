//search logic
import { API, API_KEY } from '../apikeys';
import clearHTML from '../clear/clearHTML';
import fetchData from '../data/fetchData';
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

  renderFormDataList(data.results, searchResults);

  if (tooltip.classList.contains('active')) tooltip.classList.remove('active');
});

//submit logic
form.addEventListener('submit', async e => {
  e.preventDefault();
  if (input.value && input.value !== '') {
    clearHTML(siteContent);
    const data = await fetchData(
      `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${input.value}&language=en-US&page=1&include_adult=false`
    );
    search.classList.add('active');
    siteContent.classList.add('hide');
    renderDataList(data, searchInner, 'search__item');
  } else {
    tooltip.classList.add('active');
  }
});

form.addEventListener('click', e => {
  if (!searchResults.classList.contains('active') && input.value) {
    searchResults.classList.add('active');
    console.log(2);
  }
});
