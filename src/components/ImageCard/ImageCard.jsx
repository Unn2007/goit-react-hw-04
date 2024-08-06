import css from './ImageCard.module.css'
function ImageCard({url,alt,id}) {
    return (
        <div>
  <img src={url} alt={alt} id={id} className={css.image} />
</div>

    );
}

export default ImageCard;