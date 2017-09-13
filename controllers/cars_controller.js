var cars = require('../models/cars')

module.exports = {
    index: function(req, res, next){
            res.status(200).json(cars)
    },

    //  /cars/2
     show: function(req, res, next){
        carId = parseInt(req.params.id) //'2'
            res.status(200).json(cars[carId])
    },
     create: function(req, res, next){
         cars.push(req.body);
         res.status(200).json(cars);
    },
     update: function(req, res, next){
        // req.body replace what's in index with what's in req.body
       cars.splice(req.param.id,1,req.body)
       res.status(200).json(cars);
},
     destroy: function(req, res, next){
            // req.body

            var splicedCars = cars.splice(req.params.id);
            var deletedCar= splicedCars[0];
            res.status(200).json(deletedCar);
    },
     
    
}