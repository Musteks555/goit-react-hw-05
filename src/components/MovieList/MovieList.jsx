import { Link, useLocation } from "react-router-dom";
import MovieItem from "../MovieItem/MovieItem";

const MovieList = ({ movies }) => {
    const location = useLocation();

    return (
        <ul>
            {movies.map((movie) => {
                return (
                    <Link key={movie.id} to={`/movies/${movie.id}`} state={{ from: location }}>
                        <MovieItem movie={movie} />
                    </Link>
                );
            })}
        </ul>
    );
};

export default MovieList;
