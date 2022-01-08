import { useState, useEffect } from 'react';
import style from './Cast.module.scss';
import * as restApi from '../../RestApi';
import { useParams } from 'react-router-dom';
import img from '../../images/cropped-No-Face-Picture.jpg';
const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    restApi.fetchOnCast(movieId).then(responce => setCast(responce));
  }, [movieId]);
  return (
    <>
      {cast && (
        <ul className={style.list}>
          {cast.cast.map(({ id, profile_path, name, character }) => (
            <li key={id} className={style.Item}>
              <img
                className={style.poster}
                src={
                  profile_path === null
                    ? img
                    : `https://image.tmdb.org/t/p/w500${profile_path}`
                }
                alt={name}
              />
              <h3 className={style.Title}>{name}</h3>
              <p className={style.about}>
                <b>Character:</b>
                <i className={style.italic}>{character}</i>
              </p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default Cast;
