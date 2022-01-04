
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/layout/Navbar.component';
import MovieList from './components/home/MovieList.component';
import MovieInfo from './components/home/MovieInfo.component';
import { useEffect, useMemo, useState } from 'react';
import { AllMovies } from './redux/actions/movie.actions';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  const [searchString, setSearchString] = useState('');
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    dispatch(AllMovies(searchString, pageNumber))
  }, [searchString, pageNumber, dispatch])

  useMemo(() => setPageNumber(1), [searchString])

  return (

    <BrowserRouter>
      <Navbar searchString={searchString} setSearchString={setSearchString} />
      <Routes>
        <Route path="/" element={<MovieList setPageNumber={setPageNumber} />} />
        <Route path="/movie/:id" element={<MovieInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
