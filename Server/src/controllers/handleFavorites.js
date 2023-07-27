var myFavorites = [];

const postFav = (req, res) => {
  myFavorites.push(req.body);

  res.json(myFavorites);
};

const deleteFav = (req, res) => {
  const { id } = req.params;

  myFavorites = myFavorites.filter((pj) => pj.id !== id);
  res.json(myFavorites);
};

module.exports = { postFav, deleteFav };
