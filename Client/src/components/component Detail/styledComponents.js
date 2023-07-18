import styled from "styled-components";

export const DivContainer = styled.div`
  position: absolute;
  top: 65%;
  left: 47%;
  transform: translate(-50%, -50%);
  background-color: RGBA(0, 0, 0, 0.66);
  background-position: center;
  height: 550px;
  width: 900px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 15px;
  padding: 15px;
  text-shadow: 4px 0px 12px rgba(11, 243, 18, 1);
`;

export const DivImage = styled.div`
  /* background-color: RGBA(61, 199, 161, 0.01); */
  display: flex;
  align-items: center;
  width: 500px;
  /* background-color: blue; */
`;

export const Img = styled.img`
  height: 500px;
  border-radius: 50px;
`;

export const Divh1s = styled.div`
  /* background-color: RGBA(61, 199, 161, 0.01); */
  justify-content: center;
  flex-direction: column;
  display: flex;
  color: yellow;
  width: 400px;
  /* background-color: red; */
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  font-size: larger;
`;
