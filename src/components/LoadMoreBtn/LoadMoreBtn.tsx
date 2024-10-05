import { FC } from "react";
import { ILoadMoreBtnProps } from "./LoadMoreBtn.types";
import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn: FC<ILoadMoreBtnProps> = ({ onClick }) => {
  return (
    <div className={css.container}>
      <button type="button" className={css.loadMoreBtn} onClick={onClick}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
