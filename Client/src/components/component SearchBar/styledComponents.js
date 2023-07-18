import styled from "styled-components";

export const DivBar = styled.div``;

export const InputSearch = styled.input`
  border-radius: 6px;
  width: 350px;
  height: 30px;
  &::placeholder {
    color: green;
  }
`;

export const ButtonAgregar = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 6px;
  background-color: yellow;
  font-family: "Comic Sans MS", "Comic Sans", cursive;

  &:hover {
    background-color: RGBA(61, 199, 161, 1);
    scale: 1.1;
  }
`;
