
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {id: 1, description: 'add oil',recipe_id: 1},
        {id: 2, description: 'add tears of jesus',recipe_id:1},
        {id: 3, description: 'add butter',recipe_id:1}
      ]);
    });
};
