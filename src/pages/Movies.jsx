import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import { getMovies } from 'components/services/api';
import ListMovies from 'components/ListMovies/ListMovies';
import { MovieList, MoviesInput, MoviesLabel, PagesStyle, SeachButton, SeachText, SeachtIcon } from './pages.styled';

const Movies = (onSubmit) => {
    const [movies, setMovies] = useState(null);
    const [query, setQuery] = useSearchParams();

    useEffect(() => {
        const strQuery = query.get('query');
        if (strQuery) getMovies(strQuery).then(setMovies);
        if (!strQuery) {
            setMovies(null);
            setQuery({});
        }
    }, [query, setQuery]);

    function handleSubmit(e) {
        e.preventDefault();
        if (e.currentTarget.elements.q.value === '') {
            alert('Please enter a word to search for')
        }
        setQuery({
            query: e.currentTarget.elements.q.value,
        });
        e.currentTarget.reset();
    }

    return (
        <PagesStyle>
            <form onSubmit={handleSubmit}>
                <MoviesLabel>
                    <MoviesInput name="q" type="text" placeholder="Search..." autoComplete= "off" />
                    <SeachButton type="submit"><SeachtIcon /></SeachButton>
                </MoviesLabel>
                {movies && movies.length === 0 && (
                    <SeachText>Nothing was found for this query.</SeachText>
                )}
                {movies?.length > 0 && (
                    <>
                        <MovieList>List movies</MovieList>
                        <ListMovies list={movies} />
                    </>
                )}
            </form>
        </PagesStyle>
    );
};

Movies.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object),
};

export default Movies;