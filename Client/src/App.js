import Cards from "./components/component Cards/Cards";
import { useState, useEffect } from "react";
import { MainDiv } from "./styledComponents";
import Nav from "./components/component Nav/Nav";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./views/view About/About";
import Detail from "./components/component Detail/Detail";
import Form from "./components/component Form/Form";
import Favorites from "./components/component Favorites/Favorites";

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const email = "ale.jacobmp@gmail.com";
  const password = "reptile1912199014r";
  const navigate = useNavigate();

  function login(userData) {
    const { email, password } = userData;
    const URL = "http://localhost:3001/rickandmorty/login/";
    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
      const { access } = data;
      setAccess(data);
      access && navigate("/home");
    });
  }
  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const onSearch = (id) => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then((response) => {
        if (
          response.data.char.name &&
          !characters.find((char) => char.id === response.data.char.id)
        ) {
          setCharacters((oldChars) => [...oldChars, response.data.char]);
        }
      })
      .catch((err) => {
        alert(err.response.data.msg);
      });
  };

  const onClose = (id) => {
    const array1 = characters.filter((element) => element.id !== id);
    setCharacters(array1);
  };
  const location = useLocation();

  return (
    <MainDiv>
      {location.pathname !== "/" && <Nav onSearch={onSearch}></Nav>}
      <Routes>
        <Route
          path="/home"
          element={<Cards onClose={onClose} characters={characters} />}
        />

        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/" element={<Form login={login} />} />
        <Route path="/favorites" element={<Favorites onClose={onClose} />} />
      </Routes>
    </MainDiv>
  );
}

export default App;
