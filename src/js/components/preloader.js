const initPreloader = () => {
  if (document.querySelector('.preloader')) {
    const preloader = document.querySelector('.preloader');
    const logo = preloader.querySelector('.logo');

    window.addEventListener('load', e => {
      setTimeout(() => {
        logo.classList.add('active');
      }, 300);
      setTimeout(() => {
        preloader.classList.remove('active');
      }, 1400);
    });

    // preloader.style.display = 'none';
  }
};

export default initPreloader;
