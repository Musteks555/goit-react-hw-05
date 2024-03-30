import MovieItem from "../MovieItem/MovieItem";

const MovieList = ({ movies }) => {
    return (
        <ul>
            {movies.map((movie) => {
                return <MovieItem movie={movie} key={movie.id} />;
            })}
        </ul>
    );
};

export default MovieList;
