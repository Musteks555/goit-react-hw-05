import { useEffect, useState } from "react";

import { getMovies } from "../service/api";

import Loader from "../components/Loader/Loader";
import MovieList from "../components/MovieList/MovieList";

const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        getMovies()
            .then((movie) => {
                setMovies(movie.results);
            })
            .catch((err) => console.log(err))
            .finally(setLoading(false));
    }, []);

    return (
        <div>
            <h1>Trending today</h1>

            <MovieList movies={movies} />

            {loading && <Loader />}
        </div>
    );
};

export default HomePage;
