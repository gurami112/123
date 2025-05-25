import { useState, useRef } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { SearchBar } from "./components/SearchBar";
import { MovieList } from "./components/MovieList";
import { MovieDetails } from "./components/MovieDetails";
import { Footer } from './components/Footer';
import Login from "./pages/Login";
import Register from "./pages/Register";

import "./index.css";

const sampleMovies = [
  {
    id: 1,
    title: "Inception",
    posterUrl: "https://m.media-amazon.com/images/I/51zUbui+gbL._AC_SY679_.jpg",
    overview: "A thief enters the dreams of others to steal secrets and plant ideas.",
    rating: 8.8,
  },
  {
    id: 2,
    title: "Interstellar",
    posterUrl: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SY679_.jpg",
    overview: "Explorers travel through a wormhole in space to ensure humanity's survival.",
    rating: 8.6,
  },
  {
    id: 3,
    title: "The Dark Knight",
    posterUrl: "https://m.media-amazon.com/images/I/51zUbui+gbL._AC_.jpg",
    overview: "Batman faces off against the Joker to save Gotham City.",
    rating: 9.0,
  },
  {
    id: 4,
    title: "The Matrix",
    posterUrl: "https://m.media-amazon.com/images/I/51vpnbwFHrL._AC_.jpg",
    overview: "A hacker discovers reality is a simulation and joins a rebellion.",
    rating: 8.7,
  },
  {
    id: 5,
    title: "The Prestige",
    posterUrl: "https://m.media-amazon.com/images/I/81aA7hEEykL._AC_SY679_.jpg",
    overview: "Two rival magicians battle for supremacy in a game of deception and illusion.",
    rating: 8.5,
  },
];

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const favoritesRef = useRef(null);

  const filteredMovies = sampleMovies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFavorite = (movieId) => {
    if (favorites.includes(movieId)) {
      setFavorites(favorites.filter((id) => id !== movieId));
    } else {
      setFavorites([...favorites, movieId]);
      setTimeout(() => {
        favoritesRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <div className="app-container">
      <nav>
        <Link to="/">Home</Link> | <Link to="/login">Login</Link> |{" "}
        <Link to="/register">Register</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1>🎬 Movie Explorer</h1>

              <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                <Link to="/login">
                  <button className="auth-button">Login</button>
                </Link>
                <Link to="/register">
                  <button className="auth-button">Register</button>
                </Link>
              </div>

              <SearchBar value={searchQuery} onChange={setSearchQuery} />

              <h2>All Movies</h2>
              <MovieList
                movies={filteredMovies}
                onMovieClick={setSelectedMovie}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
              />

              {favorites.length > 0 && (
                <>
                  <h2 ref={favoritesRef}>⭐ Favorite Movies</h2>
                  <MovieList
                    movies={sampleMovies.filter((m) =>
                      favorites.includes(m.id)
                    )}
                    onMovieClick={setSelectedMovie}
                    favorites={favorites}
                    toggleFavorite={toggleFavorite}
                  />
                </>
              )}

              {selectedMovie && (
                <MovieDetails
                  movie={selectedMovie}
                  onClose={() => setSelectedMovie(null)}
                />
              )}
            </div>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}
