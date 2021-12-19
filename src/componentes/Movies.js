import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState ,useEffect } from "react";

export default function Movies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {

    }, []);

    return(
        <>
            <Title> Selecione o Filme </Title>
            <MoviesList>
                <Link to={``}>
                    <Movie>
                        <img scr='' alt=''/>
                    </Movie>
                </Link>
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
const Movie = styled.div`
    display: flex;
    background-color: #fff;
    padding: 8px;
    border-radius: 3px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    margin-bottom: 11px;

    img {
        width: 129px;
        height: 193px;
        object-fit: cover;
    }
`