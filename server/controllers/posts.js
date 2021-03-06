const db = require('../db');

exports.create = (req, res) => {
  console.log("Post!");
  const { userId, createdAt, title, message, lati, long } = req.body;
  const query = "INSERT INTO post (user_id, created_at, title, message, lati, long, likes) VALUES ($1, CURRENT_TIMESTAMP, $2, $3, $4, $5, 0);";
  const params = [userId, title, message, lati, long]; 
  db.query(query, params)
    .then(data => {
      console.log(data);
      res.status(204).json({ message: "success!" });
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
};

exports.list = (req, res) => {
  console.log("Get!");
  const { lati, long } = req.query;
  let radius = req.query.radius;

  if (!radius) {
    radius = 25;
  }

  const query = "SELECT * FROM ( SELECT *, ( 6371 * ACOS( COS( RADIANS( $1 ) ) * COS( RADIANS( lati ) ) * COS( RADIANS( long ) - RADIANS( $2 ) ) + SIN( RADIANS( $1) ) * SIN( RADIANS( lati ) ) ) ) AS distance FROM post) AS dt WHERE distance < $3;";

  const params = [ lati, long, radius ]
  db.query(query, params)
    .then(data => {
      console.log(data);
      res.status(200).send(data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
};

exports.find = (req, res) => {
  console.log("Get a post!");
  const query = "SELECT * FROM post WHERE id = $1;";
  const params = [req.params.id];
  db.query(query, params)
    .then(data => {
      console.log(data);
      res.status(200).send(data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
};

exports.update = (req, res) => {
  console.log("Update!");
  const { message } = req.body;
  const { id } = req.params;
  const query = "UPDATE post SET message = $1 WHERE id = $2;";
  const params = [ message, id ]; 
  db.query(query, params)
    .then(data => {
      console.log(data);
      res.status(204).json({ message: "success!" });
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
};
exports.delete = (req, res) => {
  console.log("Delete!");
  const id = req.params.id;
  const query = 'DELETE FROM post WHERE id = $1';
  const params = [ id ];
  db.query(query, params)
    .then(data => {
      console.log(data);
      res.status(204).json({ message: "success!" });
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
};

