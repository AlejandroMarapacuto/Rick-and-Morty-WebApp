const users = require("../utils/users");

const getLogin = (req, res) => {
  const email = req.query.email;
  const password = req.query.password;
  const user1 = users.find(
    (user) => user.email === email && user.password === password
  );

  if (user1) {
    res.status(200).json({ access: true });
  } else {
    res.status(200).json({ access: false });
  }
};

module.exports = { getLogin };
