const determineType = entry => {
  return entry.name ? 'tv' : 'movie';
};

export default determineType;
