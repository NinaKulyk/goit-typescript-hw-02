import { ImageCardProps } from "../App/App.types";
import s from "./ImageCard.module.css";

const ImageCard: React.FC<ImageCardProps> = ({ item, onImageClick }) => {
  return (
    <div className={s.imageCard}>
      <img
        className={s.image}
        src={item.urls?.small}
        alt={item.alt_description || "Image"}
        onClick={() => {
          onImageClick(item);
        }}
      />
    </div>
  );
};

export default ImageCard;
