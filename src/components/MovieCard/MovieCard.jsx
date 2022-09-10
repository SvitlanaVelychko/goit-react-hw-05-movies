import PropTypes from 'prop-types';
import { IMG_PATH, DEFAULT_IMG } from 'constant/constant';
import { MovieCardImage, MovieCardContent, MovieCardTitle, MovieRating } from "./MovieCard.styled";

const MovieCard = ({ movie: { title, poster_path, vote_average: rating } }) => {
    return (
        <>
            <MovieCardImage
                src={poster_path? IMG_PATH+poster_path: DEFAULT_IMG}
                alt={title} />
            <MovieCardContent>
                <MovieCardTitle>{title}</MovieCardTitle>
                <p> Rating:
                    <MovieRating> {rating.toFixed(2)}</MovieRating>
                </p>
            </MovieCardContent>
        </>
    );
};

MovieCard.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
        poster_path: PropTypes.string,
        vote_average: PropTypes.number,
    }).isRequired,
};

export default MovieCard;