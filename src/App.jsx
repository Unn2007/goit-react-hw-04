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
      if  ((page===1)||(query.topic!==topic)) {
        setImages(() => {
          return [];
        });
        
        // console.log(images);
      }
      // console.log((page===1)||(query.topic!==topic))
      // setImages([]);
      // console.log(images)
      setError(false);
      setLoading(true);
      const data = await fetchArticlesWithTopic(topic,page);
      
      setQuery({topic:topic,page:page+1});
      console.log(images)
      setImages((prevImages) => {
        return [...prevImages, ...data.results];
      });
      // setImages([...images, ...data.results]);
      console.log(images)
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
