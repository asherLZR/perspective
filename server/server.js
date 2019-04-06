const express = require('express');
const app = express();
const path = require('path');

const PORT = 5000;

app.use(express.static(path.join(__dirname, '..', '/client')));

app.set('view engine', 'ejs');


// Start the server
var server = app.listen(PORT, () => {
    console.log("Example app listening at", server.address().port);
});

// Endpoint for main page
app.get("/", (req, res) => {
    // Send back the index.html document
    res.sendFile(path.join(__dirname + "/../client/index.html"));
});

app.get("/units/:subject", (req, res) => {
    let subjectName = req.params.subject;
    if (subjectName == "it") {
        subjectName = "Information Technology"
    }
    let subjectHeader = subjectName.charAt(0).toUpperCase() + subjectName.slice(1);
    req.params.subjectHeader = subjectHeader;
    res.render(path.join(__dirname + "/../client/unit.ejs"), req.params);
})