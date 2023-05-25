import { Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import './App.module.css'
import Layout from "./Layout/Layout";
import Movies from "pages/Movies";
import MovieDetails from "pages/MovieDetails";
import Reviews from "./Reviews/Reviews";
import Cast from "./Cast/Cast";


export const App = () => {
  return (
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route  index element={<Home/>} />
        <Route path="/movies" element={<Movies/>} />
        <Route path="/movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
