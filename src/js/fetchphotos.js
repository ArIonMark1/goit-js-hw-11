const axios = require('axios').default;
const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '35924349-e744a5a24a3ba0b665be73a1d';


export const getPhotos = async function getPhotos(query, page, per_page) {
  const params = {
    key: API_KEY,
    q: `${query}`,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: `${per_page}`,
    page: `${page}`,
  };

  const response = await axios.get(BASE_URL, {
    params,
  });
  const photos = await response.data;
  console.log(photos);
  return photos;
};
