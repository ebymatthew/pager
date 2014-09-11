/* /routes/accountsRoute.js 
*/
App.AccountsRoute = Ember.Route.extend(Ember.SimpleAuth.AuthenticatedRouteMixin).extend({
  model: function(){
    return this.store.find('account');
  }
});
