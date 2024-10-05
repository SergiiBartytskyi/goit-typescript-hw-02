import css from "./ImageCard.module.css";

const ImageCard = ({ alt, src, onClick }) => {
  return (
    <div>
      <img src={src} alt={alt} onClick={onClick} className={css.cardImg} />
    </div>
  );
};
export default ImageCard;
