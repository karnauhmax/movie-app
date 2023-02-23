const closeOutOfForm = () => {
  const formResults = document.querySelector('.form__results');
  document.addEventListener('click', e => {
    if (formResults && !e.target.closest('.form__results')) {
      formResults.classList.remove('active');
    }
  });
};

export default closeOutOfForm;
