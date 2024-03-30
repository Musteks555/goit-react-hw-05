import { NavLink } from "react-router-dom";

const Navigation = ({ children }) => {
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

export default Navigation;
