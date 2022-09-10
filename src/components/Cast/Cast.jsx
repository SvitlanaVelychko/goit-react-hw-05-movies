import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/api';
import { IMG_PATH, PROFILE_IMG } from 'constant/constant';
import { Box } from 'components/Box';
import { CastList, CastItem, Image, CastInfo } from './Cast.styled';

const Cast = () => {
    const [cast, setCast] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        (async function getCast() {
            try {
                const castInfo = await fetchMovieCast(movieId);
                setCast(castInfo);
            } catch (error) {
                console.log(error);
            }
        })();
    }, [movieId]);

    return (
        <Box>
            <CastList>
                {cast.slice(0, 20).map(({ id, name, character, profile_path }) => {
                    return (
                        <CastItem key={id}>
                            <Image
                                src={profile_path ? IMG_PATH + profile_path : PROFILE_IMG}
                                alt={name} />
                            <CastInfo>{name}</CastInfo>
                            <CastInfo>Character: {character}</CastInfo>
                        </CastItem>
                    );
                })}
            </CastList>
        </Box>
    );
};

export default Cast;