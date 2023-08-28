import { useEffect, useState } from "react";
import Movie from "../components/Movie.js";
import { Link } from "react-router-dom";
import styles from "../assets/Home.module.css";

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
          <nav className={styles.wrapper__nav}>
            <div className={styles.nav__logo}>
              <Link to="/">MOVIE</Link>
            </div>
            <ul className={styles.nav__menu}>
              {movieGenres.map((genre) => (
                <li key={genre}>{genre}</li>
              ))}
            </ul>
            <div className={styles.nav__user}>
              <span>LOGIN</span>
            </div>
          </nav>
          <section className={styles.wrapper__movies}>
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                year={movie.year}
                genres={movie.genres}
              />
            ))}
          </section>
        </div>
      )}
    </div>
  );
}

export default Home;
