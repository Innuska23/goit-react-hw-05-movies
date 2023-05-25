import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import { getCreditsMovie } from 'components/services/api';
import { CastInfo, CastLi, CastText, CastUl, CastWraper } from './Cast.styled';

function Cast() {
    const { id } = useParams();
    const [casts, setCasts] = useState(null);
    useEffect(() => {
        getCreditsMovie(id)?.then(setCasts);
    }, [id]);

    return (
        { casts } && (
            <CastWraper>
                <CastUl>
                    {casts?.length === 0 ? (
                        <p>We don't have any casts for this movies</p>
                    ) : (
                        casts?.map(({ profile_path, name, character, cast_id }) => {
                            return (
                                <CastLi className="thumb-cast" key={cast_id}>
                                    <img width={200} height={300} src={profile_path ? `https://image.tmdb.org/t/p/w500/${profile_path}` : 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM='} alt={name} />
                                    <br />
                                    <CastInfo>
                                        <CastText>Character: {character || 'none'}</CastText>
                                        <CastText>Name: {name || 'none'}</CastText>
                                    </CastInfo>
                                </CastLi>
                            )
                        })
                    )}
                </CastUl>
            </CastWraper>
        )
    );
}

Cast.propTypes = {
    width: PropTypes.number,
    url: PropTypes.string,
    name: PropTypes.string,
};

export default Cast;