import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import { getMovieActors } from "../../service/api";
import transformPath from "../../service/createPath";

import Loader from "../Loader/Loader";
import DefaultImg from "../DefaultImg/DefaultImg";

const MovieCast = () => {
    const { movieId } = useParams();
    const [movieData, setMovieData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        getMovieActors(movieId)
            .then((data) => {
                if (data.cast.length) {
                    setMovieData(data.cast);
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
                    movieData.map(({ id, profile_path, name }) => {
                        return (
                            <li key={id}>
                                {profile_path ? <img src={transformPath(profile_path)} alt="profile" width={150} /> : <DefaultImg />}

                                <p>{name}</p>
                            </li>
                        );
                    })}
            </ul>

            {loading && <Loader />}
            <Toaster position="top-right" reverseOrder={false} />
        </div>
    );
};

export default MovieCast;
