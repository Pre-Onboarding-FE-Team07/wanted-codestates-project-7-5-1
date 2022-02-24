export default async (url) => {
return fetch(url)
  .then(response => response.json())
  .then((jsonData) => {
    return jsonData;
  })
  .catch((error) => {
    console.error(error)
    return false;
  })
};