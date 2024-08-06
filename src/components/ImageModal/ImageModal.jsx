import Modal from "react-modal";
import { FaPhoneAlt, FaClock, FaHeart,FaRegWindowClose  } from "react-icons/fa";
import css from "./ImageModal.module.css";

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
          <div className={css.imageThumb}>
          <img alt={description} src={urlRegular} className={css.modalImage} />
          </div>
          <div className={css.imageInfo}>
          <h2>{description}</h2>
          <div className={css.stats}>
            <FaHeart />

            <p>{likes}</p>
          </div>

          <div className={css.stats}>
            <FaClock />
            <p>{createdAt}</p>
          </div>
          <div>
            <img alt="author_foto" src={userProfileImage} />
            <div>
              <p>{authorName}</p>
              <a href={userSocial}>Portfolio</a>
            </div>
          </div>

          <button onClick={closeModal}><FaRegWindowClose /></button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ImageModal;
