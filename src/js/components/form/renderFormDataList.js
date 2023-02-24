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
    list.insertAdjacentHTML(
      `beforeend`,
      `


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
      <div class="form__result-title">${title || name}</div>
      <div class="form__result-rating">
        <p>${vote_average ? 'Rating' : popularity ? 'Popularity' : ''}</p>
        <p>${vote_average ? vote_average : popularity ? popularity : 'N/A'}</p>
      </div>
<div class="form__result-genres">Horror Comedy Trash</div>
</a>

    `
    );
  });
};

export default renderFormDataList;
