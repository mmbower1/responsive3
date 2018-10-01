// We need to include the path package to get the correct file path for our html
var path = require("path");

module.exports = function() {

    // HTML GET Requests. Below code handles when users "visit" a page.
    // In each of the below cases the user is shown an HTML page of content
    app.get("/home", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
}