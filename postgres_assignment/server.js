const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const knex = require('knex')({
    client: 'postgres',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'postgres',
        database: 'kardib',
        charset: 'utf8'
    }
});
const bookshelf = require('bookshelf')(knex);

const Car = bookshelf.Model.extend({
    tableName: 'cars',
    dealerships: function () {
        return this.belongsTo(Dealership)
    }
});

const Dealership = bookshelf.Model.extend({
    tableName: 'dealerships',
    cars: function () {
        return this.hasMany(Car)
    }
});

app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded 
app.use(bodyParser.json());// parse application/json 

app.listen(8080, () => {
    console.log('server running on 8080')
});

//GET: Retrieve all car objects
app.get("/cars", (req, res) => {
    Car
        .fetchAll()
        .then(cars => {
            return res.json(cars.models.map(car => car.attributes));
        })
        .catch(error => {
            return res.status(500).json(error);
        });
})

//GET: Retrieve a single car object using id
app.get("/car", (req, res) => {
    Car
        .where({ id: 3 })
        .fetch()
        .then(car => {
            return res.json(car.attributes)
        })
        .catch(error => {
            return res.status(500).json(error);
        });
})

//POST: Save a single car object
app.post("/newcar", (req, res) => {
    const Hyundai = new Car(req.body);

    Hyundai
        .save(req.body)
        .then(car => {
            return res.json(car.attributes);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
})

//PUT: Change attributes for a single car object
app.put("/updatecar", (req, res) => {
    const attributesToUpdate = {
        model: 'Elentra',
        year: 2014
    }

    new Car({id: 9})
        .save(attributesToUpdate)
        .then(car => {
            return res.json(car.attributes);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
});

//DELETE: Delete single car object
app.delete("/deletecar", (req, res) => {

    new Car(req.body)
        .destroy()
        .then(car => {
            return res.json(car.attributes);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
})

//GET: Retrieve all dealership objects
app.get("/dealerships", (req, res) => {
    Dealership
        .fetchAll()
        .then(dealerships => {
            return res.json(dealerships.models.map(dealership => dealership.attributes));
        })
        .catch(error => {
            return res.status(500).json(error);
        });
})

// GET: Retrieve a single dealership object using id
app.get("/dealership", (req, res) => {
    Dealership
        .where({ id: 2 })
        .fetch()
        .then(dealership => {
            return res.json(dealership.attributes)
        })
        .catch(error => {
            return res.status(500).json(error);
        });
})

// POST: Save a single dealership object
app.post("/newdealership", (req, res) => {
    new Dealership(req.body)
        .save(req.body)
        .then(dealership => {
            return res.json(dealership.attributes);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
})

// PUT: Change attributes for a single dealership object
app.put("/updatedealership", (req, res) => {
    const attributesToUpdate = {
        city: 'Winnipeg',
        province: 'MB',
        postal_code: 'R2C 0A1'
    }

    new Dealership({id: 5})
        .save(attributesToUpdate)
        .then(dealership => {
            return res.json(dealership.attributes);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
});

// DELETE: Delete single dealership object
app.delete("/deletedealership", (req, res) => {

    new Dealership(req.body)
        .destroy()
        .then(dealership => {
            return res.json(dealership.attributes);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
})