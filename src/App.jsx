import { useState,useEffect } from "react";
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

  useEffect(() => {
    if (query.page>1) {
    const beginImages=document.querySelector(`#xxxxx`).lastElementChild
    
   
    beginImages.style.border="2px solid red"
    beginImages.scrollIntoView({
       behavior:"smooth"
    })
  }
  }, [query.page]);

  const handleSearch = async (topic,page=1) => {
    
    
    try {
      ((page===1)||(query.topic!==topic))? setImages([]):setImages([...images]);
      console.log((page===1)||(query.topic!==topic))
      setError(false);
      setLoading(true);
      const data = await fetchArticlesWithTopic(topic,page);
      
      setQuery({topic:topic,page:page+1});
      setImages([...images, ...data.results]);
      
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
      {images.length>0 && 
      <>
      <ImageGallery data={images}/>
      <LoadMoreBtn searchMore={()=>handleSearch(query.topic,query.page)} />
      </> }
      
    </>
  );
}

export default App;
