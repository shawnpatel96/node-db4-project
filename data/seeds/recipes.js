
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, name: 'The Tears of Jesus'},
        {id: 2, name: 'Cheese Coated Cheese'},
        {id: 3, name: 'Tears of Jesus coated in Cheese...?'}
      ]);
    });
};
