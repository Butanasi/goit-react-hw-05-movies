import PropTypes from 'prop-types';
import style from './ButtonLoadMore.module.scss';
export const ButtonLoadMore = ({ nextPage, loading, children }) => {
  return (
    <>
      {loading && <div className={style.container}>{children}</div>}
      <button
        className={style.button}
        type="button"
        onClick={nextPage}
        disabled={loading}
      >
        {loading && <span>Loading...</span>}
        {!loading && <span>Load more</span>}
      </button>
    </>
  );
};
ButtonLoadMore.propTypes = {
  nextPage: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};
