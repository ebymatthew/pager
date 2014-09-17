/* /routes/accountsRoute.js 
*/
App.Account2Route = Ember.Route.extend(Ember.SimpleAuth.AuthenticatedRouteMixin).extend({
  model: function(){
    return this.store.find('account', '-JWXchtSIBW16KTVFqov');
  }
});
