import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ items, onImageClick }) => {
  return (
    <ul className={s.imageList}>
      {items.map((item) => {
        return (
          <li className={s.imageItem} key={item.id}>
            <ImageCard item={item} onImageClick={onImageClick} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
