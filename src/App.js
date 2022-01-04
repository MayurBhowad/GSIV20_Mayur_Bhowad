import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/layout/Navbar.component';
import MovieList from './components/home/MovieList.component';
import MovieInfo from './components/home/MovieInfo.component';
import { useEffect, useState } from 'react';
import { AllMovies } from './redux/actions/movie.actions';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  const [searchString, setSearchString] = useState('');

  useEffect(() => {
    dispatch(AllMovies())
  }, [searchString])

  return (

    <BrowserRouter>
      <Navbar searchString={searchString} setSearchString={setSearchString} />
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movie/:id" element={<MovieInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
