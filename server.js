const express = require("express");
const app = express();

const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose");
var session = require("express-session");
var passport = require("passport");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Express Session
app.use(
  session({
    secret: "secret",
    saveUninitialized: true,
    resave: true
  })
);

// Passport init
app.use(passport.initialize());
app.use(passport.session());

const apiRoutes = require("./routes/apiRoutes");
app.use(apiRoutes);

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb://user:password1@ds311968.mlab.com:11968/heroku_jcsxk76l"
);

app.listen(PORT, function () {
  console.log("App is listening on port http://localhost:" + PORT);
});
