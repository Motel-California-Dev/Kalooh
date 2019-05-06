const http = require('http');
const fs = require('fs');
const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const routes = require('./routes');
const passport = require('./auth/passport');

const options = {
  key: fs.readFileSync('./keys/rootCA.key'),
  cert: fs.readFileSync('./keys/rootCA.pem')
};

const app = express();

app.disable('x-powered-by');
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());

routes(app);

http.createServer({ options }, app)
  .listen(process.env.PORT || '3000', () => {
  console.log(`App listening on ${process.env.PORT || 3000}`);
});
