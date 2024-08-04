import { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import "./App.css";
import fetchArticlesWithTopic from "./utils/images-api";
import { InfinitySpin } from "react-loader-spinner";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn"

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState({})

  const handleSearch = async (topic) => {
    try {
      setImages([]);
      setError(false);
      setLoading(true);
      const data = await fetchArticlesWithTopic(topic);
      setQuery({topic:topic,page:1});
      setImages(data.results);
      console.log(data)
      
    } catch (error) {
      setError(true);
      console.log(error)
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMoreBtn = async () => {

  }

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {loading&&<InfinitySpin
        visible={true}
        width="200"
        color="#4fa94d"
        ariaLabel="infinity-spin-loading"
      />}
      {images.length>0 && 
      <>
      <ImageGallery data={images}/>
      <LoadMoreBtn/>
      </> }
      
    </>
  );
}

export default App;
