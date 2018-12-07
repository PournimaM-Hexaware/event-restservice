var express = require('express');
var bodyParser = require('body-parser');
var getData = require('./getData.js')


var app = express();
var port = process.env.PORT || 3000;
app.use(express.static(__dirname));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




app.get('/getAgenda', function (req, res) {
    new getData().fetchAgendaDetails((body) => {

        console.log(JSON.stringify(body))
        res.send(body);
    });


})

app.get('/getSpeakers', function (req, res) {
    new getData().fetchSpeakerDetails((body) => {

        console.log(JSON.stringify(body))
        res.send(body);

    })

})

app.listen(port);
console.log("Server Running Successfully at port " + port);