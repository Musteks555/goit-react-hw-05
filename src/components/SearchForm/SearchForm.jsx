import { useState } from "react";

const SearchForm = ({ onSubmit }) => {
    const [movieId, setMovieId] = useState("");

    const handleChange = (event) => {
        setMovieId(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        onSubmit(movieId);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="query" placeholder="Search movies" onChange={handleChange} />

            <button type="submit">Search</button>
        </form>
    );
};

export default SearchForm;
