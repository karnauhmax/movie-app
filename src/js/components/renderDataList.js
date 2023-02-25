import genres from './genres/genresList';
import renderGenres from './genres/renderGenres';
import createDynamicLinks from './links/createDynamicLinks';
import determineType from './links/determineType';
import linksList from './links/linksList';
import renderParamsLinks from './links/renderParamsLinks';

const loader = document.querySelectorAll('.loader');
const renderDataList = (dataObj, filmsInner) => {
  console.log(dataObj);
  loader.forEach(loader => {
    loader.classList.remove('active');
  });
  const genresList = document.querySelectorAll('.item__genres');
  const filmsList = dataObj.results;
  filmsInner.innerHTML = '';
  filmsList.forEach(film => {
    //destructuring
    const {
      name,
      poster_path,
      title,
      vote_average,
      popularity,
      profile_path,
      genre_ids,
      known_for,
      id
    } = film;

    const genresResult = renderGenres(genre_ids, known_for);

    //rendering films/actors/movies by data
    filmsInner.insertAdjacentHTML(
      'beforeend',
      `
    <article class="item">
      <a href="single.html?media=${determineType(
        film
      )}&id=${id}" class="item__link">
        <div class="item__img-wrapper">
            <div class="item__img ibg">
                ${
                  poster_path || profile_path
                    ? `<img src="https://image.tmdb.org/t/p/w200/${
                        poster_path || profile_path
                      }" class="skeleton-image" width="250" height="250"alt="">`
                    : '<p>Oops :( Looks like image not found</p>'
                }
                </div>
              </div>
              <div class="item__info">
              <h2 class="item__name">
                  ${title || name}
              </h2>
              <div class="item__genres">
                  ${genresResult.join(', ')}
              </div>
              <div class="item__rating">
              <span>${
                vote_average ? 'Rating' : popularity ? 'Popularity' : ''
              }</span>
              <span>${
                vote_average ? vote_average : popularity ? popularity : 'N/A'
              }</span>
                    </div>
                </div>
              </a>
        </article>
       `
    );
  });
};

export default renderDataList;
