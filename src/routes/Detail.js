import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Point from "../components/Point";
import styles from "./Detail.module.css";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div className={styles.container}>
      {loading ? (
        <h1 className={styles.loader}>Loading...</h1>
      ) : (
        <div>
          <Point
            id={movie.id}
            background_image_original={movie.background_image_original}
            title={movie.title}
            description_full={movie.description_full}
            download_count={movie.download_count}
            coverImg={movie.large_cover_image}
            runtime={movie.runtime}
            rating={movie.rating}
            genres={movie.genres}
          />
        </div>
      )}
    </div>
  );
}

export default Detail;
