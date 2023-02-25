const fetchData = async url => {
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = await response.json();
  return data;
};

export default fetchData;