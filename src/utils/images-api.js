import axios from "axios";



axios.defaults.baseURL = 'https://api.unsplash.com';
// axios.defaults.headers.common['Authorization'] = "client_id=RjIsPZVdJdHA7EIX1kcSuYMG_YljaeuXcwVRHctfYpI&query";
const accessKey = 'RjIsPZVdJdHA7EIX1kcSuYMG_YljaeuXcwVRHctfYpI&query';

// axios.get('https://api.unsplash.com/photos', {
//     headers: {
//         Authorization: `Client-ID ${accessKey}`
//     }
// })
// .then(response => {
//     console.log(response.data);
// })
// .catch(error => {
//     console.error('Ошибка:', error);
// });





 const fetchArticlesWithTopic = async topic => {
  const response = await axios.get(`/search/photos/?query=${topic}`,{
    headers: {
        Authorization: `Client-ID ${accessKey}`
    }
});
  // const response = await axios.get(`https://api.unsplash.com/search/photos/?client_id=RjIsPZVdJdHA7EIX1kcSuYMG_YljaeuXcwVRHctfYpI&query=${topic}`);
  return response.data;
};

export default fetchArticlesWithTopic;