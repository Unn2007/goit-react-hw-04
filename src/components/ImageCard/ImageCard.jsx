import css from "./ImageCard.module.css";
import PropTypes from "prop-types";


function ImageCard({ url, alt, id }) {
  
  return (
    
    <div className={css.container}>
      <img src={url} alt={alt} id={id} className={css.image} />
    </div>
  );
}

export default ImageCard;

ImageCard.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
