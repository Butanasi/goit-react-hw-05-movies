import {
  BrowserRouter,
  Route,
  NavLink,
  Switch,
  Redirect,
} from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ROUTES } from './const';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import style from './App.module.css';
import { SpinnerBig } from './Components/Loader/SpinnerBig';

const HomePage = lazy(() =>
  import('./Views/HomePage' /*webpackChunkName: "HomePage" */),
);
const MoviesPage = lazy(() =>
  import('./Views/MoviesPage' /*webpackChunkName: "MoviesPage" */),
);
const MoviesDetail = lazy(() =>
  import('./Views/MovieDetail.js' /*webpackChunkName: "MoviesDetail" */),
);

function App() {
  return (
    <BrowserRouter>
      <header className={style.Header}>
        <nav>
          <NavLink
            exact
            to={ROUTES.HOME}
            className={style.NavLink}
            activeClassName={style.selected}
          >
            Home
          </NavLink>
          <NavLink
            to={ROUTES.MOVIES}
            className={style.NavLink}
            activeClassName={style.selected}
          >
            Movies
          </NavLink>
        </nav>
        <ToastContainer autoClose={3000} />
      </header>
      <Suspense fallback={<SpinnerBig />}>
        <Switch>
          <Route path={ROUTES.HOME} exact component={HomePage} />
          <Route path={ROUTES.MOVIES} exact component={MoviesPage} />
          <Route path={ROUTES.MOVIES_DETAIL} component={MoviesDetail} />
          <Redirect to={ROUTES.HOME} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
