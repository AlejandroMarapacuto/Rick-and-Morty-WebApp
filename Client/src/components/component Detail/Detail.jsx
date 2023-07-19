import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { DivContainer } from "./styledComponents";
import { DivImage } from "./styledComponents";
import { Img } from "./styledComponents";
import { Divh1s } from "./styledComponents";

const Detail = () => {
  const { id } = useParams();

  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      (response) => {
        if (response.data.char.name) {
          setCharacter(response.data.char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <DivContainer>
      <Divh1s>
        <h1>Name: {character.name} </h1>
        <h1>Specie: {character.species}</h1>
        <h1>Gender: {character.gender}</h1>
        <h1>Status: {character.status}</h1>
      </Divh1s>
      <DivImage>
        <Img src={character.image} alt=""></Img>
      </DivImage>
    </DivContainer>
  );
};

export default Detail;
