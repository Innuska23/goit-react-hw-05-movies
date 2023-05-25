import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import { getMovies } from 'components/services/api';
import ListMovies from 'components/ListMovies/ListMovies';
import { MoviesInput, PagesStyle, SeachButton, SeachtIcon } from './pages.styled';

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