
import toast, { Toaster } from 'react-hot-toast';


function SearchBar({onSearch}) {
  
  
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
		const topic = form.elements.topic.value;
    
		if(form.elements.topic.value.trim() === "") {
      toast("Please enter search term!")
			
			return;
		}
    
		onSearch(topic);
    form.reset();
  };


return (
<header>
  <form onSubmit={handleSubmit}>
    <input
    name="topic"
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
    <button type="submit">Search</button>
  </form>
  <Toaster/>
</header>

);

}

export default SearchBar;