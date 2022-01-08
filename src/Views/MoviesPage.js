import { useState, useEffect } from 'react';
import { Searchbar } from '../Components/Searchbar';
import { toast } from 'react-toastify';
import * as restApi from '../RestApi';
import { MovieList } from '../Components/MovieList';
import { useLocation, useHistory } from 'react-router-dom';
import { ButtonLoadMore } from '../Components/ButtonLoadMore';
import { Spinner } from '../Components/Loader/Spinner';
import { SpinnerBig } from '../Components/Loader/SpinnerBig';

function MoviesPage() {
  const location = useLocation();
  const history = useHistory();
  const query = new URLSearchParams(location.search).get('query') ?? '';
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [wait, setWait] = useState(false);

  useEffect(() => {
    if (!query) {
      return;
    }
    restApi.fetchOnMovies(query, page).then(({ results }) => {
      if (results.length === 0) {
        toast.error('ERROR', {
          theme: 'colored',
        });
      }
      setMovies(prevState => [...prevState, ...results]);
      setLoading(false);
      setWait(false);
    });
  }, [query, page]);

  const getSearchQuery = searchQue => {
    setMovies([]);
    setWait(true);
    setPage(1);
    history.push({
      ...location,
      search: `query=${searchQue}`,
      // search: `query=${searchQue}`,
    });
  };
  const loadMore = () => {
    setLoading(true);
    setPage(prevState => prevState + 1);
  };
  const btn = !(movies.length < 20);
  return (
    <>
      <Searchbar onSubmit={getSearchQuery} />
      {wait && <SpinnerBig />}
      {movies && <MovieList movies={movies} />}
      {btn && (
        <ButtonLoadMore nextPage={loadMore} loading={loading}>
          <Spinner />
        </ButtonLoadMore>
      )}
    </>
  );
}
export default MoviesPage;
