import { FC } from "react";
import Modal from "react-modal";
import css from "./ImageModal.module.css";
import { IModalProps } from "./ImageModal.types";

Modal.setAppElement("#root");

const ImageModal: FC<IModalProps> = ({ isOpen, onRequestClose, imageData }) => {
  if (!imageData) return null;

  const {
    regular,
    alt_description,
    description,
    likes,
    instagram_username,
    name,
  } = imageData;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <div className={css.content}>
        <img src={regular} alt={alt_description} className={css.image} />
        <div className={css.details}>
          <p>
            <strong>Author:</strong> {name}
          </p>
          {instagram_username && (
            <p>
              <strong>Instagram:</strong> @{instagram_username}
            </p>
          )}
          {description && (
            <p>
              <strong>Description:</strong> {description}
            </p>
          )}
          <p>
            <strong>Likes:</strong> {likes}
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default ImageModal;
