import { Link, useLocation } from 'react-router-dom';
import { ListOfMovies, ListLi } from './ListMovies.styled';

function ListMovies({ list }) {
    const location = useLocation();
    return (
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
    );
}

export default ListMovies;