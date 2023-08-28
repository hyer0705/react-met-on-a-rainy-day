import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ coverImg, title, summary, genres }) {
  return (
    <div className="wrapper__movie">
      <img className="movie__img" src={coverImg} alt={title} />
      <Link to="/movie">
        <h3 className="movie__title">{title}</h3>
      </Link>
      <p className="movie__summary">{summary}</p>
      <ul className="movie__genres">
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.proTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
