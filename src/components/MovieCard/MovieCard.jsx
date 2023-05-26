import { useParams, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState, Suspense, useRef } from 'react';

import { getDetailsMovie } from 'components/services/api';
import { CardUl, MovieArticle, LinkMovies, MovieAbout, LeftIcon, CardMovieImg, СardMovieText, СardInfoMovie, MovieBack, MovieWraper, MovieInfo, MovieName } from './MoviesCard.styled';
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

    if (!details) {

        return <СardMovieText>Don't find this movies</СardMovieText>
    }

    return (
        <MovieWraper>
            <MovieBack>
                <LinkMovies to={comeBack.current}>
                    <LeftIcon />
                    Go back
                </LinkMovies>
            </MovieBack>
            <MovieArticle>
                <CardMovieImg width={200} height={300} src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM='} alt={name} />
                <div>
                    <MovieName>
                        {original_title}
                        <span> ({release_date.substring(0, 4)})</span>
                    </MovieName>
                    <MovieInfo>User Score: <MovieAbout>{userScore} </MovieAbout></MovieInfo>
                    <MovieInfo>Genres: <MovieAbout> {genres.map(({ name }) => name).join(', ')}</MovieAbout>
                    </MovieInfo>
                    <MovieInfo>Overview:</MovieInfo>
                    <p>{overview}</p>
                </div>
            </MovieArticle>
            <hr />
            <СardInfoMovie>Additional information:</СardInfoMovie>
            <CardUl>
                <li>
                    <LinkMovies to={'cast'}>Cast</LinkMovies>
                </li>
                <li>
                    <LinkMovies to={'reviews'}>Reviews</LinkMovies>
                </li>
            </CardUl>
            <hr />
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </MovieWraper>)
}

export default MovieCard;