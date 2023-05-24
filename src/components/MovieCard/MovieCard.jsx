import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState, Suspense, useRef } from 'react';

import { getDetailsMovie } from 'components/services/api';

const MovieCard = () => {
    const [details, setDetails] = useState(null);
    const {
        poster_path = '',
        original_title = '',
        name = '',
        release_date = '',
        genres = '',
        overview = '',
    } = details ?? {};

    const location = useLocation();
    const comeBack = useRef(location.state?.from || '/');

    const { id } = useParams();
    useEffect(() => {
        getDetailsMovie(id).then(setDetails);
    }, [id]);

    return !details ? (
        <p>Don't find this movies</p>
    ) : (
        <div>
            <p>
                <Link to={comeBack.current}>Go back</Link>
            </p>
            <article className="card">
                <img width={200} src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={name}></img>
                <div className="subscribe">
                    <h2>
                        {original_title}
                        <span> ({release_date.substring(0, 4)})</span>
                    </h2>
                    <h3>
                        <span> {genres.map(({ name }) => name).join(', ')}</span>
                    </h3>
                    <h3>Overview:</h3>
                    <p>{overview}</p>
                </div>
            </article>
            <hr />
            <p>Additional information:</p>
            <ul>
                <li>
                    <Link to={'cast'}>Cast</Link>
                </li>
                <li>
                    <Link to={'reviews'}>Reviews</Link>
                </li>
            </ul>
            <Suspense>
                <Outlet />
            </Suspense>
        </div>
    );
}

export default MovieCard;