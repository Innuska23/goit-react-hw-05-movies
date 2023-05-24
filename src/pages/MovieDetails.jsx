import { Link, useLocation } from 'react-router-dom';
import {ContainerDetails } from './pages.styled';
import MovieCard from 'components/MovieCard/MovieCard';

function MovieDetails() {
    const location = useLocation();
    return (
        <main>
            <ContainerDetails>
                <Link to={location?.state?.from ?? '/'}>
                </Link>
                <MovieCard />
            </ContainerDetails>
        </main>
    );
};
export default MovieDetails;