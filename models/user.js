var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
var passport = require("passport");
// User Schema
var UserSchema = mongoose.Schema({
  password: {
    type: String
  },
  email: {
    type: String
  },
  name: {
    type: String
  },
  calories: {
    type: Number
  },
  dietRestrictions: {
    type: String
  },
  dietType: {
    type: String
  },
  city: {
    type: String
  },
  state: {
    type: String
  },
  zipCode: {
    type: String
  },
  recipes: {
    type: Array
  }
});

var User = (module.exports = mongoose.model("User", UserSchema));

module.exports.createUser = function (newUser, callback) {
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(newUser.password, salt, function (err, hash) {
      newUser.password = hash;
      newUser.save(callback);
    });
  });
};

module.exports.getUserByEmail = function (email, callback) {
  var query = { email: email };
  console.log(query);
  User.findOne(query, callback);
};

module.exports.getUserById = function (id, callback) {
  User.findById(id, callback);
};

module.exports.comparePassword = function (candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, function (err, isMatch) {
    if (err) throw err;
    callback(null, isMatch);
  });
};

var LocalStrategy = require("passport-local").Strategy;
passport.use(
  new LocalStrategy({ usernameField: "email" }, function (
    email,
    password,
    done
  ) {
    console.log(email);
    User.getUserByEmail(email, function (err, user) {
      if (err) throw err;
      if (!user) {
        return done(null, false, { message: "Unknown User" });
      }
      User.comparePassword(password, user.password, function (err, isMatch) {
        if (err) throw err;
        if (isMatch) {
          return done(null, user);
        } else {
          return done(null, false, { message: "Invalid password" });
        }
      });
    });
  })
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.getUserById(id, function (err, user) {
    done(err, user);
  });
});
