import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { getTrendsMovies } from '../components/services/api';
import ListMovies from 'components/ListMovies/ListMovies';
import { PagesStyle } from './pages.styled';

function Home() {
    const [trends, setTrends] = useState(null);

    useEffect(() => {
        getTrendsMovies().then(setTrends);
    }, []);

    return (
        <PagesStyle>
            <h2>Trading today</h2>
            {<ListMovies list={trends} />}
        </PagesStyle>
    );
}

Home.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object),
};

export default Home;