/* /routes/childrenRoute.js 
*/
App.ChildrenRoute = Ember.Route.extend({
  model: function(){
    return this.store.find('child');
  }
});
