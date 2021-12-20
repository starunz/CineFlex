import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Showtime({ showtime }) {
  return (
    <Link to={`/assentos/${showtime.id}`}>
      <Time>
        {showtime.name}
      </Time>
    </Link>
  );
}

const Time = styled.div`
  width: 83px;
  height: 43px;

  background-color: #E8833A;
  color: #fff;

  border-radius: 3px;
  margin-right: 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`