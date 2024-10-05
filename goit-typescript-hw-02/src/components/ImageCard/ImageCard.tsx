import { FC } from "react";
import { IImageCardProps } from "./ImageCard.types";
import css from "./ImageCard.module.css";

const ImageCard: FC<IImageCardProps> = ({ alt, src, onClick }) => {
  return (
    <div>
      <img src={src} alt={alt} onClick={onClick} className={css.cardImg} />
    </div>
  );
};
export default ImageCard;
