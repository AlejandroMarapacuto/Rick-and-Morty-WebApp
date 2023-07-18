import styled from "styled-components";
import image1 from "../../assets/imgs/welcome3.jpg";

export const DivForm = styled.div`
  position: absolute;
  top: 55%;
  left: 45%;
  transform: translate(-50%, -50%);
  background-color: RGBA(61, 199, 161, 0.1);
  background-position: center;
  height: 300px;
  width: 500px;
  display: flex;
  align-items: center;
  font-size: xx-large;
  text-align: center;
  justify-content: center;
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  border-radius: 20px;
  text-shadow: 4px 0px 12px rgba(11, 243, 18, 1);
  color: #ffff0e;
  border-color: yellow;
`;

export const Perror = styled.p`
  font-size: small;
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  color: red;
`;

export const Buttonlogin = styled.button`
  height: 40px;
  width: 120px;
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  font-size: x-large;
  border-radius: 10px;
  background-color: RGBA(61, 199, 161, 0.1);
  color: #ffff0e;
  text-shadow: 4px 0px 12px rgba(11, 243, 18, 1);

  &:hover {
    background-color: RGBA(255, 255, 24, 0.48);
    scale: 1.1;
  }
`;

export const Inputsform = styled.input`
  height: 30px;
  width: 300px;
  font-size: small;
  border-radius: 6px;
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  background-color: RGBA(255, 255, 13, 0.16);
  color: yellow;
`;
