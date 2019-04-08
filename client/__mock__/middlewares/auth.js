const fs = require('fs');

module.exports = (req, res, next) => {
  const { method, path, body: { username, password }} = req;
  if (method === 'POST' && path === '/login') {
    const users = JSON.parse(fs.readFileSync('__mock__/db.json')).users;
    console.log(users);

    for(let i = 0; i < users.length; i++) {
      if (username === users[i].username && password === users[i].password) {
        return res.status(200).send(users[i]);
      }
    }

    return res.status(404).send({ message: "Login failed." });
  } else {
    next();
  }
};
