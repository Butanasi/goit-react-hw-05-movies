import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '../../const';
import style from './MovieList.module.scss';
import noImg from '../../images/Movie.jpg';

export const MovieList = ({ movies }) => {
  const location = useLocation();
  const movieLoc = `/movies${location.search}`;
  const click = () => {
    if (location.search === '') {
      localStorage.setItem('prevLoc', JSON.stringify(ROUTES.HOME));
    } else {
      localStorage.setItem('prevLoc', JSON.stringify(movieLoc));
    }
  };
  return (
    <div className={style.Container}>
      <ul className={style.gallery}>
        {movies.map(({ title, id, poster_path }) => (
          <li key={id} className={style.galleryItem}>
            <Link
              onClick={click}
              to={`${ROUTES.MOVIES}/${id}`}
              className={style.galleryLink}
            >
              <img
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500${poster_path}`
                    : noImg
                }
                alt={title}
                className={style.poster}
              />

              <h2 className={style.galleryTitle}>{title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
    }),
  ).isRequired,
  // location: PropTypes.string.isRequired,
};
