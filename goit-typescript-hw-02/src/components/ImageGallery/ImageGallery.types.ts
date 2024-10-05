import { RefObject } from "react";
import { Image, IPicture } from "../App/App.types";

export interface ImageGalleryProps {
  items: IPicture[];
  onImageClick: (imageData: Image) => void;
  lastPictureRef: RefObject<HTMLLIElement>;
}
