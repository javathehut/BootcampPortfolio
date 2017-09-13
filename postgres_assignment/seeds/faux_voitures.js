
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return Promise.all([
      knex('cars').insert(
        {make: "Hyundai", 
        model: "SantaFe",
        year: 2013,
        dealership_id: 1})
        ]);
    });
};
