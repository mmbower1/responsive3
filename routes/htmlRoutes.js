// We need to include the path package to get the correct file path for our html
var path = require("path");

module.exports = function(app) {

    // HTML GET Requests. Below code handles when users "visit" a page.
    // In each of the below cases the user is shown an HTML page of content
    app.get("/", function(req, res) {
        console.log("here");
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/portfolio", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/portfolio.html"));
    });

    app.get("/news", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/news.html"));
    });
}