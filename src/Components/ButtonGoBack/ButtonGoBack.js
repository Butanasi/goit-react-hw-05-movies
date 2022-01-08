import { useHistory } from 'react-router-dom';
import style from './ButtonGoBack.module.scss';
import { ImArrowLeft2 } from 'react-icons/im';
export const ButtonGoBack = () => {
  const history = useHistory();

  return (
    <button className={style.button} onClick={() => history.goBack()}>
      <ImArrowLeft2 />
      Go Back
    </button>
  );
};
