const closeOutOfClick = element => {
  const elementOnPage = document.querySelector(element);
  console.log(elementOnPage);
  document.addEventListener('click', e => {
    if (
      !e.target.closest(element) &&
      elementOnPage.classList.contains('active')
    ) {
      document.querySelector(element).classList.remove('active');
    }
  });
};

export default closeOutOfClick;
