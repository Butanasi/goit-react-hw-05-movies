import PropTypes from 'prop-types';
import { lazy, Suspense } from 'react';
import { NavLink, Route, Switch, useRouteMatch } from 'react-router-dom';
import style from './Navigation.module.scss';
import { SpinnerBig } from '../Loader/SpinnerBig';

const Cast = lazy(() => import('../Cast' /*webpackChunkName: "Cast" */));
const Reviews = lazy(() =>
  import('../Reviews' /*webpackChunkName: "Reviews" */),
);

export const Navigation = movieId => {
  const { url, path } = useRouteMatch();
  return (
    <>
      <ul className={style.list}>
        <li className={style.item}>
          <NavLink
            activeClassName={style.selected}
            className={style.link}
            exact
            to={`${url}/cast`}
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName={style.selected}
            className={style.link}
            to={`${url}/reviews`}
          >
            Reviews
          </NavLink>
        </li>
      </ul>
      <Suspense fallback={<SpinnerBig />}>
        <Switch>
          <Route exact path={`${path}/cast`}>
            <Cast idMovie={movieId} />
          </Route>
          <Route path={`${path}/reviews`}>
            <Reviews idMovie={movieId} />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
};
Navigation.propTypes = {
  movieId: PropTypes.string.isRequired,
};
