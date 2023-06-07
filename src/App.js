import './App.css';
import Movie from './containers/Movie';
import Navbar from './Components/Navbar/Navbar'
import {
  Route, Routes,
} from "react-router-dom";
import Form from './Components/Form/Form';
function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<Movie />} />
          <Route path="/AddMovie" element={<Form />} />
          <Route path="/UpdateMovie/:id" element={<Form />} />
        </Routes>
    </>
  );
}

export default App;
