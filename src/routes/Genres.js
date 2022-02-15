import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Movie from "../components/Movie";
import Loading from "../components/Loading";
import styles from "./Genres.module.css";
import { Link } from "react-router-dom";
import { listPageReLoading, focusNav} from "../atom/Atoms";
import { useRecoilState, useSetRecoilState } from "recoil";

function Genres() {
    const { num, genres } = useParams();

    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [reloading, setReloading] = useRecoilState(listPageReLoading);
    const focusPage = useSetRecoilState(focusNav);

    const getMovies = async () => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/list_movies.json?page=${num}&${genres}&sort_by=year`
            )
        ).json();
        setMovies(json.data.movies);
        setLoading(false);
    };

    useEffect(() => {
        setReloading(false);
        setLoading(true);
        focusPage(genres);
    
        getMovies();
      }, [reloading]);

    return (
        <div className={styles.container}>
            {loading ? (
                <Loading />
            ) : (
                <div className={styles.movies}>
                    {movies.map((movie) => (
                        <Movie
                            key={movie.id}
                            id={movie.id}
                            year={movie.year}
                            coverImg={movie.medium_cover_image}
                            title={movie.title}
                            summary={movie.summary}
                            genres={movie.genres}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Genres;