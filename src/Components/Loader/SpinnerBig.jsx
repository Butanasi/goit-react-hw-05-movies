import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import style from './index.module.scss';
export const SpinnerBig = () => {
  return (
    <div className={style.container}>
      <Loader type="Grid" color="red" height={100} width={100} />
    </div>
  );
};
