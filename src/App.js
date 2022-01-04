import logo from './logo.svg';
import './App.css';
import Navbar from './components/layout/Navbar.component';
import MovieList from './components/home/MovieList.component';
import MovieInfo from './components/home/MovieInfo.component';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <MovieList /> */}
      <MovieInfo />
    </div>
  );
}

export default App;
