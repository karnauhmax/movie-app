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
console.log(searchInner);

//input logic
form.addEventListener('keyup', async e => {
  const target = e.target;
  if (target.value.length >= 3) {
    const data = await fetchData(
      `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${target.value}&language=en-US&page=1&include_adult=false`
    );
    console.log(data.results);
    clearHTML(searchResults);
    renderFormDataList(data.results, searchResults);
  }
});

//submit logic
form.addEventListener('submit', async e => {
  e.preventDefault();
  const input = form.querySelector('.form__search');
  clearHTML(siteContent);
  const data = await fetchData(
    `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${input.value}&language=en-US&page=1&include_adult=false`
  );
  search.classList.add('active');
  siteContent.classList.add('hide');
  renderDataList(data, searchInner, 'search__item');
});
