import Modal from 'react-modal';

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
  
 


  function ImageModal({modalIsOpen,closeModal}) {
    Modal.setAppElement('#root');
return (

    <div>
      
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Modal"
      >

        <button onClick={closeModal}>close</button>
        
      </Modal>
    </div>

);

  }

  export default ImageModal;