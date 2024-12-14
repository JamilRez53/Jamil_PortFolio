
import { Modal } from 'react-responsive-modal';
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    height: "500px",
    width: "400px",
    overFlowY: "auto",
    // marginRight: '-50%',
    transform: "translate(-50%, -50%)",
  },
};
function ModalComponent({ isOpen, content, onClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Example Modal"
    >
      {content()}
    </Modal>
  );
}

export default ModalComponent;
