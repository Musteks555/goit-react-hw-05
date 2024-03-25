import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import { getMovieById } from "../service/api";

import Loader from "../components/Loader/Loader";
import MovieDetalsItem from "../components/MovieDetailsItem/MovieDetailsItem";
import GoBackBtn from "../components/GoBackBtn/GoBackBtn";

const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const [movieData, setMovieData] = useState(null);
    const [loading, setLoading] = useState(false);

    const location = useLocation();
    const goBackLink = location.state?.from ?? "/";

    useEffect(() => {
        setLoading(true);

        getMovieById(movieId)
            .then((data) => {
                setMovieData(data);
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    }, [movieId]);

    return (
        <div>
            <GoBackBtn to={goBackLink} />
            {movieData && <MovieDetalsItem {...movieData} />}

            {loading && <Loader />}
        </div>
    );
};

export default MovieDetailsPage;
