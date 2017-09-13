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
    cars: function() {
        return this.hasMany(Car)
    }
});

//MAKE NEW CARS AND SAVE
/*const angelCar = new Car({
    make: "Hyundai",
    model: "Sonata",
    year: 2017,
    dealership_id: 1
});
angelCar.save()
        .then(car => {
            console.log(car.attributes);
        });

const jonCar = new Car({
    make: "Hyundai",
    model: "Accent",
    year: 2015,
    dealership_id: 2
});
jonCar.save()
      .then(car => {
            console.log(car.attributes);
       });
*/

//GET ALL CARS
/*Car.fetchAll()
    .then(cars => {
        console.log(cars.models.map(car => car.attributes));
    });
*/

//GET CARS WITH A FILTER
/*Car
    .where({year: 2017})
    .fetchAll()
    .then(car => {
        console.log(car.attributes)
    });
*/

//GET A SINGLE CAR WITH ID
/*Car
    .where({id: 3})
    .fetch()
    .then(car => {
        console.log(car.attributes)
    });
*/

//UPDATE A SINGLE CAR WITH NEW ATTRIBUTE VALUES
/*const attributesToUpdate = {
    model: 'Elentra',
    year: 2014
}

new Car({id: 1})
    .save(attributesToUpdate)
    .then(car => {
        console.log(car.attributes)
    });
    */

//GET DEALERSHIP OF A SINGLE CAR
/*Car
    .where({id: 2})
    .fetch({withRelated:'dealerships'})
    .then(car=>{   
        console.log(car.related('dealerships').attributes)
    });
*/

//GET ALL CARS FOR A SINGLE DEALERSHIP
Dealership
    .where({id: 1})
    .fetch({withRelated: 'cars'})
    .then(dealership => {
        const cars = dealership.related('cars')
        console.log(cars.models.map(car => car.attributes))
    });