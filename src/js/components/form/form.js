//search logic
import { API, API_KEY } from '../apikeys';
import fetchData from '../data/fetchData';
import renderFormDataList from './renderFormDataList';

const form = document.querySelector('.form');
const search = form.querySelector('.form__search');
const searchResults = form.querySelector('.form__results');

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
