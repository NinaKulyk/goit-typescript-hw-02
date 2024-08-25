import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { fetchImages } from "./services/api";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

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

  const handleSetQuery = (query) => {
    setQuery(query);
    setImages([]);
    setPage(1);
  };

  const handleOpenModal = (image) => {
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
