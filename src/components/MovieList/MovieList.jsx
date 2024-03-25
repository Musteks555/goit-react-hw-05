import MovieItem from "../MovieItem/MovieItem";

const MovieList = ({ movies }) => {
    console.log(movies);
    return (
        <ul>
            {movies.map((movie) => {
                return <MovieItem key={movie.id} movie={movie} />;
            })}
        </ul>
    );
};

export default MovieList;
