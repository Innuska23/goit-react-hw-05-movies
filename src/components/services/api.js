import axios from 'axios';
import { BASE_URL, API_KEY, LANG } from './constans';

export async function getTrendsMovies() {
    const response = await axios(
        `${BASE_URL}trending/all/day?api_key=${API_KEY}`
    );
    return response.data.results;
}

export async function getDetailsMovie(id) {
    const response = await axios(
        `${BASE_URL}movie/${id}${API_KEY}${LANG}`);
    return response.data;
}

export async function getCreditsMovie(id) {
    const response = await axios(
        `${BASE_URL}movie/${id}/credits${API_KEY}${LANG}`
        );
    return response.data.cast;
}

export async function getReviewMovie(id) {
    const response = await axios(
        `${BASE_URL}movie/${id}/reviews${API_KEY}${LANG}`
        );
    return response.data.results;
}

export async function getMovies(q) {
    const response = await axios(
        `${BASE_URL}search/keyword`, {params:
        {
            api_key: API_KEY,
            query: q,
            page: 1,
        }}
    );    
    return response.data.results;
    }
// -url 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1'
// 'https://api.themoviedb.org/3/search/keyword?query=batman&page=1