import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import { getMovies } from 'components/services/api';
import ListMovies from 'components/ListMovies/ListMovies';
import { MoviesInput, PagesStyle, SeachButton, SeachText, SeachtIcon } from './pages.styled';

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

    function onSearch(e) {
        e.preventDefault();
        if (e.currentTarget.elements.q.value === ''){
            alert ('Please enter a word to search for')
        }
        setQuery({
            query: e.currentTarget.elements.q.value,
        });
        e.currentTarget.reset();
    }

    return (
        <PagesStyle>
            <form onSubmit={onSearch}>
                <label>
                    <MoviesInput name="q" type="text" />
                </label>
                <SeachButton type="submit"><SeachtIcon /></SeachButton>
                {movies && movies.length === 0 && (
                    <SeachText>Nothing was found for this query.</SeachText>
                )}
                {movies?.length > 0 && (
                    <>
                        <h2>List movies</h2>
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