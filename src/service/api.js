import axios from "axios";

const url = 'https://mock-api.driven.com.br/api/v4/cineflex';

const getMovie = () => {
    const promisse = axios.get(`${url}/movies`);
    return promisse;
}

export { getMovie }