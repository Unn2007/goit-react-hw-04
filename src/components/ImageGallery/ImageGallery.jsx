import css from './ImageGallery.module.css'
import ImageCard from "../ImageCard/ImageCard";


function ImageGallery({data,openModal}) {
const handleClick = (event)=> {
	console.log(data[event.target.id])
    openModal();
}
const imageCardSet = data.map((item,index)=>{
	
	return (
		<li key={item.id}><ImageCard url={item.urls.small} alt={item.alt_description} id={index}  /></li>
		
	);
})
    
return (

    <ul className={css.imageGallery} id="imageGallery" onClick={handleClick}>
	{imageCardSet}
</ul>
);
}

export default  ImageGallery;