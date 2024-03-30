import { Link, Outlet, Route, Routes } from "react-router-dom";
import { Suspense } from "react";

import transformPath from "../../service/createPath";

import Loader from "../Loader/Loader";
import MovieCast from "../MovieCast/MovieCast";
import MovieReviews from "../MovieReviews/MovieReviews";
import DefaultImg from "../DefaultImg/DefaultImg";

const MovieDetailsItem = ({ poster_path, title, vote_average, overview, genres }) => {
    return (
        <div>
            {poster_path ? <img src={transformPath(poster_path)} alt="poster" width={150} /> : <DefaultImg />}

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
