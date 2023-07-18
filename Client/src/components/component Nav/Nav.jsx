import SearchBar from "../component SearchBar/SearchBar";
import { DivNav } from "./styledComponents";
import { Link } from "react-router-dom";
import { BarButtons } from "./styledComponents";

function Nav(props) {
  return (
    <DivNav>
      <Link to="/about">
        <BarButtons>About</BarButtons>
      </Link>
      <Link to="/home">
        <BarButtons>Home</BarButtons>
      </Link>
      <Link to="/favorites">
        <BarButtons>Favorites</BarButtons>
      </Link>

      <SearchBar onSearch={props.onSearch} />
    </DivNav>
  );
}

export default Nav;
