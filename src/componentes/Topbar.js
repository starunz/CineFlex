import styled from "styled-components";

export default function Topbar() {
    return(
        <Top>Cineflex</Top>
    );
}

const Top = styled.div`
  width: 100%;
  height: 67px;

  margin-bottom: 67px;

  position: fixed;
  top: 0;
  left: 0;

  background-color: #C3CFD9;
  color: #E8833A;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 34px;
  font-family: 'Roboto' sans-serif;

  text-transform: uppercase;
`