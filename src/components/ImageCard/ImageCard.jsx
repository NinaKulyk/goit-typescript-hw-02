import s from "./ImageCard.module.css";

const ImageCard = ({ item, onImageClick }) => {
  return (
    <div className={s.imageCard}>
      <img
        className={s.image}
        src={item.urls?.small}
        alt={item.alt_description}
        onClick={() => {
          onImageClick(item);
        }}
      />
    </div>
  );
};

export default ImageCard;
