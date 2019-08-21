import axios from 'axios';

const BASE_URL = "https://yts.lt/api/v2/";
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`;
const MOVIE_DETAIL_URL = `${BASE_URL}movie_details.json`;
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}movie_suggestions.json`;

export const getMovies = async (limit: number, minimum_rating: number) => {
    const {
        data: {
            data: { movies }
        }
    } = await axios(LIST_MOVIES_URL, {
        params: {
            limit,
            minimum_rating
        }
    });
    return movies
};

export const getMovie = async (movie_id: number) => {
    const {
        data: {
            data: { movie }
        }
    } = await axios(MOVIE_DETAIL_URL, {
        params: {
            movie_id
        }
    });
    return movie
}




export const getSuggestions = async (movie_id: number) => {
    const {
        data: {
            data: { movies }
        }
    } = await axios(MOVIE_SUGGESTIONS_URL, {
        params: {
            movie_id
        }
    });
    return movies
}











