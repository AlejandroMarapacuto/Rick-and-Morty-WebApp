const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await axios(URL + id);
    const pj = {
      msg: "OK",
      char: {
        id: id,
        name: response.data.name,
        gender: response.data.gender,
        species: response.data.species,
        status: response.data.status,
        origin: response.data.origin,
        image: response.data.image,
      },
    };

    res.status(200).json(pj);
  } catch (error) {
    // console.log(error);
    const err = { msg: "Character not found!" };
    // const response = error;
    return res.status(404).json(err);
  }
};

module.exports = {
  getCharById,
};

// const axios = require("axios");

// const getCharById = (res, id) => {
//   axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((response) => {
//       console.log(response.data);
//       const character = {
//         msg: "Ok",
//         char: {
//           id: id,
//           name: response.data.name,
//           gender: response.data.gender,
//           species: response.data.species,
//           status: response.data.status,
//           origin: response.data.origin,
//           image: response.data.image,
//         },
//       };

//       res.writeHead(200, { "Content-Type": "application/json" });
//       res.end(JSON.stringify(character));
//     })
//     .catch((err) => {
//       const error = { msg: "No characters with this ID!!", status: 404 };
//       res.writeHead(404, { "Conten-Type": "text/plain" });
//       res.end(JSON.stringify(error));
//     });
// };

// module.exports = {
//   getCharById,
// };
