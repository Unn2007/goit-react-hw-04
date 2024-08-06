
import { useState, useEffect } from "react";

import SearchBar from "./components/SearchBar/SearchBar";
import "./App.css";
import fetchArticlesWithTopic from "./utils/images-api";
import { InfinitySpin } from "react-loader-spinner";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/SearchBar/ImageModal/ImageModal";




function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState({});
  const [imageModalIsOpen, setIsOpen] = useState(false);
 
  

  function openimageModal() {
    setIsOpen(true);
  }
  function closeimageModal() {
    setIsOpen(false);
  }


  useEffect(() => {
    if (query.page > 1) {
      const beginImages = document.querySelector(`#imageGallery`).lastElementChild;      
      beginImages.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [query.page]);

  const handleSearch = async (topic, page = 1) => {
    try {
      if (page === 1 || query.topic !== topic) {
        setImages(() => {
          return [];
        });
      }
      setError(false);
      setLoading(true);
      const data = await fetchArticlesWithTopic(topic, page);
      setQuery({ topic: topic, page: page + 1 });
      setImages((prevImages) => {
        return [...prevImages, ...data.results];
      });
    
    } catch (error) {
      setError(true);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {loading && (
        <InfinitySpin
          visible={true}
          width="200"
          color="#4fa94d"
          ariaLabel="infinity-spin-loading"
        />
      )}
      {images.length > 0 && (
        <>
          <ImageGallery data={images} openModal={openimageModal} />
          <LoadMoreBtn
            searchMore={() => handleSearch(query.topic, query.page)}
          />

        </>
      )}

      {imageModalIsOpen&&<ImageModal modalIsOpen={imageModalIsOpen} closeModal={closeimageModal}/>}





    </>
  );
}

export default App;
