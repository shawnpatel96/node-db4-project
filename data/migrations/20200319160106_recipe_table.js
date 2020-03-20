
exports.up = function(knex) {

    // two main tables 
    return knex.schema.createTable('recipes', tbl=>{
        tbl.increments()

        tbl
            .string('name', 255)
            .notNullable()
            .unique();
    })

    // ingreaidants table     id | name | quantity | unit |

    .createTable('ingredients', tbl=>{
        tbl.increments()

        tbl
            .string('name', 255)
            .notNullable()
            .unique()
        tbl
            .float('amount')
      
        })
    /// end of two main tables
    /// start of byproduct of two main tables
    .createTable('instructions', tbl=>{
        tbl.increments()

        tbl.string('description', 255).notNullable()

        tbl
            .integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
          
          
            
    })
    .createTable('recipe_ingredients', tbl=>{
        tbl.primary(['recipe_id', 'ingredient_id'])

        tbl
            .integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
        
     

         tbl
            .integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('ingredients')
           
          
         })
    

  
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('instructions')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
