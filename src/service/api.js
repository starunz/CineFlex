import axios from "axios";

const url = 'https://mock-api.driven.com.br/api/v4/cineflex';

const getMovie = () => {
    const promisse = axios.get(`${url}/movies`);
    return promisse;
}

const getShowtimes = (movieId) => {
    const promise = axios.get(`${url}/movies/${movieId}/showtimes`)
    return promise;
}

const getSeats = (showtimeId) => {
    const promise = axios.get(`${url}/showtimes/${showtimeId}/seats`)
    return promise;
}
export { getMovie, getShowtimes, getSeats }