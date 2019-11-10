//Install express server
const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/onelapdb');
var db = mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function (callback) {
    console.log("connection succeeded");
})

var cors = require('cors');

const PORT = process.env.PORT || 5000;



//Cross origin support middle
app.use(cors());
//body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/src/app/main'));
app.get('/*', function (req, res) {

    res.sendFile(path.join(__dirname + '/src/app/main/homepage/callback/callback.component.html'));
});

app.post('/sign_up', function (req, res) {
    var name = req.body.name;
    var email = req.body.email;
    var phone = req.body.phone;

    var data = {
        "name": name,
        "email": email,
        "phone": phone
    }
    db.collection('Users').insertOne(data, function (err, collection) {
        if (err) throw err;
        console.log("Record inserted Successfully");

    });
    return res.redirect('callback.component.html');
})
// Start the app by listening on the default Heroku port
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}...`);
});