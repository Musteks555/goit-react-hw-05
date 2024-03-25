import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getMovieReviews } from "../../service/api";

import Loader from "../Loader/Loader";

const MovieReviews = () => {
    const { movieId } = useParams();
    const [movieData, setMovieData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        getMovieReviews(movieId)
            .then((data) => {
                console.log(data);
                setMovieData(data);
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    }, [movieId]);

    return (
        <div>
            <ul>
                {movieData &&
                    movieData.results.map(({ id, author, content }) => {
                        return (
                            <li key={id}>
                                <p>Author: {author}</p>

                                <p>{content}</p>
                            </li>
                        );
                    })}
            </ul>
            {loading && <Loader />}
        </div>
    );
};

export default MovieReviews;
