const formatGenres = (arr, className = '') => {
  const classList = Array.isArray(className) ? className.join(' ') : className;
  return arr
    .map(
      genre =>
        `<span ${classList ? `class="${classList}"` : ''}>${genre}</span>`
    )
    .join(' ');
};

export default formatGenres;
