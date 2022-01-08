import { useState, useEffect } from 'react';
import * as restApi from '../../RestApi';
import { useParams } from 'react-router-dom';
import style from './Reviews.module.scss';

const Reviews = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState(null);
  const [status, setStatus] = useState(false);
  useEffect(() => {
    restApi.fetchOnReviews(movieId).then(({ results }) => {
      if (results.length === 0) {
        setStatus(true);
      } else {
        setStatus(false);
        setReview(results);
      }
    });
  }, [movieId]);
  return (
    <>
      {status && <h2>We don't have any reviews for this movie.</h2>}
      {review && (
        <ul className={style.list}>
          {review.map(({ id, author, content }) => (
            <li key={id} className={style.item}>
              <h2 className={style.title}>Author: {author}</h2>
              <p className={style.about}>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default Reviews;
