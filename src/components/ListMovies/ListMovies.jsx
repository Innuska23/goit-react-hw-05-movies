import { Link, useLocation } from 'react-router-dom';
import { ListOfMovies, ListLi, ListWraper } from './ListMovies.styled';

function ListMovies({ list }) {
    const location = useLocation();
    return (
        <ListWraper>
            <ListOfMovies>
                {list &&
                    list.map(({ title, name, id }) => (
                        <ListLi key={id}>
                            <Link to={'/movies/' + id} state={{ from: location }}>
                                {title || name}
                            </Link>
                        </ListLi>
                    ))}
            </ListOfMovies>
        </ListWraper>
    );
}

export default ListMovies;