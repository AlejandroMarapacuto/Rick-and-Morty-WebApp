import { useSelector } from "react-redux";
import Card from "../component Card/Card";
import { DivContainer, DivContainer2, Selects } from "./styledComponents";
import { useDispatch } from "react-redux";
import { filterCards, orderCards, allFavorites } from "../../redux/actions";
import { useState } from "react";

const Favorites = () => {
  const [aux, setAux] = useState(false);
  const myFavorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(!aux);
  };

  const handleFilter = (event) => {
    if (event.target.value === "allFavorites") {
      dispatch(allFavorites());
    } else {
      dispatch(filterCards(event.target.value));
    }
  };
  return (
    <DivContainer>
      <DivContainer2>
        <Selects onChange={handleOrder}>
          <option value="A">Ascendent</option>
          <option value="D">Descendent</option>
        </Selects>
        <Selects onChange={handleFilter}>
          <option value="allFavorites">All Favorites</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </Selects>
      </DivContainer2>
      {myFavorites.map((char) => {
        return (
          <Card
            id={char.id}
            name={char.name}
            species={char.species}
            gender={char.gender}
            image={char.image}
            onClose={char.onClose}
          />
        );
      })}
    </DivContainer>
  );
};

export default Favorites;
