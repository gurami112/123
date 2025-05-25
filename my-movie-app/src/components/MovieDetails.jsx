export function MovieDetails({ movie, onClose }) {
  return (
    <div className="movie-details-overlay">
      <div className="movie-details">
        <button className="close-button" onClick={onClose}>×</button>
        <img src={movie.posterUrl} alt={movie.title} />
        <h2>{movie.title}</h2>
        <p><strong>Rating:</strong> {movie.rating}</p>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
}
