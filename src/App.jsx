import { useState } from 'react'
import SearchBar from './components/SearchBar/SearchBar'
import './App.css'
import fetchArticlesWithTopic from './utils/images-api'

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

	const handleSearch = async (topic) => {
    try {
	  setArticles([]);
	  setError(false);
      setLoading(true);
      const data = await fetchArticlesWithTopic(topic);
      setArticles(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };





  

 
  return (
    <>
      
       <SearchBar onSearch={onFind} />
    </>
  )
}

export default App
