import css from './ImageCard.module.css'
function ImageCard({url,alt}) {
    return (
        <div>
  <img src={url} alt={alt} className={css.image} />
</div>

    );
}

export default ImageCard;