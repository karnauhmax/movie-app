//imports
import { queryParam, params, paginationList } from "./pagination";
import renderGenres from "./renderGenres";
import renderDataList from "./renderDataList";
const genresList = document.querySelectorAll(".films__genres");

//API vars

const API_KEY = "2a4ef3e851f23611964f06801ffefd8a";

//films markdown vars
const filmsInner = document.querySelector(".films__inner");
const loader = document.querySelector(".loader");
const infoTitle = document.querySelector(".films__title");

//img

const imgPath =
  '<img loading="lazy" src="https://image.tmdb.org/t/p/original/" class="skeleton-image" width="250" height="250"alt="">';

console.log(genresList);

//fetch

const initApp = (page = 1) => {
  const API_POPULAR_MOVIES_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`;

  fetch(API_POPULAR_MOVIES_URL, {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      loader.classList.remove("active");
      console.log(data);
      renderDataList(data);
      return data;
    })
    .then((data) => {
      const total = 100;
      const pages = Math.ceil(total / 10);
      for (let i = pages; i >= 1; i--) {
        paginationList.forEach((el) => {
          el.insertAdjacentHTML(
            "afterbegin",
            `
          <li class="pagination__item ${i == queryParam ? "active" : ""}">
              <a href="?page=${i}" class="pagination__btn">${i}</a>
            </li>
          `
          );
        });
      }
      return data;
    });
};

initApp(queryParam);

//search logic

const form = document.querySelector(".form");
const search = form.querySelector(".form__search");

console.log(search);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const API_SEARCH_URL = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${search.value}&language=en-US&page=1&include_adult=false`;
  fetch(API_SEARCH_URL, {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const { results } = data;
      if (results.length >= 1) {
        renderDataList(data);
      } else {
        filmsInner.innerHTML =
          "<p class='form__error'>There is no results </p>";
      }
      paginationList.forEach((el) => {
        el.classList.add("hide");
      });
      infoTitle.innerHTML = `Results: ${results.length}`;
    });
});
