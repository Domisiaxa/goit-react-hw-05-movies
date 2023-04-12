import styles from './Cast.module.css';
import PropTypes from 'prop-types';

export const Cast = ({ cast, movieId }) => {
  return (
    <ul className={styles.list}>
      {cast.map((el, index) => (
        <li className={styles.box} key={`${movieId}r${index + 1}`}>
          {el.profile_path ? (
            <img
              className={styles.img}
              src={`https://image.tmdb.org/t/p/w500${el.profile_path}`}
              alt={`${el.name}`}
              width={150}
            />
          ) : (
            <img
              className={styles.img}
              src={
                'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
              }
              alt={`${el.name}`}
              width={150}
              height={225}
            />
          )}
          <h4 className={styles.name}>Name: {el.name}</h4>
          <p className={styles.role}>Character: {el.character}</p>
        </li>
      ))}
    </ul>
  );
};

Cast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      profile_path: PropTypes.string,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  movieId: PropTypes.string.isRequired,
};
