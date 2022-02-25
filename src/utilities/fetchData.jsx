import * as axios from 'axios';

const fetchData = async (...args) => {
  const [url, key] = args;
  const cachedResponse = localStorage.getItem(key);
  if (cachedResponse) {
    return JSON.parse(cachedResponse);
  }
  const response = await axios.get(...args);
  localStorage.setItem(key, JSON.stringify(response));
  return response;
};

export default fetchData;
