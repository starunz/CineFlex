import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Success({order,setOrder}) {
    const navigate = useNavigate();
    console.log(order, setOrder);

    const {
      cpf,
      name,
      selectedSeats,
      showtime,
    } = order;
  
  
    if (!order) {
      navigate('/')
    }
  
    function returnToHome () {
      setOrder(null);
      navigate('/');
    }
  
    return (
      <PageReview>
        <Title>
          Pedido feito<br />com sucesso!
        </Title>
  
        <div className="info-group">
          <InfoTitle>Filme e sessão</InfoTitle>
          <div>{showtime.movie.title}</div>
          <div>{showtime.day.date} - {showtime.name}</div>
        </div>
  
        <InfoGroup>
          <InfoTitle>Ingressos</InfoTitle>
          {
            selectedSeats.map(s => (
              <div>Assento {s.name}</div>
            ))
          }
        </InfoGroup>
  
        <InfoGroup>
          <InfoTitle>Comprador</InfoTitle>
          <div>{name}</div>
          <div>CPF: {cpf}</div>
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
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;

    color: #293845;

    margin-top: 67px;
`
const InfoGroup = styled.div`
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  font-size: 22px;

  :not(:last-child) {
    margin-bottom: 47px;
  }
`
const InfoTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 18px;
  margin-bottom: 10px;
`
const BackHome = styled.button`
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
  margin: 0 auto;
`