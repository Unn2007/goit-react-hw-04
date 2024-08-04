import { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import "./App.css";
import fetchArticlesWithTopic from "./utils/images-api";
import { InfinitySpin } from "react-loader-spinner";
import ImageGallery from "./components/ImageGallery/ImageGallery";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (topic) => {
    try {
      setImages([]);
      setError(false);
      setLoading(true);
      const data = await fetchArticlesWithTopic(topic);
      
      setImages(data.results);
     
    } catch (error) {
      setError(true);
      console.log(error)
    } finally {
      setLoading(false);
    }
  };
console.log(images.length)
  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {loading&&<InfinitySpin
        visible={true}
        width="200"
        color="#4fa94d"
        ariaLabel="infinity-spin-loading"
      />}
      {images.length>0 && <ImageGallery data={images}/>}
      
    </>
  );
}

export default App;
