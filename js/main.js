/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_components.js":
/*!*******************************!*\
  !*** ./src/js/_components.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_preloader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/preloader */ "./src/js/components/preloader.js");
/* harmony import */ var _components_preloader__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_preloader__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/pagination */ "./src/js/components/pagination.js");
/* harmony import */ var _components_kinoapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/kinoapi */ "./src/js/components/kinoapi.js");
/* harmony import */ var _components_fetchClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/fetchClass */ "./src/js/components/fetchClass.js");
/* harmony import */ var _components_fetchClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_fetchClass__WEBPACK_IMPORTED_MODULE_3__);





/***/ }),

/***/ "./src/js/_functions.js":
/*!******************************!*\
  !*** ./src/js/_functions.js ***!
  \******************************/
/***/ (() => {

// Данный файл - лишь собрание подключений готовых компонентов.
// Рекомендуется создавать отдельный файл в папке components и подключать все там

// Определение операционной системы на мобильных
// import { mobileCheck } from "./functions/mobile-check";
// console.log(mobileCheck());

// Определение ширины экрана
// import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
// if (isDesktop()) {
//   console.log('...')
// }

// Троттлинг функции (для ресайза, ввода в инпут, скролла и т.д.)
// import { throttle } from './functions/throttle';
// let yourFunc = () => { console.log('throttle') };
// let func = throttle(yourFunc);
// window.addEventListener('resize', func);

// Фикс фулскрин-блоков
// import './functions/fix-fullheight';

// Реализация бургер-меню
// import { burger } from './functions/burger';

// Реализация остановки скролла (не забудьте вызвать функцию)
// import { disableScroll } from './functions/disable-scroll';

// Реализация включения скролла (не забудьте вызвать функцию)
// import { enableScroll } from './functions/enable-scroll';

// Получение высоты шапки сайта (не забудьте вызвать функцию)
// import { getHeaderHeight } from './functions/header-height';

// Подключение плагина кастом-скролла
// import 'simplebar';

// Подключение плагина для позиционирования тултипов
// import { createPopper, right} from '@popperjs/core';
// createPopper(el, tooltip, {
//   placement: 'right'
// });

// Подключение свайпера
// import Swiper, { Navigation, Pagination } from 'swiper';
// Swiper.use([Navigation, Pagination]);
// const swiper = new Swiper(el, {
//   slidesPerView: 'auto',
// });

// Подключение анимаций по скроллу
// import AOS from 'aos';
// AOS.init();

// Подключение параллакса блоков при скролле
// import Rellax from 'rellax';
// const rellax = new Rellax('.rellax');

// Подключение плавной прокрутки к якорям
// import SmoothScroll from 'smooth-scroll';
// const scroll = new SmoothScroll('a[href*="#"]');

// Подключение событий свайпа на мобильных
// import 'swiped-events';
// document.addEventListener('swiped', function(e) {
//   console.log(e.target);
//   console.log(e.detail);
//   console.log(e.detail.dir);
// });

// import { validateForms } from './functions/validate-forms';
// const rules1 = [...];

// const afterForm = () => {
//   console.log('Произошла отправка, тут можно писать любые действия');
// };

// validateForms('.form-1', rules1, afterForm);

// Подключение ООП модалок
// import Modal from "./functions/modals";

//Подключение ООП табов
// import Tab from "./functions/tabs";

// burger
// import { burger } from "./functions/burger";

// splide
// import Splide from "@splidejs/splide";

// dynamic adapt
// import DynamicAdapt from "./functions/dynamicAdapt";

/***/ }),

/***/ "./src/js/components/fetchClass.js":
/*!*****************************************!*\
  !*** ./src/js/components/fetchClass.js ***!
  \*****************************************/
/***/ (() => {

class FetchReq {
  constructor(url) {
    this.url = url;
  }
}

/***/ }),

/***/ "./src/js/components/genres.js":
/*!*************************************!*\
  !*** ./src/js/components/genres.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const genres = [{
  id: 28,
  name: "Action"
}, {
  id: 12,
  name: "Adventure"
}, {
  id: 16,
  name: "Animation"
}, {
  id: 35,
  name: "Comedy"
}, {
  id: 80,
  name: "Crime"
}, {
  id: 99,
  name: "Documentary"
}, {
  id: 18,
  name: "Drama"
}, {
  id: 10751,
  name: "Family"
}, {
  id: 14,
  name: "Fantasy"
}, {
  id: 36,
  name: "History"
}, {
  id: 27,
  name: "Horror"
}, {
  id: 10402,
  name: "Music"
}, {
  id: 9648,
  name: "Mystery"
}, {
  id: 10749,
  name: "Romance"
}, {
  id: 878,
  name: "Science Fiction"
}, {
  id: 10770,
  name: "TV Movie"
}, {
  id: 53,
  name: "Thriller"
}, {
  id: 10752,
  name: "War"
}, {
  id: 37,
  name: "Western"
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (genres);

/***/ }),

/***/ "./src/js/components/kinoapi.js":
/*!**************************************!*\
  !*** ./src/js/components/kinoapi.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagination */ "./src/js/components/pagination.js");
/* harmony import */ var _renderGenres__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGenres */ "./src/js/components/renderGenres.js");
//imports



//API vars

const API_KEY = "2a4ef3e851f23611964f06801ffefd8a";
const filmsInner = document.querySelector(".films__inner");
const loader = document.querySelector(".loader");
const infoTitle = document.querySelector(".films__title");
const imgPath = '<img loading="lazy" src="https://image.tmdb.org/t/p/original/" class="skeleton-image" width="250" height="250"alt="">';
const renderDataList = dataObj => {
  const filmsList = dataObj.results;
  filmsInner.innerHTML = "";
  filmsList.forEach(film => {
    const {
      name,
      poster_path,
      title,
      vote_average,
      popularity,
      profile_path,
      genre_ids
    } = film;
    (0,_renderGenres__WEBPACK_IMPORTED_MODULE_1__["default"])(film);
    filmsInner.insertAdjacentHTML("beforeend", `
          <article class="films__item">
          <a href="#" class="films__link">
            <div href="#" class="films__img-wrapper">
              <div class="films__img ibg">
                ${poster_path || profile_path ? `<img loading="lazy" src="https://image.tmdb.org/t/p/original/${poster_path || profile_path}" class="skeleton-image" width="250" height="250"alt="">` : "<p>Oops :( Looks like image not found</p>"}
              </div>
            </div>
            <div class="films__info">
              <h2 class="films__name">
                ${title || name}
              </h2>
              <div class="films__genres">
                <span class="films__genre">Comedy</span>
                <span class="films__genre">Blockbuster</span>
                <span class="films__genre">Criminal</span>
              </div>
              <div class="films__rating">
                <span>${vote_average ? "Rating" : popularity ? "Popularity" : ""}</span>
                <span>${vote_average ? vote_average : popularity ? popularity : "N/A"}</span>
              </div>
            </div>
          </a>
        </article>
        `);
  });
};

//fetch

const initApp = function () {
  let page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  const API_POPULAR_MOVIES_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`;
  fetch(API_POPULAR_MOVIES_URL, {
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => response.json()).then(data => {
    loader.classList.remove("active");
    console.log(data);
    renderDataList(data);
    return data;
  }).then(data => {
    const total = data.total_results;
    const pages = Math.ceil(total / 10);
    for (let i = pages; i >= 1; i--) {
      _pagination__WEBPACK_IMPORTED_MODULE_0__.paginationList.forEach(el => {
        el.insertAdjacentHTML("afterbegin", `
          <li class="pagination__item ${i == _pagination__WEBPACK_IMPORTED_MODULE_0__.queryParam ? "active" : ""}">
              <a href="?page=${i}" class="pagination__btn">${i}</a>
            </li>
          `);
      });
    }
    return data;
  });
};
initApp(_pagination__WEBPACK_IMPORTED_MODULE_0__.queryParam);

//search logic

const form = document.querySelector(".form");
const search = form.querySelector(".form__search");
console.log(search);
form.addEventListener("submit", e => {
  e.preventDefault();
  const API_SEARCH_URL = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${search.value}&language=en-US&page=1&include_adult=false`;
  fetch(API_SEARCH_URL, {
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => res.json()).then(data => {
    console.log(data);
    const {
      results
    } = data;
    if (results.length >= 1) {
      renderDataList(data);
    } else {
      filmsInner.innerHTML = "<p class='form__error'>There is no results </p>";
    }
    _pagination__WEBPACK_IMPORTED_MODULE_0__.paginationList.forEach(el => {
      el.classList.add("hide");
    });
    infoTitle.innerHTML = `Results: ${results.length}`;
  });
});

/***/ }),

/***/ "./src/js/components/pagination.js":
/*!*****************************************!*\
  !*** ./src/js/components/pagination.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "paginationList": () => (/* binding */ paginationList),
/* harmony export */   "params": () => (/* binding */ params),
/* harmony export */   "queryParam": () => (/* binding */ queryParam)
/* harmony export */ });
//determining query param

const paginationList = document.querySelectorAll(".pagination");
const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop)
});
let queryParam = params.page;
if (!queryParam) {
  queryParam = 1;
  history.pushState(null, null, "?page=1");
}


/***/ }),

/***/ "./src/js/components/preloader.js":
/*!****************************************!*\
  !*** ./src/js/components/preloader.js ***!
  \****************************************/
/***/ (() => {

if (document.querySelector(".preloader")) {
  const preloader = document.querySelector(".preloader");
  const logo = preloader.querySelector(".logo");
  window.addEventListener("load", e => {
    setTimeout(() => {
      logo.classList.add("active");
    }, 300);
    setTimeout(() => {
      preloader.classList.remove("active");
    }, 1400);
  });
}

// if (preloader) {

// }

/***/ }),

/***/ "./src/js/components/renderGenres.js":
/*!*******************************************!*\
  !*** ./src/js/components/renderGenres.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _genres__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./genres */ "./src/js/components/genres.js");

const genresList = document.querySelectorAll(".films__genres");
const renderGenres = item => {
  if (item.genre_ids >= 1) {
    _genres__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(genreObj => {
      const genreItem = document.createElement("span");
      genreItem.classList.add("films__genre");
      if (genreObj.id == item.genre_ids[0]) {
        console.log(item);
        genresList.forEach(genreListItem => {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderGenres);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_functions */ "./src/js/_functions.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_functions__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_components */ "./src/js/_components.js");


})();

/******/ })()
;
//# sourceMappingURL=main.js.map