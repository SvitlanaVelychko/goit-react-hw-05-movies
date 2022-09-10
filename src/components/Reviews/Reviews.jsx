import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/api';
import { Box } from 'components/Box';
import { ReviewList, ReviewItem } from './Reviews.styled';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        (async function getReviews() {
            try {
                const reviewsInfo = await fetchMovieReviews(movieId);
                setReviews(reviewsInfo);
            } catch (error) {
                console.log(error);
            }
        })();
    }, [movieId]);

    return (
        <Box>
            <ReviewList>
                {reviews.length > 0 ? (
                    reviews.map(({ id, author, author_details: { rating }, content, created_at }) => {
                        return (<ReviewItem key={id}>
                            <p><b>Author:</b> {author}</p>
                            <p><b>Rating:</b> {rating ? rating : 'No rating'}</p>
                            <p><b>Content:</b> {content}</p>
                            <p><b>Created at:</b> {new Date(created_at).toLocaleDateString('en-US')}</p>
                        </ReviewItem>
                        );
                    })) : (<b>There are no reviews at this movie</b>)}
            </ReviewList>
        </Box>
    );
};

export default Reviews;