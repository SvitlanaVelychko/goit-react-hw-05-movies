import { Box } from 'components/Box';
import MovieCard  from 'components/MovieCard';
import { MovieList, MovieItem, Card } from './MoviesGallery.styled';

const MoviesGallery = ({ movies }) => {
    return (
        <Box as="container">
            <MovieList>
                {movies.map(movie => (
                    <MovieItem key={movie.id}>
                        <Card to={`movie/${movie.id}`}>
                            <MovieCard movie={movie} />
                        </Card>
                    </MovieItem>
                ))}
            </MovieList>
        </Box>
    );
};

export default MoviesGallery;