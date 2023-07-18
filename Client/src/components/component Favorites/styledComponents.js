import styled from "styled-components";

export const DivContainer = styled.div`
  position: absolute;
  top: 65%;
  left: 47%;
  transform: translate(-50%, -50%);
  /* background-color: yellow; */
  background-position: center;
  height: 550px;
  width: 900px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

export const DivContainer2 = styled.div`
  position: absolute;
  top: 18%;
  left: 120%;
  transform: translate(-50%, -50%);
  /* background-color: yellow; */
  background-position: center;
  height: 60px;
  width: 300px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

export const Selects = styled.select`
  width: 120px;
  height: 30px;
  border-radius: 6px;
  background-color: yellow;
  font-family: "Comic Sans MS", "Comic Sans", cursive;

  &:hover {
    background-color: RGBA(61, 199, 161, 1);
    scale: 1.1;
  }
`;
