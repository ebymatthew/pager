/* /routes/usersRoute.js 
*/
App.UsersRoute = Ember.Route.extend(AuthorizedRouteMixin).extend({
  model: function(){
    return this.store.find('user');
  }
});
