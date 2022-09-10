import axios from "axios";

const API_KEY = '08f616fe2f268b4dbcc5ac680fac4838';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchTrendingMovies = async () => {
    try {
        const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
        return response.data.results;
    } catch (error) {
        console.log(error);
    }
};

export const fetchSearchMovies = async query => {
    try {
        const response = await axios.get('search/movie', {
            params: {
                api_key: API_KEY,
                query: query,
                language: 'en - US',
                page: 1,
                include_adult: false,
            },
        });
        return response.data.results;
    } catch (error) {
        console.log(error);
    }
};

export const fetchMovieById = async movieId => {
    try {
        const response = await axios.get(`movie/${movieId}?api_key=${API_KEY}&language=en-US`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const fetchMovieCast = async movieId => {
    try {
        const response = await axios.get(`movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`);
        return response.data.cast;
    } catch (error) {
        console.log(error);
    }
};

export const fetchMovieReviews = async movieId => {
    try {
        const response = await axios.get(`movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`);
        return response.data.results;
    } catch (error) {
        console.log(error);
    }
};

