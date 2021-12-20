import Day from './MovieDay';
import Footer from './Footer';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { getShowtimes } from "../service/api";
import styled from 'styled-components';

export default function Showtimes() {

  const [showtime, setShowtimes] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getShowtimes(movieId)
      .then(response => {
        
        setShowtimes(response.data)
        console.log(response.data)
      })
  }, [])
  
  return (
    <>
      <PagTitle> Selecione o horário </PagTitle>

      <DayList>
        {
          showtime ?
          showtime.days.map(day => (<Day day={day} />))
          :
          ''
        }
      </DayList>
        {
          showtime ? 
          <Footer showtime={showtime}/>
          :
          ''
        }
      
    </>
  );
}

const PagTitle = styled.div`
  height: 110px;

  font-size: 24px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 67px;

  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0.04em;

  color: #293845;
`
const DayList = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 23px;
  margin-bottom: 145px;

  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: 0.02em;

  color: #293845;
`