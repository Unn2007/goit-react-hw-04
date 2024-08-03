import { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import "./App.css";
import fetchArticlesWithTopic from "./utils/images-api";
import { InfinitySpin } from "react-loader-spinner";

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
      console.dir(data.results[0])
      setImages(data);
    } catch (error) {
      setError(true);
      console.log(error)
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {loading&&<InfinitySpin
        visible={true}
        width="200"
        color="#4fa94d"
        ariaLabel="infinity-spin-loading"
      />}
    </>
  );
}

export default App;
