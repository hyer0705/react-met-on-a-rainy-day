import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../assets/Home.module.css";
import Movie from "../components/Movie.js";
import NavBar from "../components/NavBar.js";

function Home() {
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
        <div>
          <NavBar />
          <section className={styles.wrapper__movies}>
            {movies.map((movie) => (
              <Link to={`/movie/${movie.id}`}>
                <Movie
                  key={movie.id}
                  id={movie.id}
                  coverImg={movie.medium_cover_image}
                  title={movie.title}
                  year={movie.year}
                  genres={movie.genres}
                />
              </Link>
            ))}
          </section>
        </div>
      )}
    </div>
  );
}

export default Home;
