import { useParams, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as restApi from '../RestApi';
import { ButtonGoBack } from '../Components/ButtonGoBack';
import { Navigation } from '../Components/Navigation';
import { FilmsDetail } from '../Components/FilmsDetail';

function MoviesDetail() {
  const { movieId } = useParams();
  const history = useHistory();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    restApi.fetchOnMoviesDetail(movieId).then(responce => setMovie(responce));
  }, [movieId]);

  const handleClick = () => {
    let path = JSON.parse(localStorage.getItem('prevLoc'));
    history.push(path);
  };
  return (
    <>
      {movie && (
        <>
          <ButtonGoBack onClick={handleClick} />
          <FilmsDetail movie={movie} />
          <Navigation movieId={movieId} />
        </>
      )}
    </>
  );
}
export default MoviesDetail;
