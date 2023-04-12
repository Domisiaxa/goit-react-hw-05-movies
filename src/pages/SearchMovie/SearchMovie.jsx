import { MovieList } from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovie } from 'services/api';
import styles from './SearchMovie.module.css';
import { Spinner } from 'components/Spinner/Spinner';

const SearchMovie = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const query = searchParams.get('query');

  const handleSearch = e => {
    e.preventDefault();
    setSearchParams({ query: e.target[0].value });
    e.target.reset();
  };

  const handleSearchMovie = async query => {
    setIsLoading(true);
    const movieList = await searchMovie(query);
    setList(movieList.data.results);
    setIsLoading(false);
  };

  useEffect(() => {
    if (!query) return;
    handleSearchMovie(query);
  }, [query]);

  return (
    <>
      <form className={styles.form} onSubmit={handleSearch}>
        <input
          className={styles.input}
          type="text"
          name="Search"
          placeholder="Search movies..."
          autoComplete="off"
        ></input>
        <button className={styles.btn} type="submit">
          Search
        </button>
      </form>
      <MovieList list={list} />
      {isLoading && <Spinner />}
    </>
  );
};

export default SearchMovie;
