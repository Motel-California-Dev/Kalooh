const express = require('express');
const session = require('express-session');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const routes = require('./routes');
const passport = require('./auth/passport');

const app = express();

app.disable('x-powered-by');
app.use(session({
  secret: process.env.SESSION_SECRET || "development_secret",
  resave: false,
  saveUninitialized: true,
  cookie: { 
    httpOnly: true,
    secure: true 
  }
}));
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());

routes(app);

app.listen(process.env.PORT || '3000', () => {
  console.log(`App listening on ${process.env.PORT || 3000}`);
});
