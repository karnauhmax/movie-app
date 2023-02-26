const linksList = [
  {
    className: 'data-section__link',
    page: 'featured.html',
    params: { featured: 'popular', media: 'tv', page: 1 },
    parentSelector: '.tv__heading',
    text: 'Show All'
  },
  {
    className: 'data-section__link',
    page: 'featured.html',
    params: { featured: 'top_rated', media: 'tv', page: 1 },
    parentSelector: '.top-shows__heading',
    text: 'Show All'
  },

  {
    className: 'data-section__link',
    page: 'featured.html',
    params: { featured: 'popular', media: 'movie', page: 1 },
    parentSelector: '.films__heading',
    text: 'Show All'
  },

  {
    className: 'data-section__link',
    page: 'featured.html',
    params: { featured: 'top_rated', media: 'movie', page: 1 },
    parentSelector: '.top-movies__heading',
    text: 'Show All'
  }
];

export default linksList;
