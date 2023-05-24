import axios from 'axios';
import { BASE_URL, LANG, TOKEN } from './constans';


axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common['Authorization'] = `Bearer ${TOKEN}`;

export async function getTrendsMovies() {
    const response = await axios(`trending/all/day`);
    return response.data.results;
}

export async function getDetailsMovie(id) {
    const response = await axios(`movie/${id}`, {
        params:
        {
            language: LANG,
            page: 1,
        }
    });
    return response.data;
}

export async function getCreditsMovie(id) {
    const response = await axios(
        `movie/${id}/credits`, {
        params:
        {
            language: LANG,
        }
    }
    );
    return response.data.cast;
}

export async function getReviewMovie(id) {
    const response = await axios(
        `movie/${id}/reviews`, {
        params:
        {
            language: LANG,
            page: 1,
        }
    }
    );
    return response.data.results;
}

export async function getMovies(q) {
    const response = await axios(
        `search/keyword`, {
        params:
        {
            query: q,
            page: 1,
        }
    }
    );
    return response.data.results;
}
// -url 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1'
// 'https://api.themoviedb.org/3/search/keyword?query=batman&page=1