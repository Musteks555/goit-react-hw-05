import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SearchForm from "../components/SearchForm/SearchForm";
import Loader from "../components/Loader/Loader";
import { getMovieByName } from "../service/api";
import MovieList from "../components/MovieList/MovieList";
import toast, { Toaster } from "react-hot-toast";

const MoviesPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    const onSubmit = (movie) => {
        setSearchParams({ query: movie });
    };

    useEffect(() => {
        const movieName = searchParams.get("query");

        if (!movieName) return;

        setLoading(true);

        getMovieByName(movieName)
            .then((movie) => setMovies(movie.results))
            .catch((err) => {
                toast.error("Unfortunately, no results were found.");
                console.log(err);
            })
            .finally(() => setLoading(false));
    }, [searchParams]);

    return (
        <div>
            <SearchForm onSubmit={onSubmit} />
            <MovieList movies={movies} />
            {loading && <Loader />}

            <Toaster position="top-right" reverseOrder={false} />
        </div>
    );
};

export default MoviesPage;
