import { useParams, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState, Suspense, useRef } from 'react';

import { getDetailsMovie } from 'components/services/api';
import { CardUl, MovieArticle, LinkMovies, MovieAbout } from './MoviesCard.styled';
import Loader from 'components/Loader/Loader';

const MovieCard = () => {
    const [details, setDetails] = useState(null);
    const {
        poster_path = '',
        original_title = '',
        name = '',
        release_date = '',
        genres = '',
        overview = '',
        vote_average = '',
    } = details ?? {};

    const location = useLocation();
    const comeBack = useRef(location.state?.from || '/');

    const userScore = vote_average
    ? `${(vote_average * 10).toFixed(0)}%`
    : 'Not rated yet';

    const { id } = useParams();
    useEffect(() => {
        getDetailsMovie(id).then(setDetails);
    }, [id]);

    return !details ? (
        <p>Don't find this movies</p>
    ) : (
        
        <div>
            <p>
                <LinkMovies to={comeBack.current}>Go back</LinkMovies>
            </p>
            <MovieArticle className="card">
                <img width={200} height={300} src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM='} alt={name}/>
                <div className="subscribe">
                    <h2>
                        {original_title}
                        <span> ({release_date.substring(0, 4)})</span>
                    </h2>
                        <h3>User Score: <MovieAbout>{userScore} </MovieAbout></h3>
                        <h3>Genres: <MovieAbout> {genres.map(({ name }) => name).join(', ')}</MovieAbout>
                    </h3>
                    <h3>Overview:</h3>
                    <p>{overview}</p>
                </div>
            </MovieArticle>
            <hr />
            <p>Additional information:</p>
            <CardUl>
                <li>
                    <LinkMovies to={'cast'}>Cast</LinkMovies>
                </li>
                <li>
                    <LinkMovies to={'reviews'}>Reviews</LinkMovies>
                </li>
            </CardUl>
            <Suspense fallback={<Loader/>}>
                <Outlet />
            </Suspense>
        </div>
    );
}

export default MovieCard;