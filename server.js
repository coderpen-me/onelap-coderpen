const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');
const app = express();
var email = require("emailjs");

var cors = require('cors');

const PORT = process.env.PORT || 5000;

server = email.server.connect({
    user: '',
    password: '',
    host: 'smtp.gmail.com',
    ssl: true,
    port: 465
});

//Cross origin support middle
app.use(cors());
//body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/onelap-coderpen/'));
app.get('/*', function(req, res) {

    res.sendFile(path.join(__dirname + '/dist/onelap-coderpen/index.html'));
});

app.post('/post', function(req, res) {
    let name = req.body.name;
    var email = req.body.email;
    var phone = req.body.phone;
    const data = {
        from: 'Coderpen <coderpen@gmail.com>',
        to: 'Adarsh Pandey <todayswinner.adarsh@gmail.com>',
        subject: 'Website Query',
        attachment: [
            // tslint:disable-next-line:max-line-length
            { data: '<html> <br> Name : ' + name + '<br> Email : ' + email + '<br> Phone : ' + phone + '</html>', alternative: true }
        ]
    };
    server.send(data, (err, message) => {
        if (err) {
            console.log(err);
        } else {
            console.log(message);
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}...`);
});