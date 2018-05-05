// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// Reservation Table DATA
// =============================================================
var tableReservations = [{
    customerName: "Giovanna",
    name: "Giovanna",
    phone: "(407) 800-4897",
    email: "giovanna.perina@hotmail.com",
    resID: "1"
  },
  {
    customerName: "Joshua",
    name: "Joshua",
    phoneNumber: "(302) 382-5155",
    Email: "jharnois444@gmail.com",
    resID: "2"
  },
  {
    customerName: "Reinaldo",
    name:  "Reinaldo",
    phone: "(407) 577-7607",
    email: "llanoreinaldo@gmail.com",
    resID: "3"
  }
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

// Displays all reservation
app.get("/api/tables", function(req, res) {
  return res.json(tableReservations);
});

// Displays a tables, or returns false
app.get("/api/tables/:tables", function(req, res) {
  var chosen = req.params.tables;

  console.log(chosen);

  for (var i = 0; i < tableReservations.length; i++) {
      if (chosen === tableReservations[i].customerName) {
          return res.json(tableReservations[i]);
      }
  }

  return res.json(false);
});

// Create New Reseverations - takes in JSON input
app.post("/api/tables", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newReservation = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();

  console.log(newReservation);

  swCharacters.push(newReservation);

  res.json(newReservation);
});


// Starts the server to begin listening
// =============================================================
app.listen(process.env.PORT || PORT, function () {
  console.log("App listening on PORT " + PORT);
});