import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'services/api';
import { Box } from 'components/Box';
import MoviesGallery from 'components/MoviesGallery';
import { Title } from './Home.styled';

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        (async function getMovies() {
            try {
                const data = await fetchTrendingMovies();
                setMovies(data);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    return (
        <Box as="main">
            <Title>Trending today</Title>
            <MoviesGallery movies={movies} />
        </Box>
    );
};

export default Home;