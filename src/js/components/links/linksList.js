const linksList = [
  {
    className: 'data-section__link',
    page: 'featured.html',
    params: { featured: 'popular', media: 'tv' },
    parentSelector: '.tv__heading',
    text: 'Show All'
  },
  {
    className: 'data-section__link',
    page: 'featured.html',
    params: { featured: 'top_rated', media: 'tv' },
    parentSelector: '.top-shows__heading',
    text: 'Show All'
  },

  {
    className: 'data-section__link',
    page: 'featured.html',
    params: { featured: 'popular', media: 'movie' },
    parentSelector: '.films__heading',
    text: 'Show All'
  },

  {
    className: 'data-section__link',
    page: 'featured.html',
    params: { featured: 'top_rated', media: 'movie' },
    parentSelector: '.top-movies__heading',
    text: 'Show All'
  }
];

export default linksList;
