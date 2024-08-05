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

  const handleSearch = async (topic,page=1) => {
    let firstImageId;
    let root="root"
    try {
      (page===1)? setImages([]):setImages([...images]);
      setError(false);
      setLoading(true);
      setQuery({topic:topic,page:page}); 
      const data = await fetchArticlesWithTopic(topic,page);
      firstImageId=data.results[0].id
      setQuery({topic:topic,page:page+1});
      setImages([...images, ...data.results]);
      
      console.log(firstImageId) 
      console.log(document.querySelector(`#${root}`))
    } catch (error) {
      setError(true);
      console.log(error)
    } finally {
      setLoading(false);
    }
  };

  // const handleLoadMoreBtn = () => {
  //   handleSearch(query.topic,query.page)


  // }

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
      <LoadMoreBtn searchMore={()=>handleSearch(query.topic,query.page)} topic={query.topic} page={query.page}/>
      </> }
      
    </>
  );
}

export default App;
