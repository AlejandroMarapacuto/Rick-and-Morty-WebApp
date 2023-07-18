import styled from "styled-components";

export const DivNav = styled.nav`
  padding: 1em;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const BarButtons = styled.button`
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
