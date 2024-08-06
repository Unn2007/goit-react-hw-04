import Modal from 'react-modal';
import { FaPhoneAlt,FaClock,FaHeart } from "react-icons/fa";

const customStyles = {
    overlay: {
        
        backgroundColor: 'rgba(64, 64, 64, 0.75)'
      },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  
 


  function ImageModal({modalIsOpen,closeModal,description,urlRegular,likes,createdAt,userProfileImage,authorName,userSocial}) {
    Modal.setAppElement('#root');
return (

    <div>
      
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Modal"
      >
        <h2>{description}</h2>
        <img alt={description} src={urlRegular}/>
        <div>

        <FaHeart />

          <p>{likes}</p>

        </div>

        <div>
        <FaClock/>
        <p>{createdAt}</p>

        </div>
        <div>
          <img alt="author_foto" src={userProfileImage}/>
        <div>
          <p>{authorName}</p>
          <a href={userSocial}>Portfolio</a>
        </div>


        </div>

        

        <button onClick={closeModal}>close</button>
        
      </Modal>
    </div>

);

  }

  export default ImageModal;