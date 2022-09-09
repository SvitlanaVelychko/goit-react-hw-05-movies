import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from "./GlobalStyle";
import  SharedLayout from './SharedLayout';
import  Home  from 'pages/Home/Home';
import  Movies from 'pages/Movies/Movies';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='movies' element={<Movies />} />
          {/* <Route path='movies/:movieId' element={<MovieDetails />}>
            <Route path='cast' element={<Cast />} />
            <Route path='reviews' element={<Reviews />} />
          </Route>
          <Route path='*' element={<Error />} /> */}
        </Route>
      </Routes>
    </>
  );
};
