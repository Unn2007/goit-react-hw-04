import axios from "axios";



axios.defaults.baseURL = 'https://api.unsplash.com';
const accessKey = 'RjIsPZVdJdHA7EIX1kcSuYMG_YljaeuXcwVRHctfYpI&query';

const itemsPerPage = 15; 




 const fetchArticlesWithTopic = async (topic,pageNumber=1) => {
  const response = await axios.get(`/search/photos/?query=${topic}`,{
    headers: {
        Authorization: `Client-ID ${accessKey}`
    },
    params: {
      page: pageNumber,
      per_page: itemsPerPage
  }
});
  // const response = await axios.get(`https://api.unsplash.com/search/photos/?client_id=RjIsPZVdJdHA7EIX1kcSuYMG_YljaeuXcwVRHctfYpI&query=${topic}`);
  return response.data;
};

export default fetchArticlesWithTopic;