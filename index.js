var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var carsController = require('./controllers/cars_controller')

app.use(bodyParser.json())

app.get('/cars', carsController.index)
app.get('/cars/:id', carsController.show)
app.post('/cars', carsController.create)
app.put('/cars/:id', carsController.update)
app.delete('/cars/:id', carsController.destroy)


var port = 3040
app.listen(port, function(){
    console.log('listening on port', port);
});