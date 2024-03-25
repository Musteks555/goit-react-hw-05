import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "../Layout/Layout";
import Loader from "../Loader/Loader";

const HomePage = lazy(() => import("../../page/HomePage"));
const MoviesPage = lazy(() => import("../../page/MoviesPage"));
const MovieDetailsPage = lazy(() => import("../../page/MovieDetailsPage"));
const NotFoundPage = lazy(() => import("../../page/NotFoundPage"));

function App() {
    return (
        <Layout>
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/movies" element={<MoviesPage />} />
                    <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Suspense>
        </Layout>
    );
}

export default App;
