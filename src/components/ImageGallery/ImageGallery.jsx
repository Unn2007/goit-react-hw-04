import css from './ImageGallery.module.css'
import ImageCard from "../ImageCard/ImageCard";


function ImageGallery({data}) {
	
const imageCardSet = data.map((item,index)=>{
	
	return (
		<li key={item.id} ><ImageCard url={item.urls.small} alt={item.alt_description}  /></li>
		
	);
})
    
return (

    <ul className={css.imageGallery} id="imageGallery">
	{imageCardSet}
</ul>
);
}

export default  ImageGallery;