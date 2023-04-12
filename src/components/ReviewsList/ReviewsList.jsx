import { ParsedHtml } from 'components/ParsedHtml/ParsedHtml';
import styles from './ReviewsList.module.css';
import PropTypes from 'prop-types';

export const ReviewsList = ({ reviews, movieId }) => {
  return (
    <ul className={styles.list}>
      {reviews.map((review, index) => (
        <li className={styles.item} key={`${movieId}r${index + 1}`}>
          <h4 className={styles.author}>{review.author}</h4>
          <div className={styles.review}>
            <ParsedHtml toParse={review.content} />
          </div>
        </li>
      ))}
    </ul>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  movieId: PropTypes.string.isRequired,
};
