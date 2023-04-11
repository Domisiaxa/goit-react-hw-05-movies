import axios from 'axios';
// import Notiflix from 'notiflix';

const API_KEY = '61d9cd9403fbf5a1ed0d2d0fb0f8e6d3';
const BASE_URL = 'https://api.themoviedb.org/3';

export async function fetchTrendingMovies() {
  try {
    const url = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`;

    const trendingData = await axios.get(url);

    return trendingData.data.results;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchSearchMovie(searchQuery) {
  if (searchQuery === '') return;
  try {
    const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}`;
    const searchingData = await axios.get(url);
    return searchingData.data.results;
  } catch (error) {
    console.log(error);
  }
}

export const fetchMoviesDetails = async id => {
  try {
    const url = `${BASE_URL}/movie/${id}?api_key=${API_KEY}`;

    const details = await axios.get(url);

    return details.data;
  } catch (error) {
    console.log(error);
  }
};

export async function fetchMoviesCredits(id) {
  try {
    const url = `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`;

    const details = await axios.get(url);

    return details.data;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchMoviesReviews(id) {
  try {
    const url = `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`;

    const details = await axios.get(url);

    return details.data;
  } catch (error) {
    console.log(error);
  }
}
