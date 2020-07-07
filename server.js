const express = require("express");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose");
var session = require("express-session");
var passport = require("passport");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  //set static folder
  app.use(express.static("client/build"));
}

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

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/ieat");

app.listen(PORT, function () {
  console.log("App is listening on port http://localhost:" + PORT);
});
