// Dependencies
// Series of npm packages that we will use to give our server useful functionality
var express = require("express");
var bodyParser = require("body-parser");
var app = express();

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// This sets up the basic properties for our express server
// Tells node that we are creating an "express" server


// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// The below code effectively "starts" our server
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});

app.use(express.static("public"));
