
const removeLoader = (pageLoader) => {
  pageLoader.forEach(loader => {
    loader.classList.remove('active');
  })
}

export default removeLoader;
