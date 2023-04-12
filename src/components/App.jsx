import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import { SharedLayout } from '../pages/SharedLayout/SharedLayout';
import NotFound from 'pages/NotFound/NotFound';

const Home = lazy(() => import('../pages/Home/Home'));
const SearchMovie = lazy(() => import('../pages/SearchMovie/SearchMovie'));
const MoviePage = lazy(() => import('../pages/MoviePage/MoviePage'));
const Credits = lazy(() => import('../pages/Credits/Credits'));
const Reviews = lazy(() => import('../pages/Review/Reviews'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<SearchMovie />} />
          <Route path="/movies/:movieId" element={<MoviePage />}>
            <Route path="cast" element={<Credits />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
