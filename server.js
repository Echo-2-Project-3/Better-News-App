const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");
const db = require('./models');
const router = require("router");
var session = require("express-session");
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;


/**
 *   SETTING UP PASSPORT 
 */

//Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

app.use(session({ secret: "miw", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());


passport.use(new LocalStrategy(
  // simple, static login strategy based on the username
  // "baduser" will be rejected and invalid username, everyone else has a password of "password"
  {
    usernameField: 'name'
  },
  function (name, password, done) {
    console.log("In local strategy", name, password)
    db.User.findOne({
      where: {
        name: name,
        password: password
      }
    }).then(function (data) {
      // When a user tries to sign in this code runs
      // If we're trying to log in with an invalide username
      // console.log("in strat", data)
      console.log("Found user in data base", data.name, data.password)
      var pword = data.password;
      var uname = data.name;
      var uid = data.id;
      console.log("INT LOCAL STRATEGY", name, password)

      if (!name || name !== uname) {
        return done(null, false, {
          message: "Incorrect username."
        });
      }
      // If we're using an invalid password
      else if (password != pword) {
        return done(null, false, {
          message: "Incorrect password."
        });
      } else {
        // successful login, return the user -- which consists of an object holding the username
        let user = {
          interest: data.interest,
          email: data.email,
          age: data.age,
          doppel_me: data.doppel_me,
          name: data.name
        }
          console.log("user: ", user)
          return done(null, user);
        ///JSON.stringify({userName: uname, id: uid});
      }})
      .catch(err=> {
        console.log("err", err);
      }) 

    }));

passport.serializeUser(function (user, callback) {
  callback(null, user);
});

// the deserialized user is an object with a username property -- which is availabe as request.user
passport.deserializeUser(function (user, callback) {
  callback(null, { user });
});



// Define middleware here
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(routes);
const index = require('./routes/index')
const user = require('./routes/api/user')
const challenges = require('./routes/api/challenges')
const challenge = require ('./routes/api/challenges/:challenge')
//const index2 = require('./routes/api/index')

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

db.sequelize.sync().then(function () {
  app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
})


module.exports = router;
