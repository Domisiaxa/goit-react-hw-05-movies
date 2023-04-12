import { MovieList } from 'components/MovieList/MovieList';
import { getTrending } from 'services/api';
import { useEffect, useState } from 'react';
import styles from './Home.module.css';
import { Spinner } from 'components/Spinner/Spinner';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [trendingList, setTrendingList] = useState([]);

  const getTrendingList = async () => {
    setIsLoading(true);
    const movies = await getTrending();
    setTrendingList(movies.data.results);
    setIsLoading(false);
  };

  useEffect(() => {
    getTrendingList();
  }, []);
  return (
    <>
      <h2 className={styles.heading}>Trending Movies</h2>
      <MovieList list={trendingList} />
      {isLoading && <Spinner />}
    </>
  );
};

export default Home;
