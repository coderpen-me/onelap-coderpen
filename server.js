//Install express server
const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');

const app = express();

var cors = require('cors');

const PORT = process.env.PORT || 5000;

//Cross origin support middle
app.use(cors());
//body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/onelap-coderpen'));
app.get('/*', function(req, res) {

    res.sendFile(path.join(__dirname + '/dist/onelap-coderpen/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}...`);
});