import renderGenres from '../genres/renderGenres';
import closeOutOfForm from './closeOutOfForm';
const formResults = document.querySelector('.form__results');

const renderFormDataList = (arr, list) => {
  formResults.classList.add('active');
  closeOutOfForm();

  arr.forEach(object => {
    const {
      name,
      poster_path,
      title,
      vote_average,
      popularity,
      profile_path,
      genre_ids,
      known_for
    } = object;

    const genres = renderGenres(genre_ids, known_for);

    list.insertAdjacentHTML(
      `beforeend`,
      `


    <article class="item">
    <a href="#" class="form__result">
      <div class="form__result-img ibg item__img">
      ${
        poster_path || profile_path
          ? `<img src="https://image.tmdb.org/t/p/w200/${
              poster_path || profile_path
            }" class="skeleton-image" width="232" height="116"alt="">`
          : '<p>Oops :( Looks like image not found</p>'
      }
      </div>
      <h2 class="form__result-title">${title || name}</h2>
      <div class="form__result-rating">
        <p>${vote_average ? 'Rating' : popularity ? 'Popularity' : ''}</p>
        <p>${vote_average ? vote_average : popularity ? popularity : 'N/A'}</p>
      </div>
      <div class="form__result-genres">${genres.join(', ')}</div>
      </a>
    </article>

    `
    );
  });
};

export default renderFormDataList;
