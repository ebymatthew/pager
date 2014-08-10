/* /routes/guardiansRoute.js 
*/
App.GuardiansRoute = Ember.Route.extend(Ember.SimpleAuth.AuthenticatedRouteMixin).extend({
  model: function(){
    return this.store.find('guardian');
  }
});
