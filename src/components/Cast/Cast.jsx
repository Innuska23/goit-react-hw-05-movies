import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import { getCreditsMovie } from 'components/services/api';

function Cast() {
    const { id } = useParams();
    const [casts, setCasts] = useState(null);
    useEffect(() => {
        getCreditsMovie(id)?.then(setCasts);
    }, [id]);

    return (
        { casts } && (
            <div>
                <ul>
                    {casts?.length === 0 ? (
                        <p>We don't have any casts for this movies</p>
                    ) : (
                        casts?.map(({ profile_path, name, character, cast_id }) => (
                            <li className="thumb-cast" key={cast_id}>
                                <p>Character: {character || 'none'}</p>
                                <p>Name: {name || 'none'}</p>
                                <img width={200} src={`https://image.tmdb.org/t/p/w500/${profile_path}`} alt={name}></img>
                                <br />
                            </li>
                        ))
                    )}
                </ul>
            </div>
        )
    );
}

Cast.propTypes = {
    width: PropTypes.number,
    url: PropTypes.string,
    name: PropTypes.string,
};

export default Cast;