import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SearchBox from 'components/SearchBox';
import { Box } from 'components/Box';
import Loader from "components/Loader/Loader";
import { fetchSearchMovies } from "services/api";
import MoviesGallery from "components/MoviesGallery";

const Movies = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [status, setStatus] = useState('idle');
    const [searchParams, setSearchParams] = useSearchParams();
    const movieName = searchParams.get('query') ?? '';

    const updateQueryString = query => {
        const nextParams = query !== '' ? { query } : {};
        setSearchParams(nextParams);
    };

    useEffect(() => {
        if (movieName !== '') {
            async function getMovies() {
                try {
                    setStatus('pending');
                    const searchMovies = await fetchSearchMovies(movieName);
                    setMovies(searchMovies);
                    setStatus('resolved');
                } catch (error) {
                    setStatus('rejected');
                }
            }
            getMovies();
        }
    }, [movieName]);
    
    useEffect(() => {
        if (!query) {
            return;
        }
        async function getMovies() {
            try {
                setStatus('pending');
                const searchMovies = await fetchSearchMovies(movieName);
                setMovies(searchMovies);
                setStatus('resolved');
            } catch (error) {
                setStatus('rejected');
            }
        }
        getMovies();
    }, [movieName, query]);

    const FormSubmit = e => {
        e.preventDefault();

        const input = e.target.query.value;
        setQuery(input);
        updateQueryString(input);
        e.target.reset();
    };

    return (
        <Box as="main">
            <SearchBox onSubmit={FormSubmit} />
            {movies.length > 0 && <MoviesGallery movies={movies} />}
            {status === 'pending' && <Loader />}
        </Box>
    );
};

export default Movies;