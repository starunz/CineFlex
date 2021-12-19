import styled from "styled-components";
import { useState ,useEffect } from "react";
import { getMovie } from "../service/api";
import Movie from "./Movie";

export default function Movies() {
    const [movies, setMovies] = useState([]);
    console.log(movies)
    useEffect(() => {
        getMovie()
        .then(response => setMovies(response.data));
    }, []);

    return(
        <>
            <Title> Selecione o Filme </Title>
            <MoviesList>
                {
                    movies.map( (movie) => <Movie key={movie.id} movie={movie} />)
                }
            </MoviesList>
        </>
    );
}

const Title = styled.div`
    width: 100%;
    height: 110px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;

    color: #293845;
`
const MoviesList = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    cursor: pointer;
`
