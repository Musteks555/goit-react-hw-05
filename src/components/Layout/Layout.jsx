import { NavLink } from "react-router-dom";

const Layout = ({ children }) => {
    return (
        <>
            <header>
                <NavLink to="/">Home</NavLink>

                <NavLink to="/movies">Movies</NavLink>
            </header>

            <main>{children}</main>
        </>
    );
};

export default Layout;
