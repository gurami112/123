import { MovieCard } from "./MovieCard";

export function MovieList({ movies, onMovieClick, favorites, toggleFavorite }) {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onClick={onMovieClick}
          isFavorite={favorites.includes(movie.id)}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
}
