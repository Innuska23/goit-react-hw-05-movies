import { Link, useLocation } from 'react-router-dom';
import { ContainerDetails, PagesStyle } from './pages.styled';
import MovieCard from 'components/MovieCard/MovieCard';


function MovieDetails() {
    const location = useLocation();
    return (
        <PagesStyle>
            <main>
                <ContainerDetails>
                    <Link to={location?.state?.from ?? '/'}>
                    </Link>
                    <MovieCard />
                </ContainerDetails>
            </main>
        </PagesStyle>
    );
};
export default MovieDetails;