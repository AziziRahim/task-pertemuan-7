import { useState } from "react";
import styles from "./AddMovieForm.module.css";

function AddMovieForm(props) {
  const { movies, setMovies } = props;

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [poster, setPoster] = useState("");
  const [type, setType] = useState("");

  //state error
  const [isTitleError, setIsTitleError] = useState(false);
  const [isDateError, setIsDateError] = useState(false);
  const [isPosterError, setIsPosterError] = useState(false);
  const [isTypeError, setIsTypeError] = useState(false);

  function handleTitle(event) {
    setTitle(event.target.value);
  }

  function handleDate(event) {
    setDate(event.target.value);
  }

  function handlePoster(event) {
    setPoster(event.target.value);
  }

  function handleType(event) {
    setType(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (title === "") {
      setIsTitleError(true);
    } else if (date === "") {
      setIsDateError(true);
    } else if (poster === "") {
      setIsPosterError(true);
    } else if (type === "") {
      setIsTypeError(true);
    } else {
      const movie = {
        title: title,
        year: date,
        type: "Movie",
        poster: "https//picsum.photos/300/400",
      };

      setIsTitleError(false);
      setIsDateError(false);
      setIsPosterError(false);
      setIsTypeError(false);

      setMovies([...movies, movie]);
    }
  }

  return (
    <div className={styles.container}>
      <section className={styles.addmovieform}>
        <div className={styles.addmovieform__left}>
          <img
            className={styles.addmovieform__image}
            src="https://picsum.photos/550/400"
            alt=""
          />
        </div>
        <div className={styles.addmovieform__right}>
          <form
            className={styles.addmovieform__form}
            action="#"
            onSubmit={handleSubmit}
          >
            <h2 className={styles.addmovieform__top}>Add Movie</h2>
            <label className={styles.addmovieform__title} for="Title">
              Title
            </label>
            <br />
            <input
              className={styles.addmovieform__boxtitle}
              type="text"
              id="title"
              name="title"
              onChange={handleTitle}
            />{" "}
            {isTitleError && <p>Title Wajib Diisi</p>}
            <br />
            <label className={styles.addmovieform__date} for="Date">
              Date
            </label>
            <br />
            <input
              className={styles.addmovieform__boxdate}
              type="text"
              id="Date"
              name="Date"
              onChange={handleDate}
            />{" "}
            {isDateError && <p>Date Wajib Diisi</p>}
            <br />
            <br />
            <label className={styles.link__gambar} for="Poster">
              Poster
            </label>
            <br />
            <input
              className={styles.form__gambar}
              type="url"
              value={poster}
              onChange={handlePoster}
            />{" "}
            {isPosterError && <p>Poster Wajib Diisi</p>}
            <br />
            <br />
            <label className={styles.form__genre} for="Genre">
              Genre
            </label>
            <select
              className={styles.form__select}
              value={type}
              onChange={handleType}
            >
              <option value="action">Action</option>
              <option value="horror">Horror</option>
              <option value="comedy">Comedy</option>
              <option value="thriller">Thriller</option>
              <option value="adventure">Adventure</option>
              <option value="romance">Romance</option>
            </select>{" "}
            {isTypeError && <p>Type Wajib Diisi</p>}
            <br />
            <button className={styles.addmovieform__button}>Add Movie</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default AddMovieForm;
