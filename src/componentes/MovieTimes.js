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
`
const DayList = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 23px;
  margin-bottom: 117px;
`