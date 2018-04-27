// initializes Node.js packages
var path = require("path");
var bodyParser = require("body-parser");
var express = require("express");
var reload = require("reload");
var publicPath = path.join(__dirname, 'public');

// initializes Express.js server and defines port
var app = express();
var PORT = process.env.PORT || 3000;

// initializes Sequelize models
var db = require("./models");

// sets up data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//loads static files
app.use(express.static(publicPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'))
})

// imports routes
require("./routes/user-routes.js")(app);
require("./routes/api-routes.js")(app);

// starts Express.js server
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});