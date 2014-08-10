/* /routes/childrenRoute.js 
*/
App.ChildrenRoute = Ember.Route.extend(Ember.SimpleAuth.AuthenticatedRouteMixin).extend({
  model: function(){
    return this.store.find('child');
  }
});
