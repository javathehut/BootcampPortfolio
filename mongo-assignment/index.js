const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Car = require('./models/cars');
const Dealership = require('./models/dealerships');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost/data/db/');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log("Connected to db at /data/db/")
});

const seedDealerships = require('./seeds/dealerships');
const seedCars = require('./seeds/cars');
seedDealerships();
seedCars();

app.listen(8080, () => {
    console.log('SERVER RUNNING ON 8080');
})

//GET: Retrieve all car objects
// app.get('/cars', (req,res) => {
//     Car.find({})
//         .then(cars => {
//             res.json(cars);
//         })
//         .catch(err => {
//             res.json({err});
//         })
// });

//GET: Retrieve a single car object using id
/*app.get("/:id", (req, res) => {
    Car
        .findById({_id:req.params.id})
        .then(car => {
            return res.json(car)
        })
        .catch(error => {
            return res.json(error);
        });
});*/

//POST: Save a single car object
// app.post("/newcar", (req, res) => {
//     const makeCar = req.body;
//     const newCar = new Car({
//         make: makeCar.make,
//         model: makeCar.model,
//         year: makeCar.year,
//         dealership_id: makeCar.dealership_id
//     });

//     newCar
//         .save()
//         .then(car => {
//             return res.json(car);
//         })
//         .catch(error => {
//             return res.json(error);
//         });
// });

//PUT: Change attributes for a single car object
// app.put("/updatecar/:id", (req, res) => {
//     const data = req.body;
//     const attributesToUpdate = {
//         model: data.model,
//         make: data.make,
//         year: data.year,
//         dealership_id: data.dealership_id
//     }

//     Car.findOneAndUpdate({"_id":req.params.id}, attributesToUpdate)
//         .then(oldcar => {
//             return res.json(oldcar);
//         })
//         .catch(error => {
//             return res.json(error);
//         });
// });

//DELETE: Delete single car object
// app.delete("/deletecar/:id", (req, res) => {

//     Car.findOneAndRemove({"_id": req.params.id})
//         .then(deletedCar => {
//             return res.json(deletedCar);
//         })
//         .catch(error => {
//             return res.json(error);
//         });
// });

//GET: Retrieve all dealership objects
app.get('/dealerships', (req,res) => {
    Dealership.find({})
        .then(dealerships => {
            res.json(dealerships);
        })
        .catch(err => {
            res.json({err});
        });
});

// GET: Retrieve a single dealership object using id
// app.get("/:id", (req, res) => {
//     Dealership
//         .findById({_id:req.params.id})
//         .then(dealership => {
//             return res.json(dealership)
//         })
//         .catch(error => {
//             return res.json(error);
//         });
// });

// POST: Save a single dealership object
// app.post("/newdealership", (req, res) => {
//     const makeDealership = req.body;
//     const newDealership = new Dealership({
//         make: makeDealership.make,
//         city: makeDealership.city,
//         province: makeDealership.province,
//         postal_code: makeDealership.postal_code,
//         street: makeDealership.street,
//         reviews: makeDealership.reviews
//     });

//     newDealership
//         .save()
//         .then(car => {
//             return res.json(car);
//         })
//         .catch(error => {
//             return res.json(error);
//         });
// });

// PUT: Change attributes for a single dealership object
// app.put("/updatedealership/:id", (req, res) => {
//     const data = req.body;
//     const attributesToUpdate = {
//         make: data.make,
//         city: data.city,
//         province: data.province,
//         postal_code: data.postal_code,
//         street: data.street,
//         reviews: data.reviews
//     }

//     Dealership.findOneAndUpdate({"_id":req.params.id}, attributesToUpdate)
//         .then(oldDealership => {
//             return res.json(oldDealership);
//         })
//         .catch(error => {
//             return res.json(error);
//         });
// });

// DELETE: Delete single dealership object
// app.delete("/deletedealership/:id", (req, res) => {

//     Dealership.findOneAndRemove({"_id": req.params.id})
//         .then(deletedDealership => {
//             return res.json(deletedDealership);
//         })
//         .catch(error => {
//             return res.json(error);
//         });
// });
