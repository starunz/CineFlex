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
  const [selecionado, setSelecionado] = useState('#8DD7CF');
  const [indisponivel, setIndisponivel] = useState('#FBE192')
  const [disponivel, setDisponivel] = useState ('#C3CFD9')

  useEffect(() => {
    getSeats(showtimeId)
      .then(response => { setShowtime(response.data) });
  }, []);

  function selectSeats (seat) {
 
    if (!seat.isAvailable) {
      alert("Esse assento não está disponível")
      return;
    }
    if (selectedSeats.includes(seat)) {
      const filteredSeats = selectedSeats.filter(s => s !== seat);
      setSelectedSeats(filteredSeats)
    } else {
      setSelectedSeats([...selectedSeats, seat])
    };
  }

  function booking () {
    const body = {
      ids: selectedSeats.map(s => s.id),
      name,
      cpf,
    }

    if (name && cpf && selectedSeats.length > 0) {
      console.log(body)
      navigate('/sucesso');
    };

    setOrder({
      showtime,
      selectedSeats,
      name,
      cpf,
    });

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
                colorSeats={s.isAvailable ? selectedSeats.find((seat) => seat.id === s.id) ? selecionado : disponivel : indisponivel}
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
            <Legend >
                <Seat colorSeats={'#8DD7CF'}/>
                Selecionado
            </Legend>

            <Legend>
                < Seat colorSeats={'#C3CFD9'}/>
                Disponível
            </Legend>

            <Legend>
                <Seat colorSeats={'#FBE192'}/>
                Indisponível
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

    margin-top: 67px;

    font-family: 'Roboto',sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.04em;

    color: #293845;
`
const SeatList = styled.div`
    width: 300px;
    padding: 0 24px;
    display: flex;
    flex-wrap: wrap;
    margin: -20px 22px 0;
`
const Seat = styled.div`
  width: 22px;
  height: 22px;
  border: 1px solid #808F9D;
  background-color: ${ (props) => props.colorSeats };
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
    width: 250px;
    padding: 0 57px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto 0;

    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 15px;
    display: flex;
    align-items: center;
    letter-spacing: -0.013em;

    color: #4E5A65;
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
  margin: 60px 20px;
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
    outline: none;
  }

  input::placeholder {
    font-family: 'Roboto',sans-serif;
    font-style: italic;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;

    color: #AFAFAF;
  }
`
const InputGroupTitle = styled.div`
    font-size: 18px;
    color: #293845;

    font-family: 'Roboto',sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;

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

    margin: 0 auto 30px auto;

    font-family: 'Roboto',sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.04em;
`