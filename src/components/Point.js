import styles from "./Point.module.css";

function Point({
  id,
  background_image_original,
  title,
  description_full,
  download_count,
  coverImg,
  runtime,
  rating,
  genres,
}) {
  return (
    <div>
      <img className={styles.bg} src={background_image_original} />
      <div className={styles.show}>
        <img className={styles.img} src={coverImg} alt={id} />
        <div className={styles.textbox}>
          <h1 className={styles.title}>{title}</h1>
          <ul>
            Genres
            <li>
              {genres.map((genre) => (
                <li>{genre}</li>
              ))}
            </li>
          </ul>
          <hr />
          <h3 className={styles.desc}>{description_full}</h3>
          <ul>
            <li>⏱Running time {runtime} min</li>
            <li>💙Rating {rating}</li>
            <li>👁‍🗨Download {download_count}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Point;
