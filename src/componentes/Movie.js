import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Movie({movie}) {
    return(
        <Link to={`/sessoes/${movie.id}`}>
            <Movies>
                <img src={movie.posterURL} alt='movie'/>
            </Movies>
        </Link>
    );
}

const Movies = styled.div`
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    background-color: #fff;

    margin-bottom: 11px;
    padding: 8px;
    border-radius: 3px;

    img {
        width: 129px;
        height: 193px;
        object-fit: cover;
        cursor: pointer;
    }
`