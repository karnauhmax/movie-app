import genres from "./genres";

const genresList = document.querySelectorAll(".films__genres");

const renderGenres = (item) => {
  if (item.genre_ids >= 1) {
    genres.forEach((genreObj) => {
      const genreItem = document.createElement("span");
      genreItem.classList.add("films__genre");

      if (genreObj.id == item.genre_ids[0]) {
        console.log(item);
        genresList.forEach((genreListItem) => {
          console.log(genreListItem);
          const genre = document.createElement("span");
          genre.classList.add("films__genre");
          genre.innerHTML = genreObj.name;
          genreListItem.appendChild(genre);
          console.log(genreListItem);
        });
      }
    });
  }
};

export default renderGenres;
