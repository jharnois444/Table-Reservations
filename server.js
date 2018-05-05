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
    "customerName": "Giovanna",
    "phoneNumber": "(407) 800-4897",
    "customerEmail": "giovanna.perina@hotmail.com",
    "customerID": "1"
  },
  {
    "customerName": "Joshua",
    "phoneNumber": "(302) 382-5155",
    "customerEmail": "bestBall@meat.meaty",
    "customerID": "jharnois444@gmail.com"
  },
  {
    "customerName": "Reinaldo",
    "phoneNumber": "(407) 577-7607",
    "customerEmail": "bestBall@meat.meaty",
    "customerID": "llanoreinaldo@gmail.com"
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
      if (chosen === tableReservations[i].routeName) {
          return res.json(tableReservations[i]);
      }
  }

  return res.json(false);
});



// Starts the server to begin listening
// =============================================================
app.listen(process.env.PORT || PORT, function () {
  console.log("App listening on PORT " + PORT);
});