import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/photos/?client_id=RjIsPZVdJdHA7EIX1kcSuYMG_YljaeuXcwVRHctfYpI";

 const fetchArticlesWithTopic = async topic => {
  const response = await axios.get(`/search?query=${topic}`);
  return response.data.hits;
};