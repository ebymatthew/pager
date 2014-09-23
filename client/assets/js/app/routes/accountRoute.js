/* /routes/accountRoute.js 
*/
App.AccountRoute = Ember.Route.extend(AuthorizedRouteMixin).extend({
  model: function(){
    return this.store.find('account').then(function (accounts) {
      return accounts.get('firstObject');
    });
  }
});
