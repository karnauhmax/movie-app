const closeOutOfClick = element => {
  document.addEventListener('click', e => {
    if (document.querySelector(element) && !e.target.closest(element)) {
      document.querySelector(element).classList.remove('active');
    }
  });
};

export default closeOutOfClick;
