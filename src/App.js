import './App.css';
import Movie from './Components/Movie/Movie';
import Navbar from './Components/Navbar/Navbar'
import {
  Route, Routes,
} from "react-router-dom";
import AddMovie from './Components/AddMovie/AddMovie';
import MovieState from './Components/Context/MovieState';
function App() {
  return (
    <>
      <Navbar />
      <MovieState>
        <Routes>
          <Route path="/" element={<Movie />} />
          <Route path="/AddMovie" element={<AddMovie />} />
        </Routes>
      </MovieState>
    </>
  );
}

export default App;
