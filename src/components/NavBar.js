import { Link } from "react-router-dom";
import styles from "../assets/NavBar.module.css";

function NavBar() {
  const movieGenres = ["Popular", "Action", "Animation", "Family", "Sci-Fi"];
  return (
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
  );
}

export default NavBar;
