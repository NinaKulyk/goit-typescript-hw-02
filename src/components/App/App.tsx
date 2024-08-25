import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import { fetchImages } from "../../services/api";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import { UnsplashPhoto } from "./App.types";

function App() {
  const [images, setImages] = useState<UnsplashPhoto[]>([]);
  const [query, setQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState<UnsplashPhoto | null>(null);

  useEffect(() => {
    const getData = async () => {
      if (query === "") {
        return;
      }
      try {
        setIsError(false);
        setIsLoading(true);
        const res = await fetchImages(query, page);
        setImages((prev) => [...prev, ...res.results]);
        setTotal(res.total_pages);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [query, page]);

  const handleSetQuery = (query: string) => {
    setQuery(query);
    setImages([]);
    setPage(1);
  };

  const handleOpenModal = (image: UnsplashPhoto) => {
    setCurrentImage(image);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentImage(null);
  };

  return (
    <>
      <SearchBar setQuery={handleSetQuery} />
      {isError && <ErrorMessage />}
      {images.length > 0 && (
        <ImageGallery items={images} onImageClick={handleOpenModal} />
      )}
      {isLoading && <Loader />}
      {total > page && !isLoading && <LoadMoreBtn setPage={setPage} />}
      <ImageModal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        image={currentImage}
      />
    </>
  );
}

export default App;
