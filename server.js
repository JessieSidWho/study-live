require(`dotenv`).config();
require("./config/connection");

const express = require('express');
const app = express();

// Routes to Mongo DB
const chatRouter = require('./routes/chat');

// Passport
const passport = require("passport");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('./config/keys');

// socket io
const server = require('http').createServer(app);
const io = require('socket.io')(server);

// google
const routes = require("./routes");
const cookieSession = require('cookie-session');
const path = require('path');

const db = require('./model');

const PORT = process.env.PORT || 3001;

// Data sent over the server read in JSON format
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// allows data to be sent across two different ports, requried by CORS policy
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Handles saving the Chat messages to Mongo DB
app.use('/chat', chatRouter);

// Passport implementation

// this sets an identifying token that says you are without a doubt
// the user that logged in
passport.serializeUser((user, done) => {
  // this sets the user.id as the cookie
  done(null, user.id);
});

// takes the id that we stuffed in the cookie from serialize and turn it back into a user model
passport.deserializeUser(async (id, done) => {
  const user = await db.User.findById(id).populate('todos');
  done(null, user);
});

// Tells passport to use a google strategy and what credentials
// and function to run when the strategy is used

// The second parameter is the function that fires every time the user gets redirected
// back to our app after they sign in
passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientId,
    clientSecret: keys.googleClientSecret,
    callbackURL: "/auth/google/callback",
    proxy: true
  }, async (accessToken, refreshToken, profile, done) => {
    try {
      const existingUser = await db.User.findOne({ googleId: profile.id });
      if (existingUser) {
        done(null, existingUser);
      } else {
        const user = await db.User.create({ googleId: profile.id });
        done(null, user);
      }
    } catch (e) {
      done(e);
    }

  })
);


// Chat implementation using Socket IO

let count = 0;

// io.origins('*:*');

io.on('connection', client => {
  console.log(`a user is connected: ${client.id}`);

  count++;
  console.log(`users: ${count}`);
  io.emit('user count', count);

  client.on('subscribeToTimer', interval => {
    console.log('client is subscribing to timer with interval', interval);

    setInterval(() => {
      client.emit('timer', new Date());
    }, interval);
  });

  client.on('disconnect', function () {
    console.log(`user disconnected ${client.id}`);

    count--;
    console.log(`users: ${count}`);
    io.emit('user count', count);
  });

  client.on('chat message', msg => {
    // console.log(`${client.id}:`, msg);
    io.emit('chat message', `${msg}`);
  });
});

server.listen('8000', () => {
  console.log('listening on port 8000');
});

// server.listen(PORT, () => {
//   console.log(`listening on port ${PORT}`);
// });

// Google

// Define middleware here
app.use('/static', express.static(path.join(__dirname, 'client/build')));

// app.use(express.static('client/build'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: ['asjoufbdhasfasfgauidyagdss']
  })
);
// These tells passport to use cookies to handle authentication
// once these functions run, our User model instance will be added to req.user
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);


// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
//   // app.use('/static', express.static(path.join(__dirname, 'client/build')));
// }

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
} else {
  app.use(express.static(path.join(__dirname, '/client/public')));
  app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/public/index.html"));
  });
}

app.get('/users', async (req, res) => {
  console.log(req.user);
  const users = await db.User.find();
  res.send(users)
})

// Add routes, both API and view
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});