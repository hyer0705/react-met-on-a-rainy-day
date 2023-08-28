function Movie({ coverImg, title, summary, genres }) {
  return (
    <div className="wrapper__movie">
      <img className="movie__img" src={coverImg} alt={title} />
      <h3 className="movie__title">{title}</h3>
      <p className="movie__summary">{summary}</p>
      <ul className="movie__genres">
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

export default Movie;
