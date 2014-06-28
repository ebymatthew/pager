/* /controllers/usersController.js 
*/
App.UsersController = Ember.ArrayController.extend({
  sortProperties: ['name'],
  sortAscending: true // false = descending
});
