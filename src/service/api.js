import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const options = {
    headers: {
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMDhhMzgxMjhiZjNkMmUwN2Y2YjZhZDk4NjM4OTQ3ZSIsInN1YiI6IjY1ZmVkNDA2N2Y2YzhkMDE0OTZkMDg4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uLybgVO_nqvOGdSVbPz8cWoXik6ueVzqSu5apqGPKoA",
    },
};

const params = "include_adult=false&language=en-US";

export const getMovies = async () => {
    try {
        const { data } = await axios.get(`/trending/movie/day?${params}`, options);

        return data;
    } catch (error) {
        console.log(error);
    }
};

export const getMovieById = async (movieId) => {
    try {
        const { data } = await axios.get(`/movie/${movieId}?${params}`, options);

        return data;
    } catch (error) {
        console.log(error);
    }
};

export const getMovieByName = async (movieName) => {
    try {
        const { data } = await axios.get(`/search/movie?query=${movieName}&${params}`, options);

        return data;
    } catch (error) {
        console.log(error);
    }
};

export const getMovieActors = async (movieId) => {
    try {
        const { data } = await axios.get(`/movie/${movieId}/credits?${params}`, options);

        return data;
    } catch (error) {
        console.log(error);
    }
};

export const getMovieReviews = async (movieId) => {
    try {
        const { data } = await axios.get(`/movie/${movieId}/reviews?${params}`, options);

        return data;
    } catch (error) {
        console.log(error);
    }
};
