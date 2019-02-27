require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db');
const routes = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

app.listen('3000', () => {
  console.log('App listening on port 3000');
});
