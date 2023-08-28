import PropTypes from "prop-types";
import styles from "../assets/Movie.module.css";
import { useState } from "react";

function Movie({ coverImg, title, year, genres }) {
  const [isError, setIsError] = useState(false);
  const onError = () => {
    setIsError(true);
  };

  return (
    <article className={`${styles.wrapper__movie} ${styles.item}`}>
      <div className={styles.movie__imgbox}>
        <img
          className={styles.movie__img}
          src={
            isError
              ? "https://placehold.co/230x345?text=movie-poster"
              : coverImg
          }
          onError={onError}
          alt={"영화 " + title + " 포스터"}
        />
      </div>
      <div className={styles.movie__info}>
        <h3 className={styles.movie__title} title={title}>
          {title.length > 20 ? title.slice(0, 20) + "..." : title}
        </h3>
        <h4 className={styles.movie__year}>{year}</h4>
        <ul className={styles.movie__genres}>
          {genres.slice(0, 3).map((g, idx, arr) => (
            <li key={g}>{idx !== arr.length - 1 ? `${g}, ` : g}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

Movie.proTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
