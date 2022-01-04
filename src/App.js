import logo from './logo.svg';
import './App.css';
import Navbar from './components/layout/Navbar.component';
import MovieList from './components/home/MovieList.component';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MovieList />
    </div>
  );
}

export default App;
