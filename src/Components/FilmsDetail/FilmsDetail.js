import PropTypes from 'prop-types';
import style from './FilmsDetail.module.scss';
import noImg from '../../images/Movie.jpg';
export const FilmsDetail = ({ movie }) => {
  return (
    <div className={style.Container}>
      <img
        className={style.image}
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : noImg
        }
        alt=""
      />
      <ul className={style.list}>
        <li className={style.item}>
          <h1 className={style.title}>
            {movie.title}
            <span>({movie.release_date.substring(0, 4)})</span>
          </h1>
        </li>
        <li className={style.item}>
          {' '}
          <b>User Score:</b> {movie.vote_average * 10}%
        </li>
        <li className={style.item}>
          <h3 className={style.titleAbout}>Overview</h3>
          <p className={style.about}>{movie.overview}</p>
        </li>
        <li className={style.item}>
          <div className={style.containerGenres}>
            <h3 className={style.titleAbout}>Genres:</h3>
            <ul className={style.listGenres}>
              {movie.genres.map(({ id, name }) => (
                <li className={style.itemGenres} key={id}>
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};
FilmsDetail.propTypes = {
  movie: PropTypes.object.isRequired,
};
