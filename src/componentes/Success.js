import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Success({order,setOrder}) {
    const navigate = useNavigate();
  
    function returnToHome () {
      setOrder(null);
      navigate('/');
    }
  
    return (
      <PageReview>
        <Title>
          Pedido feito<br />com sucesso!
        </Title>
  
        <InfoGroup>
          <InfoTitle>Filme e sessão</InfoTitle>
          <span>{order.showtime.movie.title}</span>
          <span>{order.showtime.day.date} - {order.showtime.name}</span>
        </InfoGroup>
  
        <InfoGroup>
          <InfoTitle>Ingressos</InfoTitle>
          {
            order.selectedSeats.map(seat => (
              <span>Assento {seat.name}</span>
            ))
          }
        </InfoGroup>
  
        <InfoGroup>
          <InfoTitle>Comprador</InfoTitle>
          <span>Nome: {order.name}</span>
          <span>CPF: {order.cpf}</span>
        </InfoGroup>
  
        <BackHome onClick={returnToHome}>
          Voltar pra Home
        </BackHome>
      </PageReview>
    );
}
const PageReview = styled.div`
    margin-bottom: 117px;
    padding-bottom: 24px;
`
const Title = styled.div`
    width: 100%;
    height: 110px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;

    color: #247A6B;
 
    margin-top: 67px;
`
const InfoGroup = styled.div`
    padding: 0 30px;
    display: flex;
    flex-direction: column;

    :not(:last-child) {
        margin-bottom: 47px;
    }
    
    span {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 26px;
    letter-spacing: 0.04em;
    }
    
    color: #293845;
`
const InfoTitle = styled.div`
    margin-bottom: 18px;
    margin-bottom: 10px;

    font-family: 'Roboto' sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.04em;

    color: #293845;
`
const BackHome = styled.button`
    width: 225px;
    height: 42px;

    display: flex;
    justify-content: center;
    align-items: center;

    color: #ffffff;
    background-color: #E8833A;

    border: none;
    border-radius: 3px;
    margin: 0 auto;

    font-family: 'Roboto' sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.04em;
`