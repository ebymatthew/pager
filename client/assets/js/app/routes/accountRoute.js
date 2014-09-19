/* /routes/accountRoute.js 
*/
App.AccountRoute = Ember.Route.extend(AuthorizedRouteMixin).extend({
  model: function(){
    var accountId = this.get('session.profile.accountId');
    return this.store.find('account', accountId);
  }
});
