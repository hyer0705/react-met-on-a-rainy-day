import { useEffect, useState } from "react";
import Movie from "../components/Movie.js";
import { Link } from "react-router-dom";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const movieGenres = ["Popular", "Action", "Animation", "Family", "Sci-Fi"];

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
        <div className="">
          <nav className="wrapper__nav">
            <div className="nav__logo">
              <Link to="/">MOVIE</Link>
            </div>
            <ul className="nav__menu">
              {movieGenres.map((genre) => (
                <li key="genre">{genre}</li>
              ))}
            </ul>
            <div className="nav__user">
              <span>LOGIN</span>
            </div>
          </nav>
          <div className="wrapper__movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
