import { ImageModalProps } from "../App/App.types";
import s from "./ImageModal.module.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onRequestClose,
  image,
}) => {
  if (!image) {
    return null;
  }
  return (
    <div className={s.wrapper}>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        shouldCloseOnOverlayClick={true}
        overlayClassName={s.overlay}
        contentLabel="Image Modal"
        className={s.modal}
      >
        <img src={image.urls.regular} alt={image.alt_description ?? "Image"} />
        <div className={s.descriptionWrapper}>
          <p className={s.description}>{image.alt_description}</p>
        </div>
      </Modal>
    </div>
  );
};

export default ImageModal;
