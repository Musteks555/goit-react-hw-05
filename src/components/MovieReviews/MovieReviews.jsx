import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getMovieReviews } from "../../service/api";

import Loader from "../Loader/Loader";
import toast, { Toaster } from "react-hot-toast";

const MovieReviews = () => {
    const { movieId } = useParams();
    const [movieData, setMovieData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        getMovieReviews(movieId)
            .then((data) => {
                if (data.results.length) {
                    setMovieData(data.results);
                } else {
                    throw new Error("Unfortunately, no results were found");
                }
            })
            .catch((err) => {
                toast.error("Unfortunately, no results were found.");
                console.log(err);
            })
            .finally(() => setLoading(false));
    }, [movieId]);

    return (
        <div>
            <ul>
                {movieData &&
                    movieData.map(({ id, author, content }) => {
                        return (
                            <li key={id}>
                                <p>Author: {author}</p>

                                <p>{content}</p>
                            </li>
                        );
                    })}
            </ul>
            {loading && <Loader />}

            <Toaster position="top-right" reverseOrder={false} />
        </div>
    );
};

export default MovieReviews;
