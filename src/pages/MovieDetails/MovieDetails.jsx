import { Outlet, useParams, useLocation } from "react-router-dom";
import { useState, useEffect, Suspense } from "react";
import { fetchMovieById } from "services/api";
import { Box } from "components/Box";
import BackLink from 'components/BackLink';
import { StyledLink, MovieInfo, ImageWrapper, Content, MovieName, MovieAddInfo, MovieAddList } from "./MovieDetails.styled";
import { IMG_PATH } from "constant/constant";
import Loader from "components/Loader/Loader";

const MovieDetails = () => {
    const location = useLocation();
    const backLink = location.state?.from ?? '/movies';
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        (async function getMovie() {
            try {
                const credits = await fetchMovieById(movieId);
                setMovie(credits);
            } catch (error) {
                console.log(error);
            }
        })();
    }, [movieId]);

    return (
        <>
            {movie && (
                <Box as="main" p="5">
                    <BackLink to={backLink}>Go back</BackLink>
                    <MovieInfo>
                        <ImageWrapper>
                            <img src={IMG_PATH + movie.poster_path} alt={movie.title}  />
                        </ImageWrapper>
                        <Content>
                            <MovieName>{movie.title}
                                <span> ({movie.release_date.slice(0, 4)})</span>
                            </MovieName>
                            <p> User score: {((movie.vote_average) * 100 / 10).toFixed(0)} %</p>
                            <h2>Overview</h2>
                            <p>{movie.overview}</p>
                            <h2>Genres</h2>
                            <p>{movie.genres.map(({ name }) => name).join(',')}</p>
                        </Content>
                        </MovieInfo>
                        <Box pb="5">
                            <MovieAddInfo>Additional information</MovieAddInfo>
                            <MovieAddList>
                                <li>
                                    <StyledLink to="cast" state={{ from: backLink }}>Cast</StyledLink>
                                </li>
                                <li>
                                    <StyledLink to="reviews" state={{ from: backLink }}>Reviews</StyledLink>
                                </li>
                            </MovieAddList>
                        </Box>
                    <Suspense fallback={<Loader />}>
                        <Outlet />
                    </Suspense>
                </Box>
            )}
        </>
    );
};

export default MovieDetails;