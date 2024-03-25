import { Link, useLocation } from "react-router-dom";
import transformPath from "../../service/createPath";

const MovieItem = ({ movie }) => {
    const location = useLocation();

    return (
        <li>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                <p>{movie.title}</p>

                <img src={transformPath(movie.poster_path)} alt={movie.title} />
            </Link>
        </li>
    );
};

export default MovieItem;
