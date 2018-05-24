
var db = require("../models");
var bcrypt = require('bcrypt');

module.exports = function(app) {
  app.get("/api/users", function(req, res) {
    db.User.findAll({}).then(function(result){
      res.json(result);
    });
  });

  app.post("/api/users", function(req, res) {
    var password = "";
    var confirmPassword = "";

    if(req.body.password !== req.body.confirmPassword){
      throw new Error("Passwords must match!");
    }

    else{
      hashing();
    }

    function hashing() {
      var saltRounds = 10;
      var salt = bcrypt.genSaltSync(saltRounds);
      var password = bcrypt.hashSync(req.body.password, salt);
      createUser(password);
    }

    function createUser(pass) {
      db.User.findOrCreate({
        where: {
          email: req.body.email,
        },
        defaults: {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          password: pass
        }
      }).then(function(result){
        var created = result[1];

        if(created){
          res.json(result[0]);
        }
        else{
          throw new Error("That email has already been used");
        }

      });
    }
  });

  app.post("/api/users/login", function(req, res) {

     var users = [];
     
     db.User.findAll({}).then(function(result) {

     

        users = JSON.parse(JSON.stringify(result));
        if(req.body === undefined){
          res.json(new Error("User not found"));
        }
        
        for(var i = 0; i < users.length; i++){
          if(req.body.email === users[i].email && bcrypt.compareSync(req.body.password, users[i].password)){
            return res.json(users[i]);
          }
        }

        res.json(new Error("User not found"));

     });
  });

};

// var encrypt = function(password) {

//   var newHash = bcrypt.hash(password, 10);

//   return newHash;
// } 
