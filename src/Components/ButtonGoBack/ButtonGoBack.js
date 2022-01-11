import PropTypes from 'prop-types';
import style from './ButtonGoBack.module.scss';
import { ImArrowLeft2 } from 'react-icons/im';
export const ButtonGoBack = ({ onClick }) => {
  return (
    <button className={style.button} onClick={onClick}>
      <ImArrowLeft2 />
      Go Back
    </button>
  );
};
ButtonGoBack.propTypes = {
  onClick: PropTypes.func.isRequired,
};
