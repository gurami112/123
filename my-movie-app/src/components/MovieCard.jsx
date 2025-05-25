export function MovieCard({ movie, onClick, isFavorite, toggleFavorite }) {
  return (
    <div className="movie-card">
      <img
        src={movie.posterUrl}
        alt={movie.title}
        onClick={() => onClick(movie)}
      />
      <div className="movie-info">
        <h2>{movie.title}</h2>
        <p>Rating: {movie.rating}</p>
        <button onClick={() => toggleFavorite(movie.id)}>
          {isFavorite ? "★ Favorite" : "☆ Add to Favorites"}
        </button>
      </div>
    </div>
  );
}
