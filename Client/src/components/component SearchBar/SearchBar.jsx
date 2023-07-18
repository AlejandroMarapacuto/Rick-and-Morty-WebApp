import { InputSearch } from "./styledComponents";
import { ButtonAgregar } from "./styledComponents";
import { useState } from "react";

export default function SearchBar(props) {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  return (
    <div>
      <InputSearch
        type="search"
        placeholder="  Enter the character ID you want to get!"
        onChange={handleChange}
      />
      <ButtonAgregar
        onClick={() => {
          props.onSearch(id);
        }}
      >
        Add
      </ButtonAgregar>
    </div>
  );
}
