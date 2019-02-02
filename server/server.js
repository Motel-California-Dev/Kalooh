require('dotenv').config();
const express = require('express');
const db = require('./db');
const routes = require('./routes');

const app = express();

routes(app)

app.listen('3000', () => {
  console.log('App listening on port 3000');
});
