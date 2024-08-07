import { useState, useEffect } from "react";
import { Axios, AxiosError } from "axios";
import toast, { Toaster } from "react-hot-toast";
import SearchBar from "./components/SearchBar/SearchBar";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import fetchArticlesWithTopic from "./utils/images-api";
import { InfinitySpin } from "react-loader-spinner";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import "./App.css";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState({});
  const [imageModalIsOpen, setIsOpen] = useState(false);
  const [imageModalData, setimageModalData] = useState({});

  function openimageModal() {
    setIsOpen(true);
  }
  function closeimageModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    if (query.page > 1) {
      const beginImages =
        document.querySelector(`#imageGallery`).lastElementChild;
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
      if (data.total === 0) {
        toast.error(`Error.Nothing find`, {
          position: "top-left",
        });
        return;
      }

      setQuery({ topic: topic, page: page + 1 });
      setImages((prevImages) => {
        return [...prevImages, ...data.results];
      });
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleClickImage = (modalData) => {
    setimageModalData(modalData);
    setIsOpen(true);
  };

  return (
    <div id="app">
      {error && <ErrorMessage toggleState={setError} />}
      <SearchBar onSearch={handleSearch} />

      {images.length > 0 && (
        <>
          <ImageGallery data={images} openModal={handleClickImage} />
          <LoadMoreBtn
            searchMore={() => handleSearch(query.topic, query.page)}
          />
        </>
      )}
      <div className="loaderWrap">
        {loading && (
          <InfinitySpin
            visible={true}
            width="100"
            color="#4fa94d"
            ariaLabel="infinity-spin-loading"
          />
        )}
      </div>
      {imageModalIsOpen && (
        <ImageModal
          modalIsOpen={imageModalIsOpen}
          closeModal={closeimageModal}
          modalData={imageModalData}
        />
      )}
    </div>
  );
}

export default App;
