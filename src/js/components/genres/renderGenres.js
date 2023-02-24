import genres from './genresList';

const renderGenres = (idsArr = [], knownArr = []) => {
  const genresResult = [];

  if (idsArr.length >= 1) {
    genresResult.push(
      ...genres.filter(({ id }) => idsArr.includes(id)).map(({ name }) => name)
    );
  } else if (knownArr.length >= 1) {
    genresResult.push(...knownArr.map(({ title, name }) => title || name));
  }

  return genresResult;
};

export default renderGenres;
