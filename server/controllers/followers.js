const db = require('../db');

exports.list = async (req, res) => {
  const { id } = req.params;
  const query = 'SELECT u2.id, u2.username, u2.first_name, u2.last_name, u2.email, u2.picture FROM users AS u1 INNER JOIN follow AS f ON u1.id = f.leader INNER JOIN users AS u2 ON f.follower = u2.id WHERE u1.id = $1';
  const params = [ id ];

  try {
    const data = await db.many(query, params);

    return res.status(200).send(data);
  } catch (err) {
    console.log(err);
    return res.status(400).send({ message: 'Error loading followers' });
  } 
};

