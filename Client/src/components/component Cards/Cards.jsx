import Card from "../component Card/Card";
import { DivContainer } from "./styledComponents";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Cards({ characters, onClose }) {
  return (
    <DivContainer>
      {characters.map((char) => {
        return (
          <Card
            key={char.id}
            id={char.id}
            name={char.name}
            status={char.status}
            species={char.species}
            gender={char.gender}
            origin={char.origin.name}
            image={char.image}
            onClose={onClose}
          />
        );
      })}
    </DivContainer>
  );
}
