import { Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import './App.module.css'
// import Movies from "path/to/pages/Movies";
// import MovieDetails from "path/to/pages/MovieDetails";
// import Cast from "path/to/components/Cast/Cast";
// import Reviews from "path/to/components/Review/Review";

export const App = () => {
  return (
    <div>
    <nav>
      {/* <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
      <Link to="/movieDetails">MovieDetails</Link> */}
    </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/movies" element={<Movies />} />
        <Route path="/movieDetails/:id" element={<MovieDetails />}>
          <Route path="/cast" element={<Cast />} />
          <Route path="/reviews" element={<Reviews />} />
        </Route> */}
      </Routes>
    </div>
  );
};
