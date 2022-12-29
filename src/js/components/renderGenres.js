import genres from "./genres";

const genresList = document.querySelectorAll(".films__genres");
console.log(genresList);

const renderGenres = (item) => {
  if (item.genre_ids >= 1) {
    genres.forEach((genreObj) => {
      const genreItem = document.createElement("span");
      genreItem.classList.add("films__genre");

      if (genreObj.id == item.genre_ids[0]) {
        console.log(item.title);
        genresList.forEach((genreListItem) => {
          const genreItem = document.createElement("span");
          genreItem.classList.add("films__genre");
          genreItem.innerHTML = genreObj.name;
          genreListItem.appendChild(genreItem);
        });
      }
    });
  }
};

export default renderGenres;
