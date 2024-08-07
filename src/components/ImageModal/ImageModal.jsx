import Modal from "react-modal";
import { FaPhoneAlt, FaClock, FaHeart, FaRegWindowClose } from "react-icons/fa";
import css from "./ImageModal.module.css";
import formatFotoCreateDate from "../../utils/formatDate";
import PropTypes from "prop-types";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(64, 64, 64, 0.75)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function ImageModal({ modalIsOpen, closeModal, modalData }) {
  Modal.setAppElement("#app");
  const {
    description,
    urlRegular,
    likes,
    createdAt,
    userProfileImage,
    authorName,
    userSocial,
  } = modalData;
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Modal"
      >
        <div className={css.modalContent}>
          <button onClick={closeModal} className={css.closeButton}>
            <FaRegWindowClose />
          </button>
          <div className={css.imageThumb}>
            <img
              alt={description}
              src={urlRegular}
              className={css.modalImage}
            />
          </div>

          <h2 className={css.description}>{description}</h2>
          <div className={css.authorData}>
            <div className={css.stats}>
              <FaHeart />

              <p>{likes}</p>
            </div>

            <div className={css.stats}>
              <FaClock />
              <p>{formatFotoCreateDate(createdAt)}</p>
            </div>
            <div className={css.authorInfo}>
              <img alt="author_foto" src={userProfileImage} />

              <p>{authorName}</p>
              <a href={userSocial} target="_blank">
                Portfolio
              </a>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ImageModal;

ImageModal.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  modalData: PropTypes.object.isRequired,
};
