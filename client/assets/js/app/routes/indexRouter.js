/* /routes/indexRoute.js 
*/
App.IndexRoute = Ember.Route.extend({
  redirect: function(){
    this.transitionTo('children');
  }
});
