import styled from "styled-components";
import img from "./assets/imgs/rym4.jpg";

export const MainDiv = styled.div`
  background-image: url(${img});
  /* background-color: yellow; */
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow-y: auto;
  background-size: cover;
`;
