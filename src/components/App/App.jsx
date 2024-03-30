import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import Navigation from "../Navigation/Navigation";
import Loader from "../Loader/Loader";

const HomePage = lazy(() => import("../../pages/HomePage"));
const MoviesPage = lazy(() => import("../../pages/MoviesPage"));
const MovieDetailsPage = lazy(() => import("../../pages/MovieDetailsPage"));
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage"));

function App() {
    return (
        <Navigation>
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/movies" element={<MoviesPage />} />
                    <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Suspense>
        </Navigation>
    );
}

export default App;
