import css from './ImageGallery.module.css'
import ImageCard from "../ImageCard/ImageCard";

function ImageGallery({data}) {
	console.log(data)
const imageCardSet = data.map((item)=>{
	return (
		<li key={item.id}><ImageCard url={item.urls.thumb} alt={item.alt_description} /></li>
		
	);
})
    
return (

    <ul className={css.imageGallery}>
	{imageCardSet}
</ul>
);
}

export default  ImageGallery;