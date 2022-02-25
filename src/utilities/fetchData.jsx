import * as axios from 'axios';

const fetchData = async (...args) =>{
  const [url, options] = args;
  const request = { url, options };
  const cachedResponse = localStorage.getItem(JSON.stringify(request));
  if (cachedResponse) {
    return JSON.parse(cachedResponse);
  }

  const response = await axios.get(...args);

  localStorage.setItem(JSON.stringify(request), JSON.stringify(response));
  return response;
};

export default fetchData;