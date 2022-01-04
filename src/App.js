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

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movie" element={<MovieInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
