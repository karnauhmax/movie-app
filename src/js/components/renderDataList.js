import renderGenres from './renderGenres';
import genres from './genres';

const renderDataList = (dataObj, filmsInner) => {
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
      known_for
    } = film;

    //genres detecting
    const genresResult = [];
    if (genre_ids && genre_ids.length >= 1) {
      genres.forEach(genreObj => {
        genre_ids.forEach(item => {
          if (item == genreObj.id) {
            genresResult.push(genreObj.name);
          }
        });
      });
    } else if (known_for && known_for.length >= 1) {
      known_for.forEach(film => {
        genresResult.push(film.title || film.name);
      });
    }

    //rendering films/actors/movies by data
    filmsInner.insertAdjacentHTML(
      'beforeend',
      `
    <article class="item">
      <a href="#" class="item__link">
        <div href="#" class="item__img-wrapper">
            <div class="item__img ibg">
                ${
                  poster_path || profile_path
                    ? `<img loading="lazy" src="https://image.tmdb.org/t/p/original/${
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
