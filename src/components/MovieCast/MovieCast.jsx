import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getMovieActors } from "../../service/api";
import transformPath from "../../service/createPath";

import Loader from "../Loader/Loader";
import toast, { Toaster } from "react-hot-toast";

const MovieCast = () => {
    const { movieId } = useParams();
    const [movieData, setMovieData] = useState(null);
    const [loading, setLoading] = useState(false);

    const defaultImg =
        "<https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg>";

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
                                <img src={profile_path ? transformPath(profile_path) : defaultImg} alt="profile" width={150} />

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
