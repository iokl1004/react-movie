import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import styles from "./Detail.module.css";
import Loading from "../components/Loading";

function Detail() {
    const [moviedata, setMoviedata] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMoviedata(json.data.movie);
        setLoading(false);
    };

    useEffect(() => {
        getMovie();
    }, []);

    return (
        <div>
            {loading ? (
                <Loading />
            ) : (
                <div>
                    <img className={styles.bg} src={moviedata.background_image_original} />
                    <div className={styles.show}>
                        <img className={styles.img} src={moviedata.medium_cover_image} />
                        <div className={styles.textbox}>
                            <h1 className={styles.title}><a target="_blank" href={moviedata.url} className={styles.title} >{moviedata.title_long}</a> </h1>
                            <ul>
                                <li>별점 : {moviedata.rating} / 10</li>
                                <li>상영시간  : {moviedata.runtime}분</li>
                                <li>다운로드 횟수  : {moviedata.download_count}</li>
                                <li>장르
                                    <ul>
                                        {moviedata.genres && moviedata.genres.map((g) => (
                                            <li key={g}>{g}</li>
                                        ))}
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            )}
        </div>

    );
}
export default Detail;