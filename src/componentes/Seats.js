import Footer from "./Footer";

import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { getSeats } from "../service/api";

import styled from "styled-components";

export default function Seats({ setOrder }) {

  const [showtime, setShowtime] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const navigate = useNavigate();
  const { showtimeId } = useParams();

  useEffect(() => {
    getSeats(showtimeId)
      .then(response => {
        console.log(response.data)
        setShowtime(response.data)})
  }, []);

  function selectSeats (seat) {
 
    if (!seat.isAvailable) {
      alert("Esse assento não está disponível");
      return;
    }

    seat.isSelected = true;

    if (selectedSeats.includes(seat)) {
      const filteredSeats = selectedSeats.filter(s => s !== seat);
      setSelectedSeats(filteredSeats)
    } else {
      setSelectedSeats([...selectedSeats, seat])
    }

    console.log(selectedSeats)

  }

  function booking () {

    const body = {
      ids: selectedSeats.map(s => s.id),
      name,
      cpf,
    }

    console.log(showtime)


    if (name && cpf && selectedSeats.length > 0) {
      console.log(body)
      navigate('/sucesso');
    } 
    setOrder({
      showtime,
      selectedSeats,
      name,
      cpf,
    })


  }

  return (
    <PageSeats>
      <Title>
        Selecione o(s) assento(s)
      </Title>

      <SeatList>
        {
          showtime ?
          showtime.seats.map(s => ( 
            <Seat 
              color= {s.isAvailable ? '' : 'unavailable'}
              selected={selectedSeats.find((seat) => seat.id === s.id) ? 'selected' : ''}
              onClick={() => selectSeats(s)} 
            >
              {s.name}
            </Seat>
          ))
          :
          ''
        }
      </SeatList>

        <SeatLegend>
            <Legend>
                <Seat />
                Selecionado
            </Legend>

            <Legend>
                < Seat />
                Disponível
            </Legend>

            <Legend>
                <Seat />
                Inisponível
            </Legend>
        </SeatLegend>

      <Form>
        <InputGroup>
          <InputGroupTitle>Nome do comprador:</InputGroupTitle>
          <input type="text" placeholder="Digite seu nome..." onChange={(e) => setName(e.target.value)} value={name}/>
        </InputGroup>

        <InputGroup>
          <InputGroupTitle>CPF do comprador:</InputGroupTitle>
          <input type="text" placeholder="Digite seu CPF..." onChange={(e) => setCpf(e.target.value)} value={cpf}/>
        </InputGroup>
      </Form>

      <BookSeats onClick={booking}>
        Reservar assento(s)
      </BookSeats>

      {
        showtime ?
        <Footer showtime={showtime.movie} weekday={showtime.day.weekday} name={showtime.name}/>
        :
        ''
      }
    </PageSeats>
  );
}

const PageSeats = styled.div`
  margin-bottom: 117px;
  padding-bottom: 24px;
`
const Title = styled.div`
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 110px;
`
const SeatList = styled.div`
  padding: 0 24px;
  display: flex;
  flex-wrap: wrap;
  width: 320px;
  margin: -20px auto 0;
`
const Seat = styled.div`
  width: 22px;
  height: 22px;
  border: 1px solid #808F9D;
  background-color: #C3CFD9;
  border-radius: 50%;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  margin-bottom: 18px;
  cursor: pointer;

  :not(:nth-child(10n)) {
  margin-right: 5px;}

`
const SeatLegend = styled.div`
  width: 320px;
  padding: 0 57px;
  display: flex;
  justify-content: space-between;
  margin: -1px auto 0;
`
const Legend = styled.div`
  width: 68px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  letter-spacing: -0.013em;
  color: #4E5A65;
  text-align: center;
`
const Form = styled.div`
  margin-top: 31px;
  padding: 0 24px;
`
const InputGroup = styled.div`
  display: flex;
  flex-direction: column;

  :not(:last-child) {
  margin-bottom: 11px;}

  input {
    border-radius: 3px;
    padding: 18px;
    border: 1px solid #D4D4D4;
    height: 51px;
    font-size: 18px;
    margin-top: 6px;
  }

  input::placeholder {
    color: #AFAFAF;
    font-style: italic;
    font-size: 18px;
  }
`
const InputGroupTitle = styled.div`
  font-size: 18px;
  color: #293845;
`
const BookSeats =styled.button`
  width: 225px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  background-color: #E8833A;
  font-size: 18px;
  border: none;
  border-radius: 3px;
  margin: 57 auto 0 auto;
`