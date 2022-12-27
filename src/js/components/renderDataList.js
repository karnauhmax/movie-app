import renderGenres from "./renderGenres";
const filmsInner = document.querySelector(".films__inner");

const renderDataList = (dataObj) => {
  const filmsList = dataObj.results;
  filmsInner.innerHTML = "";
  filmsList.forEach((film) => {
    const {
      name,
      poster_path,
      title,
      vote_average,
      popularity,
      profile_path,
      genre_ids,
    } = film;
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
    renderGenres(film);
  });
};

export default renderDataList;
