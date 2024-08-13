import { useState, useEffect, useRef, forwardRef } from "react";
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
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [imageModalIsOpen, setIsOpen] = useState(false);
  const [imageModalData, setimageModalData] = useState({});

  const loadMoreButton = useRef();

  function openimageModal() {
    setIsOpen(true);
  }
  function closeimageModal() {
    setIsOpen(false);
  }

  const scrollImages = () => {
    const beginImages = loadMoreButton.current;
    beginImages.scrollIntoView({
      behavior: "smooth",
    });
  };

  const onFind = (topic) => {
    setQuery(topic);
    setPage(1);
    setImages(() => {
      return [];
    });
  };

  const findMore = () => {
    setPage(page + 1);
  };

  const handleClickImage = (modalData) => {
    setimageModalData(modalData);
    setIsOpen(true);
  };

  useEffect(() => {
    const handleSearch = async () => {
      try {
        if (query) {
          setError(false);
          setLoading(true);
          const data = await fetchArticlesWithTopic(query, page);
          if (data.results.length === 0) {
            toast.error(`Error.Nothing find`, { position: "top-left" });
          }
          setImages((prevImages) => {
            return [...prevImages, ...data.results];
          });
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    handleSearch();
  }, [query, page]);

  useEffect(() => {
    page > 1 && scrollImages();
  });

  return (
    <div id="app">
      {error && <ErrorMessage toggleState={setError} />}

      <SearchBar onSearch={onFind} />

      {images.length > 0 && (
        <>
          <ImageGallery data={images} openModal={handleClickImage} />
          <LoadMoreBtn searchMore={findMore} ref={loadMoreButton} />
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
