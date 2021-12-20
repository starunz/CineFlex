import styled from "styled-components";

export default function Footer({ showtime, weekday, name }) {

  return (
    <Footter>
      <Poster>
        <img src={showtime.posterURL} alt="" />
      </Poster>

      <Info>
        <span>{showtime.title}</span>
        <span>
          {
            weekday ?
            `${weekday} - ${name}` 
            :
            ''
          }
          </span>
      </Info>

    </Footter>
  );
}

const Footter = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;

  width: 100%;
  height: 117px;

  border-top: 1px solid #9EADBA;
  background-color: #DFE6ED;

  padding: 14px 10px;
  display: flex;
  align-items:center;

  display: flex;
`

const Poster = styled.div`
  padding: 8px;
  border-radius: 2px;

  width: 64px;
  height :89px;

  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 60px;
    height: 85px;

    object-fit: cover;
  }
`
const Info = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-left: 16px;
  font-size: 26px;

  line-height: 120%;

  span {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 26px;
    line-height: 30px;
    display: flex;
    align-items: center;

    color: #293845;
  };
`