import { Suspense } from "react";

import Layout from "../Layout/Layout";
import Loader from "../Loader/Loader";

function App() {
    return (
        <Layout>
            <Suspense fallback={<Loader />}></Suspense>
        </Layout>
    );
}

export default App;
