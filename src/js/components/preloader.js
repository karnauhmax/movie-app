


const initPreloader = () => {
  if (document.querySelector('.preloader')) {
    const preloader = document.querySelector('.preloader');
    const logo = preloader.querySelector('.logo');

    const isShowed = (key) => {
      return sessionStorage.getItem(`${key}`);
    }

    if (isShowed("loaded")) {
      preloader.classList.remove("active");
    }



    window.addEventListener('load', e => {
      setTimeout(() => {
        logo.classList.add('active');
      }, 300);
      setTimeout(() => {
        preloader.classList.remove('active');
      }, 1400);
      sessionStorage.setItem("loaded", true);
    });

    // preloader.style.display = 'none';
  }
};

export default initPreloader;
