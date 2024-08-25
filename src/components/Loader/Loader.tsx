import s from "./Loader.module.css";
import { RotateLoader } from "react-spinners";

const Loader: React.FC = () => {
  return (
    <div className={s.loader}>
      <RotateLoader color="rgb(117, 156, 255)" />
    </div>
  );
};

export default Loader;
