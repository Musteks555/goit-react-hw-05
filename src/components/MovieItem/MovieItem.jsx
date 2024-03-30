import transformPath from "../../service/createPath";

const MovieItem = ({ movie }) => {
    return (
        <li>
            <p>{movie.title}</p>

            <img src={transformPath(movie.poster_path)} alt={movie.title} />
        </li>
    );
};

export default MovieItem;
