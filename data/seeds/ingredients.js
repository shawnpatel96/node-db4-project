
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: 'oil', amount: 2, },
        {id: 2, name: 'butter',amount: 4, },
        {id: 3, name: 'tears',amount: 1, },
        {id: 4, name: 'lettuce',amount: 3,}
      ]);
    });
};
