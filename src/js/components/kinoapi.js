//importing pagination vars
import { queryParam, params, paginationList } from "./pagination";

//API vars

const API_KEY = "2a4ef3e851f23611964f06801ffefd8a";

const filmsInner = document.querySelector(".films__inner");
const loader = document.querySelector(".loader");
const infoTitle = document.querySelector(".films__title");

const imgPath =
  '<img loading="lazy" src="https://image.tmdb.org/t/p/original/" class="skeleton-image" width="250" height="250"alt="">';

const renderFilmsList = (dataObj) => {
  const filmsList = dataObj.results;
  filmsInner.innerHTML = "";
  filmsList.forEach((film) => {
    const { name, poster_path, title, vote_average, popularity, profile_path } =
      film;
    console.log(profile_path);
    filmsInner.insertAdjacentHTML(
      "beforeend",
      `
          <article class="films__item">
          <a href="#" class="films__link">
            <div href="#" class="films__img-wrapper">
              <div class="films__img ibg">
                ${
                  poster_path || profile_path
                    ? `<img loading="lazy" src="https://image.tmdb.org/t/p/original/${
                        poster_path || profile_path
                      }" class="skeleton-image" width="250" height="250"alt="">`
                    : "<p>Oops :( Looks like image not found</p>"
                }
              </div>
            </div>
            <div class="films__info">
              <h2 class="films__name">
                ${title || name}
              </h2>
              <div class="films__genres">
                <span class="films__genre">Comedy</span>
                <span class="films__genre">Blockbuster</span>
                <span class="films__genre">Criminal</span>
              </div>
              <div class="films__rating">
                <span>${
                  vote_average ? "Rating" : popularity ? "Popularity" : ""
                }</span>
                <span>${
                  vote_average ? vote_average : popularity ? popularity : "N/A"
                }</span>
              </div>
            </div>
          </a>
        </article>
        `
    );
  });
};

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
      renderFilmsList(data);
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
        renderFilmsList(data);
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
