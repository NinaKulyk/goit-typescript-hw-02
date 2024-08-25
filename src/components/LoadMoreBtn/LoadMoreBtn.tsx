import { LoadMoreBtnProps } from "../App/App.types";
import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ setPage }) => {
  return (
    <div className={s.loadMoreBtn}>
      <button className={s.btn} onClick={() => setPage((prev) => prev + 1)}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
