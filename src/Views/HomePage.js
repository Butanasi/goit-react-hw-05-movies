import { useEffect, useState } from 'react';
import { MovieList } from '../Components/MovieList';
import * as restApi from '../RestApi';
import { ButtonLoadMore } from '../Components/ButtonLoadMore';
import { Spinner } from '../Components/Loader/Spinner';
import style from './HomePage.module.css';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

function HomePage() {
  const location = useLocation();
  const [movies, setMovies] = useState(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    restApi.fetchOnHome().then(({ results }) => setMovies(results));
  }, []);

  useEffect(() => {
    if (page === 1) {
      return;
    }

    restApi.fetchOnHomePage(page).then(({ results }) => {
      setMovies(prevState => [...prevState, ...results]);
    });
    setLoading(false);
  }, [page]);

  const loadMore = () => {
    setLoading(true);
    setPage(prevState => prevState + 1);
  };

  return (
    <div>
      {movies && (
        <>
          <h1 className={style.title}>Tranding today</h1>
          <MovieList movies={movies} location={location} />
          <ButtonLoadMore nextPage={loadMore} loading={loading}>
            <Spinner />
          </ButtonLoadMore>
        </>
      )}
    </div>
  );
}
export default HomePage;
