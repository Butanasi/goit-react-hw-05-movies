import { API_KEY } from './const';

async function fetchResponce(url) {
  const responce = await fetch(url);

  return responce.ok
    ? await responce.json()
    : Promise.reject(new Error('Not found'));
}

export function fetchOnHome() {
  return fetchResponce(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`,
  );
}
export function fetchOnHomePage(page) {
  return fetchResponce(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&page=${page}`,
  );
}

export function fetchOnMovies(searchQuery, page) {
  return fetchResponce(`
https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=${page}&include_adult=false`);
}

export function fetchOnMoviesDetail(movieId) {
  return fetchResponce(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US&page=1`,
  );
}
export function fetchOnCast(movieId) {
  return fetchResponce(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
  );
}

export function fetchOnReviews(movieId) {
  return fetchResponce(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
  );
}
