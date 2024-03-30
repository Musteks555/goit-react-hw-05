import { Link, Outlet, Route, Routes } from "react-router-dom";
import { Suspense } from "react";

import transformPath from "../../service/createPath";

import Loader from "../Loader/Loader";
import MovieCast from "../MovieCast/MovieCast";
import MovieReviews from "../MovieReviews/MovieReviews";

const MovieDetailsItem = ({ poster_path, title, vote_average, overview, genres }) => {
    const defaultImg =
        "<https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg>";

    return (
        <div>
            <img src={poster_path ? transformPath(poster_path) : defaultImg} alt="poster" />

            <h2>{title}</h2>

            <p>Rating: {vote_average}</p>

            <h3>Overview</h3>

            <p>{overview}</p>

            <h3>Genres</h3>

            <ul>
                {genres.map(({ id, name }) => {
                    <li key={id}>
                        <p>{name}</p>
                    </li>;
                })}
            </ul>

            <p>Additional information</p>

            <ul>
                <li>
                    <Link to={"cast"}>
                        <p>Cast</p>
                    </Link>
                </li>

                <li>
                    <Link to={"reviews"}>
                        <p>Reviews</p>
                    </Link>
                </li>
            </ul>

            <Outlet />

            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path="cast" element={<MovieCast />} />
                    <Route path="reviews" element={<MovieReviews />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default MovieDetailsItem;
