import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div className={styles.movie}>
      <div className={styles.imgBox}>
        <img className={styles.img} src={coverImg} alt={title} />
      </div>
      <h2>
        <Link className={styles.title} to={`/movie/${id}`}>
          {title.length > 30 ? `${title.slice(0, 27)}...` : title}
        </Link>
      </h2>
      <p className={styles.summary}>
        {summary.length > 220 ? `${summary.slice(0, 220)}...` : summary}
      </p>
      <ul className={styles.genre}>
        {genres.map((genre) => (
          <li className={styles.genreItem} key={genre}>
            {genre}
          </li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
