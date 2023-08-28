import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const res = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
      )
    ).json();

    setMovies(res.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <div className="wrapper__movies">
          {movies.map((movie) => (
            <div key={movie.id} className="wrapper__movie">
              <img
                className="movie__img"
                src={movie.medium_cover_image}
                alt={movie.title}
              />
              <h3 className="movie__title">{movie.title}</h3>
              <p className="movie__summary">{movie.summary}</p>
              <ul className="movie__genres">
                {movie.genres.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
