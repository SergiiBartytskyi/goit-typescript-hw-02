import RiseLoader from "react-spinners/RiseLoader";
import css from "./Loader.module.css";
const Loader = () => {
  return (
    <div className={css.loader}>
      <RiseLoader color="#0000ff" />
    </div>
  );
};

export default Loader;
