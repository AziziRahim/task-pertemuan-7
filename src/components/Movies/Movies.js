import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";
//import data movies

function Movies(props) {
  const { movies, setMovies } = props;

  function tambahFilm() {
    const movie = {
      id: "xyz",
      title: "Spiral Jigsaw",
      year: "2021",
      type: "Movie",
      poster: "https://picsum.photos/300/400",
    };

    setMovies([...movies, movie]);
  }

  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>Latest Movies</h2>
        <div className={styles.movie__container}>
          {/*
           * Looping data movies; map.
           * Render Component Movie
           * Kirim props movie
           */}
          {movies.map(function (movie) {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </div>
        <button onClick={tambahFilm}>Add Movie</button>
      </section>
    </div>
  );
}

export default Movies;
