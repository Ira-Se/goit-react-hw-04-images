import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'baseURL',
  },
  overlay: {
    backgroundColor: 'black',
  },
};
Modal.setAppElement('#root');
export const ModalWindow = ({
  isOpen,
  onRequestClose,
  // customStyles,
  largeImageURL,
  tags,
}) => {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <img src={largeImageURL} alt={tags} width="800" />
      </Modal>
    </div>
  );
};
