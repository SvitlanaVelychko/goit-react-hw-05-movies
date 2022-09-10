import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/api';
import { Box } from 'components/Box';

const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        (async function getCast() {
            try {
                const reviewsInfo = await fetchMovieCast(movieId);
                setReviews(reviewsInfo);
            } catch (error) {
                console.log(error);
            }
        })();
    }, [movieId]);

    return (
        <Box>
            {!reviews.lenth > 0 ? (<p>No reviews</p>) :
                (<ul>
                    {reviews.map(({ id, author, author_details: {rating}, content, created_at }) => (
                        <li key={id}>
                            <p>Author: {author}</p>
                            <p>Rating: {rating ? rating : 'No rating'}</p>
                            <p>Content: {content}</p>
                            <p>Created at: {new Date(created_at).toLocaleDateString('en-US')}</p>
                        </li>
                    ))}
                </ul>)}
        </Box>
    );
};

export default Reviews;