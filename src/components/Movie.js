import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div className="wrapper__movie">
      <img className="movie__img" src={coverImg} alt={title} />

      <h3 className="movie__title">
        <Link to={`/movie/${id}`}>{title}</Link>
      </h3>
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
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
