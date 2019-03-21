const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

const routes = require('./routes');
const passport = require('./auth/passport');

const app = express();

app.use(bodyParser.json());
app.use(session({
  secret: process.env.SESSION_SECRET || "development_secret",
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());

routes(app);

app.listen(process.env.PORT || '3000', () => {
  console.log(`App listening on ${process.env.PORT || 3000}`);
});
