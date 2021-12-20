import Showtime from "./MovieTime";
import styled from "styled-components";

export default function Day({ day }) {
  return (
    <Dayy>

      <Title>
        {day.weekday} - {day.date}
      </Title>

      <ShowtimeList>
        {
          day.showtimes.map(showtime => (<Showtime showtime={showtime} />))
        }
      </ShowtimeList>

    </Dayy>
  );
}

const Dayy = styled.div`
  margin: 0 0 22px;
`
const Title = styled.div`
  font-size: 20px;
  margin: 0 0 22px;
`
const ShowtimeList = styled.div`
  display: flex;
`