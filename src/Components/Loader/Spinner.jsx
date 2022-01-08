import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

export const Spinner = () => {
  return (
    <div>
      <Loader type="Hearts" color="red" height={50} width={50} />
    </div>
  );
};
