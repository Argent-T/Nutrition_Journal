var db = require("../models");
var passport = require("../config/passport");

module.exports = function (app) {
    app.get("/api/users", function (req, res) {

        db.User.findAll({
            include: [db.Exercise]
        }).then(function (dbUser) {
            res.json(dbUser)
        });

    });

    app.get("/api/users/:id", function (req, res) {
        db.User.findOne({
            where: {
                id: req.params.id
            },
            include: [db.Exercise]
        }).then(function (dbUser) {
            res.json(dbUser);
        });
    });

    app.post("/api/users", function (req, res) {
        console.log(req.body)
        db.User.create(req.body)
        .then(function() {
            res.redirect(307, "/api/login");
          })
          .catch(function(err) {
             console.log(err) 
            res.status(401).json(err);
          });
    
    });

    app.delete("/api/users/:id", function (req, res) {
        db.User.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbUser) {
            res.json(dbUser);
        });
    });

    app.post("/api/login", passport.authenticate("local"), function(req, res) {
        res.json(req.user);
      });
    
  // Route for getting some data about our user to be used client side
//   app.get("/api/user_data", function(req, res) {
//     if (!req.user) {
//       // The user is not logged in, send back an empty object
//       res.json({});
//     } else {
//       // Otherwise send back the user's email and id
//       // Sending back a password, even a hashed password, isn't a good idea
//       res.json({
//         email: req.user.email,
//         id: req.user.id
//       });
//     }
//   });



}