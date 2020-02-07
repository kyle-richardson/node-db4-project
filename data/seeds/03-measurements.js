exports.seed = function(knex) {
  return knex('measurements').insert([
    {measurement_name: 'cup'},
    {measurement_name: 'oz'},
    {measurement_name: 'fl oz'},
    {measurement_name: 'tbsp'},
    {measurement_name: 'tsp'},
    {measurement_name: 'units'},

  ]);
};
