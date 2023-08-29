import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar.js";
import styles from "../assets/Detail.module.css";
import { AiFillStar, AiFillHeart } from "react-icons/ai";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);

  const getMovie = async () => {
    const res = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();

    setMovie(res.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {/* NavBar Component는 App에서 사용해도 되지 않을까? */}
      <NavBar />
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <section className={styles.wrapper_mdetail}>
          <div className={styles.wrapper__info}>
            <h2 className={styles.info__title}>{movie.title}</h2>
            <ul className={styles.info__genres}>
              {movie.genres.map((g, i, arr) => (
                <li key={g}>{i !== arr.length - 1 ? `${g},` : g}</li>
              ))}
            </ul>
            <div className={styles.wrapper__ratings}>
              <div className={styles.ratings__icon}>
                <div
                  className={styles.icon__background}
                  style={{ width: `${16 * 5}px` }}
                >
                  <AiFillStar color="D8D9DA" />
                  <AiFillStar color="D8D9DA" />
                  <AiFillStar color="D8D9DA" />
                  <AiFillStar color="D8D9DA" />
                  <AiFillStar color="D8D9DA" />
                </div>
                <div
                  className={styles.icon__star}
                  style={{ width: `${(movie.rating / 10) * (16 * 5)}px` }}
                >
                  <AiFillStar color="FFD93D" />
                  <AiFillStar color="FFD93D" />
                  <AiFillStar color="FFD93D" />
                  <AiFillStar color="FFD93D" />
                  <AiFillStar color="FFD93D" />
                </div>
              </div>
              <div
                className={styles.ratings__text}
              >{`Score: ${movie.rating}`}</div>
            </div>
            <p className={styles.info__description}>{movie.description_full}</p>
            <div className={styles.wrapper__btns}>
              <button className={styles.btns__watch}>Watch</button>
              <button className={styles.btns__like}>
                <AiFillHeart />
                Like
              </button>
            </div>
          </div>
          <div>
            <img src={movie.large_cover_image} alt={`${movie.title} 포스터`} />
          </div>
        </section>
      )}
    </div>
  );
}

export default Detail;
