const db = require("../models");
const router = require("express").Router();
const passport = require("passport");

router.post("/api/recipes", function (req, res) {
  console.log(req.body);
  db.User.findOneAndUpdate(req.body).then(function (results) {
    console.log("Results", results);
    // results.recipes.map((recipe) => {
    //   console.log("recipe", JSON.stringify(recipe));
    // });

    res.json(results);
  });
});

router.get("/api/recipes/:name", function (req, res) {
  console.log("router.get -- req.params.name", req.params.name);
  db.User.find({ name: req.params.name }).then(function (results) {
    console.log("results", results);
    res.json(results);
  });
});

router.get("/api/recipes", function (req, res) {
  db.User.find().then(function (results) {
    res.json(results);
  });
});

// Register User
router.post("/register", function (req, res) {
  console.log("router.post /register", req.body);
  var newUser = new db.User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    calories: req.body.calories,
    dietRestrictions: req.body.dietRestrictions,
    dietType: req.body.dietType,
    city: req.body.city,
    state: req.body.state,
    zipCode: req.body.zipCode
  });

  db.User.createUser(newUser, function (err, user) {
    if (err) throw err;
    res.send(user).end();
  });
});

// // Get user data
// router.get("/api/user", function (req, res) {
//   db.User.find();
// });

// Endpoint to login
router.post("/login", passport.authenticate("local"), function (req, res) {
  console.log("User", req.user);
  res.send(req.user);
});

// Endpoint to get current user
router.get("/user", function (req, res) {
  if (req.user) {
    console.log("/user api call ", req.user);
    res.send(req.user);
  }
  // return res.status(404).end();
  res.redirect("/login");
  // res.sendFile(path.join(__dirname, "../public/login.html"));
});

router.get("/login", function (req, res) {
  if (req.user) {
    res.send(req.user);
  }
  return res.status(404).end();
  // res.sendFile(path.join(__dirname, "../public/login.html"));
});

// Endpoint to logout
router.get("/logout", function (req, res) {
  console.log("/logout");
  req.logout();
  res.send(null);
});

module.exports = router;
