import { ListItem } from 'components/ListItem/ListItem';
import styles from './MovieList.module.css';
import PropTypes from 'prop-types';

export const MovieList = ({ list }) => {
  return (
    <>
      <ul className={styles.list}>
        <p className={styles.heading}>🎬</p>
        {list.map(el => {
          return <ListItem key={el.id} id={el.id} title={el.title} />;
        })}
      </ul>
    </>
  );
};

MovieList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
