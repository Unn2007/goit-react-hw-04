import axios from "axios";



 const fetchArticlesWithTopic = async topic => {
  const response = await axios.get(`https://api.unsplash.com/search/photos/?client_id=RjIsPZVdJdHA7EIX1kcSuYMG_YljaeuXcwVRHctfYpI&query=${topic}`);
  // const response = await axios.get(`https://api.unsplash.com/search/photos/?client_id=RjIsPZVdJdHA7EIX1kcSuYMG_YljaeuXcwVRHctfYpI&query=${topic}`);
  return response.data;
};

export default fetchArticlesWithTopic;