import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import PropTypes from "prop-types";

function ImageGallery({ data, openModal }) {
  const handleClick = (event) => {
    const clickedImageIndex = event.target.id;
    const clickedImage = data[clickedImageIndex];
    if (clickedImage) {
      openModal({
        description: clickedImage.description,
        urlRegular: clickedImage.urls.regular,
        likes: clickedImage.likes,
        createdAt: clickedImage.created_at,
        userProfileImage: clickedImage.user.profile_image.small,
        authorName: clickedImage.user.name,
        userSocial: clickedImage.user.social.portfolio_url,
      });
    }
  };
  const imageCardSet = data.map((item, index) => {
    return (
      <li key={item.id}>
        <ImageCard
          url={item.urls.small}
          alt={item.alt_description}
          id={index}
        />
      </li>
    );
  });

  return (
    <ul className={css.imageGallery} id="imageGallery" onClick={handleClick}>
      {imageCardSet}
    </ul>
  );
}

export default ImageGallery;

ImageGallery.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  openModal: PropTypes.func.isRequired,
};
