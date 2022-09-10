import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/api';
import { IMG_PATH, PROFILE_IMG } from 'constant/constant';
import { Box } from 'components/Box';

const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        (async function getCast() {
            try {
                const credits = await fetchMovieCast(movieId);
                setCast(credits.cast);
            } catch (error) {
                console.log(error);
            }
        })();
    }, [movieId]);

    return (
        <Box>
            {!cast.lenth > 0 ? (<p>No cast</p>) :
                (<ul>
                    {cast.map(({ id, name, character, profile_path }) => (
                        <li key={id}>
                            <img
                                src={profile_path ? IMG_PATH + profile_path : PROFILE_IMG}
                                alt={name} />
                            <p>{name}</p>
                            <p>Character: {character}</p>
                        </li>
                    ))}
                </ul>)}
        </Box>
    );
};

export default Cast;